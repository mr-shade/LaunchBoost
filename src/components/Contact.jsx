import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
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
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
    setEmail('');
  };

  return (
    <div className="bg-indigo-700" id="contact">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
            Get product updates
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
            Sign up for our newsletter to stay up to date with feature releases, special offers, and exclusive content.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          {submitted ? (
            <div className="rounded-md bg-indigo-800 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-indigo-200">
                    Thank you! Your submission has been received.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form className="sm:flex" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`w-full px-5 py-3 border ${
                  error ? 'border-red-300' : 'border-indigo-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get started
                </button>
              </div>
            </form>
          )}
          {error && (
            <p className="mt-2 text-sm text-red-300" id="email-error">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
