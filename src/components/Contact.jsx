import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // In a real application, you would send this to your backend
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
    setError('');
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/20 dark:to-dark-950" id="contact">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 opacity-10">
          <img src="/images/abstract-shape-1.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-10">
          <img src="/images/abstract-shape-2.svg" alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
            Get in Touch
          </motion.span>

          <motion.h2
            className="mt-6 text-3xl font-display font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ready to <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">boost your conversions</span>?
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl text-xl text-dark-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Get in touch with our team or sign up for our newsletter to stay updated with the latest features and offers.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Contact Us</h3>

            {submitted ? (
              <motion.div
                className="rounded-xl bg-primary-50 p-6 border border-primary-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <FiCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-dark-900">
                      Thank you for reaching out!
                    </h4>
                    <p className="mt-1 text-dark-500">
                      We've received your message and will get back to you shortly.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`w-full px-4 py-3 border ${
                      error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-dark-200 focus:ring-primary-500 focus:border-primary-500'
                    } rounded-lg shadow-sm`}
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {error}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-md hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="mr-2 h-5 w-5" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-soft p-8 text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <p className="mb-8">
              Sign up for our newsletter to stay up to date with feature releases, special offers, and exclusive content.
            </p>

            {submitted ? (
              <motion.div
                className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <FiCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">
                      You're subscribed!
                    </h4>
                    <p className="mt-1 text-white/80">
                      Thank you for subscribing to our newsletter.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative rounded-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-white/60" />
                    </div>
                    <input
                      id="newsletter-email"
                      name="newsletter-email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 pr-4 py-3.5 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3.5 border border-white/20 rounded-lg text-primary-700 bg-white hover:bg-white/90 shadow-md hover:shadow-lg transition-all duration-200 dark:text-primary-600 dark:border-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            )}

            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Connect with us</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
