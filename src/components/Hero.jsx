import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import FloatingObject from './FloatingObject';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-white to-primary-50" id="home">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-pattern.svg"
          alt=""
          className="absolute w-full h-full object-cover opacity-50"
        />

        {/* Animated floating objects */}
        <FloatingObject
          imageUrl="/images/abstract-shape-1.svg"
          className="absolute -top-24 -right-24 opacity-20"
          width={400}
          height={400}
          rotationSpeed={0.3}
          floatAmplitude={15}
        />

        <FloatingObject
          imageUrl="/images/abstract-shape-2.svg"
          className="absolute -bottom-24 -left-24 opacity-20"
          width={400}
          height={400}
          rotationSpeed={-0.2}
          floatAmplitude={20}
          floatSpeed={2}
        />

        <FloatingObject
          imageUrl="/images/logo.svg"
          className="absolute top-1/4 right-1/3 hidden lg:block"
          width={80}
          height={80}
          rotationSpeed={0.5}
          floatAmplitude={30}
          floatSpeed={4}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
                New Release v2.0
              </motion.span>

              <motion.h1
                className="mt-6 text-4xl font-display font-extrabold tracking-tight text-dark-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="block">Launch your product</span>{' '}
                <span className="block mt-1 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  with confidence
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-base text-dark-500 sm:text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                A sleek and modern landing page perfect for launching a new SaaS or mobile app.
                Features bold CTAs, product feature sections, testimonials, and email capture —
                optimized for conversions from day one.
              </motion.p>

              <motion.div
                className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-md hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started
                  <FiArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </motion.a>

                <motion.a
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-8 flex items-center justify-center lg:justify-start space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                      alt=""
                    />
                  ))}
                </div>
                <div className="text-sm text-dark-500">
                  <span className="font-medium text-primary-600">500+</span> happy customers
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-xl lg:max-w-md">
              <motion.div
                className="relative block w-full bg-white rounded-lg overflow-hidden shadow-soft"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="App dashboard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10" src="/images/logo.svg" alt="LaunchBoost" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">LaunchBoost Dashboard</p>
                      <p className="text-xs text-white/80">Analytics & Conversion Tracking</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-soft p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="h-4 w-4 rounded-full bg-green-500"></span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-dark-900">Conversion Rate</p>
                    <p className="text-sm font-bold text-green-600">+27.4%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-soft p-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="h-4 w-4 rounded-full bg-primary-500"></span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-dark-900">New Signups</p>
                    <p className="text-sm font-bold text-primary-600">+124</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
