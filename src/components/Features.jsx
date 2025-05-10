import { motion } from 'framer-motion';
import { FiZap, FiBarChart2, FiLock, FiHeadphones, FiUsers, FiGlobe } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows without any hassle.",
      icon: <FiZap />,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Powerful Analytics",
      description: "Gain valuable insights with our comprehensive analytics dashboard and real-time reporting.",
      icon: <FiBarChart2 />,
      color: "from-secondary-500 to-secondary-600",
    },
    {
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and compliance measures.",
      icon: <FiLock />,
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions.",
      icon: <FiHeadphones />,
      color: "from-primary-500 to-secondary-600",
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members with our collaborative features.",
      icon: <FiUsers />,
      color: "from-secondary-500 to-accent-500",
    },
    {
      title: "Global Reach",
      description: "Expand your business globally with our multi-language and multi-currency support.",
      icon: <FiGlobe />,
      color: "from-accent-500 to-primary-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-24 bg-white dark:bg-dark-950" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
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
            Powerful Features
          </motion.span>

          <motion.h2
            className="mt-6 text-3xl font-display font-bold tracking-tight text-dark-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Everything you need to <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">succeed</span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl text-xl text-dark-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our platform provides all the tools you need to launch and grow your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-dark-800 rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-all duration-300 group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm bg-gradient-to-r ${feature.color}`}></div>

              <div className="p-6">
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-5`}>
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-dark-500 dark:text-dark-300">{feature.description}</p>
              </div>
              <div className={`h-1.5 w-full bg-gradient-to-r ${feature.color}`}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-md hover:shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get started with all features
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
