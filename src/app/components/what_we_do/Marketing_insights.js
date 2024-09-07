import React from "react";

const Marketing_insights = () => {
  return (
    <div>
      <div className="mt-7">
        <img src="./Vector (2).png" alt="img" className="w-full" />
        <section className="pt-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] res-desktop">
          <div className="container">
            <h1 className="text-center text-3xl font-bold mb-6">
              Recommended marketing insights
            </h1>
            <p className="text-center text-lg mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry standard.
            </p>

            <div className="flex justify-center px-4-5 w-full">
              <div className="flex gap-4 w-full box-third">
                <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-1/3 h-96 box-third-container">
                  <div className="h-44 bg-white rounded-md mb-4"></div>
                  <button className="btn-custom mt-4 flex justify-center m-auto items-center bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
                    Button
                  </button>
                </div>
                <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-1/3 h-96  box-third-container">
                  <div className="h-44 bg-white rounded-md mb-4"></div>
                  <button className="btn-custom flex justify-center m-auto mt-4 bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
                    Button
                  </button>
                </div>
                <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-1/3 h-96  box-third-container">
                  <div className="h-44 bg-white rounded-md mb-4"></div>
                  <button className="btn-custom mt-4 flex justify-center m-auto bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl  bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] ">
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
        </section>
      </div>
    
    </div>
  );
};

export default Marketing_insights;
