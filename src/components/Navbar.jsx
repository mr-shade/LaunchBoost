import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const externalLinks = [
    { name: 'Demo', href: 'https://launchboost.pages.dev', external: true },
    { name: 'Purchase', href: 'https://mrshade.gumroad.com/l/LaunchBoost', external: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/images/logo.svg" alt="LaunchBoost Logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                LaunchBoost
              </span>
            </motion.div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  scrolled ? 'text-blue-950 hover:text-primary-600 dark:text-dark-200 dark:hover:text-primary-400' : 'text-dark-700 hover:text-primary-500 dark:text-dark-200 dark:hover:text-primary-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}

            {externalLinks.map((link, index) => (
              <motion.a
                key={`ext-${index}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${
                  scrolled ? 'text-blue-950 hover:text-primary-600 dark:text-dark-200 dark:hover:text-primary-400' : 'text-dark-700 hover:text-primary-500 dark:text-dark-200 dark:hover:text-primary-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <FiExternalLink className="ml-1 h-3 w-3" />
              </motion.a>
            ))}

            {/* <div className="ml-2">
              <DarkModeToggle />
            </div> */}

            <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

            <motion.a
              href="#contact"
              className="ml-4 px-5 py-2.5 rounded-md text-sm font-medium bg-gradient-to-r from-primary-600 to-secondary-600 text-blue-950 dark:text-blue-800 shadow-md hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-dark-900 hover:text-primary-600 dark:text-dark-200 dark:hover:text-primary-400' : 'text-dark-700 hover:text-primary-500 dark:text-dark-200 dark:hover:text-primary-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-dark-900 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50 dark:text-dark-200 dark:hover:text-primary-400 dark:hover:bg-dark-700"
                whileHover={{ x: 5 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}

            {externalLinks.map((link, index) => (
              <motion.a
                key={`ext-${index}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50 dark:text-dark-200 dark:hover:text-primary-400 dark:hover:bg-dark-700"
                whileHover={{ x: 5 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <FiExternalLink className="ml-1 h-4 w-4" />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
              whileHover={{ x: 5 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
