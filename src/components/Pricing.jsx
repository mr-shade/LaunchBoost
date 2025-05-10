import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiExternalLink } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups.",
      features: [
        "1 landing page",
        "Up to 1,000 visitors/month",
        "Basic analytics",
        "Email support",
        "Custom domain",
      ],
      cta: "Get started",
      highlighted: false,
      color: "from-primary-500 to-primary-600",
      badge: null,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and teams.",
      features: [
        "5 landing pages",
        "Up to 10,000 visitors/month",
        "Advanced analytics",
        "Priority email support",
        "Custom domain",
        "A/B testing",
        "Integrations with 20+ tools",
      ],
      cta: "Get started",
      highlighted: true,
      color: "from-primary-600 to-secondary-600",
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs.",
      features: [
        "Unlimited landing pages",
        "Unlimited visitors",
        "Enterprise analytics",
        "24/7 phone & email support",
        "Custom domain",
        "A/B testing",
        "Integrations with 100+ tools",
        "Dedicated account manager",
        "Custom development",
      ],
      cta: "Contact sales",
      highlighted: false,
      color: "from-secondary-500 to-secondary-600",
      badge: null,
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
    <div className="py-24 bg-white dark:bg-dark-950" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent-100 text-accent-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-accent-600 mr-2"></span>
            Simple Pricing
          </motion.span>

          <motion.h2
            className="mt-6 text-3xl font-display font-bold tracking-tight text-dark-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Plans for <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">businesses of all sizes</span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl text-xl text-dark-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Choose the perfect plan for your needs. Always know what you'll pay.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white dark:bg-dark-900 rounded-2xl overflow-hidden ${
                plan.highlighted
                  ? "ring-4 ring-primary-600/20 dark:ring-primary-600/10 shadow-strong"
                  : "border border-gray-200 dark:border-dark-700 shadow-soft"
              }`}
              variants={item}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-dark-500 dark:text-dark-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-display font-extrabold bg-gradient-to-r from-dark-800 to-dark-900 dark:from-white dark:to-dark-200 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xl text-dark-500 dark:text-dark-400">{plan.period}</span>
                </div>

                <motion.a
                  href="#contact"
                  className={`mt-8 block w-full py-3.5 px-6 border border-transparent rounded-lg text-center font-medium ${
                    plan.highlighted
                      ? `text-white bg-gradient-to-r ${plan.color} shadow-md hover:shadow-lg`
                      : "text-dark-700 dark:text-dark-300 bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600"
                  } transition-all duration-200`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="flex items-center justify-center">
                    {plan.cta}
                    {plan.highlighted && <FiArrowRight className="ml-2 -mr-1 h-5 w-5" />}
                  </span>
                </motion.a>
              </div>

              <div className="px-8 pt-6 pb-8 bg-dark-50 dark:bg-dark-800 border-t border-gray-100 dark:border-dark-700">
                <h4 className="text-sm font-medium text-dark-900 dark:text-white uppercase tracking-wider">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white`}>
                        <FiCheck className="h-4 w-4" />
                      </div>
                      <span className="ml-3 text-base text-dark-600 dark:text-dark-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.highlighted && (
                <div className={`h-1.5 w-full bg-gradient-to-r ${plan.color}`}></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-dark-50 dark:bg-dark-800 rounded-2xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100">Need a custom plan?</h3>
            <p className="mt-2 text-dark-500 dark:text-dark-400">Contact our sales team for a custom quote tailored to your specific needs.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:hover:bg-primary-900/30 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact sales
              </motion.a>
              <motion.a
                href="https://mrshade.gumroad.com/l/LaunchBoost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Purchase Now <FiExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
