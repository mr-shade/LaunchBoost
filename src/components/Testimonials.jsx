import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      content: "LaunchBoost helped us increase our conversion rate by 43% in just two months. The platform is intuitive and the support team is incredibly responsive.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      content: "We've tried several landing page solutions, but LaunchBoost stands out with its powerful analytics and ease of use. It's been a game-changer for our marketing team.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      content: "The customer support at LaunchBoost is exceptional. They helped us customize our landing page to perfectly match our brand identity and messaging.",
      author: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      content: "LaunchBoost's analytics tools have given us insights we never had before. We've been able to optimize our campaigns and increase ROI significantly.",
      author: "David Wilson",
      role: "Growth Lead, Startup.io",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4,
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
    <div className="py-24 bg-gradient-to-b from-white to-primary-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary-600 mr-2"></span>
            Customer Stories
          </motion.span>

          <motion.h2
            className="mt-6 text-3xl font-display font-bold tracking-tight text-dark-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Trusted by <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">businesses worldwide</span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl text-xl text-dark-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            See what our customers have to say about their experience with LaunchBoost.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-base text-dark-600 pl-6">{testimonial.content}</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-primary-50 to-secondary-50 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full ring-2 ring-white" src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-dark-900">{testimonial.author}</p>
                    <p className="text-sm text-dark-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-soft p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-dark-900">Ready to boost your conversions?</h3>
              <p className="mt-2 text-dark-500">Join thousands of satisfied customers using LaunchBoost today.</p>
            </div>
            <div className="mt-5 sm:mt-0">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get started today
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
