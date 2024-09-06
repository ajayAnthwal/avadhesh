import React from "react";

const Call_us = () => {
  return (
    <div>
     <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl">
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-center about-title text-4xl font-bold mb-6">
            Have Questions?
          </h1>
          <button className="btn-gray-call mb-4">
            Schedule a call with us
          </button>
          <p className="paragraph">
            <a
              href="#"
              className="text-dark text-decoration-underline call-paragraph"
            >
              Click on the FAQs page to know more about how we can help you?
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Call_us;
