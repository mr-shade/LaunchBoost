import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

const ScrollIndicator = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const updateScrollToTop = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', updateScrollToTop);
    return () => window.removeEventListener('scroll', updateScrollToTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress bar at the top of the page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Scroll down indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToContent}
        style={{ display: showScrollToTop ? 'none' : 'block' }}
      >
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-sm font-medium text-dark-600 dark:text-dark-300 mb-2">Scroll Down</span>
          <div className="h-10 w-10 rounded-full bg-white dark:bg-dark-800 shadow-md flex items-center justify-center text-primary-600 dark:text-primary-400 animate-bounce">
            <FiArrowDown className="h-5 w-5" />
          </div>
        </div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 shadow-lg flex items-center justify-center text-white cursor-pointer">
          <FiArrowUp className="h-5 w-5" />
        </div>
      </motion.div>
    </>
  );
};

export default ScrollIndicator;
