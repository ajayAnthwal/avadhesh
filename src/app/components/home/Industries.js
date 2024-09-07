import React from "react";

const Industries = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-center text-3xl font-bold mb-6">
          Industries we served
        </h1>
        <p className="text-center text-lg mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry standard.
        </p>

        {/* Flex container for the industries */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
          {/* Single Box */}
          <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full lg:w-1/3 h-96">
            <div className="h-44 bg-white rounded-md mb-4"></div>
            <button className="btn-custom -mt-7  flex justify-center m-auto items-center bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
              Button
            </button>
          </div>

          {/* Single Box */}
          <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full lg:w-1/3 h-96">
            <div className="h-44 bg-white rounded-md mb-4"></div>
            <button className="btn-custom -mt-7  flex justify-center m-auto items-center bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
              Button
            </button>
          </div>

          {/* Single Box */}
          <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full lg:w-1/3 h-96">
            <div className="h-44 bg-white rounded-md mb-4"></div>
            <button className="btn-custom -mt-7  flex justify-center m-auto items-center bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
