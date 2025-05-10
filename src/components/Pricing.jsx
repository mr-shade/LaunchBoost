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
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Plans for businesses of all sizes
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.highlighted
                  ? "border-2 border-indigo-600 shadow-xl"
                  : "border border-gray-200"
              } bg-white rounded-lg shadow-sm divide-y divide-gray-200`}
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">{plan.period}</span>
                </p>
                <a
                  href="#contact"
                  className={`${
                    plan.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
