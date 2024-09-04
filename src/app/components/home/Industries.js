import React from "react";

const Industries = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
          Industries we served
        </h1>
        <p className="text-center text-lg mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard.
        </p>

        <div className="flex justify-center px-4-5 w-full">
          <div className="flex gap-4 w-full box-third">
            <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-1/3 h-96 box-third-container ">
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
    </section>
  );
};

export default Industries;
