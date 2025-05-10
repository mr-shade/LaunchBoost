import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiStar, FiDownload, FiGlobe } from 'react-icons/fi';

const CounterItem = ({ icon, value, label, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observerRef.current = observer;
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const startCounter = () => {
    let startTime;
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.floor(progress * value));
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };
    
    // Delay the start of the animation
    setTimeout(() => {
      requestAnimationFrame(updateCount);
    }, delay * 1000);
  };
  
  return (
    <motion.div
      ref={countRef}
      className="text-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.5 }}
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white mb-4">
        {icon}
      </div>
      <div className="text-4xl font-display font-bold text-dark-900 dark:text-white">{count.toLocaleString()}</div>
      <div className="mt-2 text-dark-500 dark:text-dark-400">{label}</div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: <FiUsers className="h-8 w-8" />,
      value: 10000,
      label: "Happy Customers",
      delay: 0,
    },
    {
      icon: <FiStar className="h-8 w-8" />,
      value: 4.9,
      label: "Average Rating",
      delay: 0.2,
    },
    {
      icon: <FiDownload className="h-8 w-8" />,
      value: 50000,
      label: "Downloads",
      delay: 0.4,
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      value: 120,
      label: "Countries",
      delay: 0.6,
    },
  ];
  
  return (
    <div className="py-16 bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary-600 mr-2"></span>
            Our Impact
          </motion.span>
          
          <motion.h2
            className="mt-6 text-3xl font-display font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Trusted by <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">thousands</span> worldwide
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
