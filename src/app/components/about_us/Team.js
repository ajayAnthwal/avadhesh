import React from "react";

const Team = () => {
  return (
    <section className="py-12 px-4-5">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Our differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className=" bg-orange-400 text-white p-6 rounded-lg shadow-lg">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 10.278V10a7 7 0 10-14 0v.278a3.5 3.5 0 00-.948 2.197v4.475c0 1.06.562 2.008 1.488 2.498C6.896 20.53 9.3 21 12 21s5.104-.47 6.46-1.552a2.499 2.499 0 001.488-2.498v-4.475a3.5 3.5 0 00-.948-2.197z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-left">Outcome Focused</h3>
              <p className="text-left">
                We mutually define outcomes that deliver value for our
                customers.
              </p>
            </div>
          </div>

          <div className=" bg-yellow-400 text-black p-6 rounded-lg shadow-lg">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-left">
                Flexible Commercial Models
              </h3>
              <p className="text-left">
                We engage with our customers in various commercial models
                including short, long term, and transaction-based pricing.
              </p>
            </div>
          </div>

          <div className=" bg-green-400 text-black p-6 rounded-lg shadow-lg">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 5c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 16c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-left">IP & Assets</h3>
              <p className="text-left">
                We continuously invest in building internal assets to
                differentiate our services.
              </p>
            </div>
          </div>

          <div className=" bg-blue-400 text-white p-6 rounded-lg shadow-lg">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h1v4zm-1-6h1V8h-1v2zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-left">
                Integrated Approach
              </h3>
              <p className="text-left">
                We engage with our customers in various commercial models
                including short, long term, and transaction-based pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
