import React from "react";
import "../../css/slider.css";

const Marketing = () => {
  return (
    <div className="mt-9">
      <img src="./Vector (1).png" alt="img" className="w-full" />
      <section className="flex flex-col items-center justify-center p-8  bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] res-desktop px-4-5 ">
        <div
          className="p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full container marketing"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <div className=" h-56 w-full md:w-1/3 rounded-lg border border-gray-300 mb-4 md:mb-0 md:mr-6 bg-white"></div>
          <div className="flex flex-col justify-between w-full md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Wondering what all we do in CFaaS?
            </h3>
            <p className="text-black mb-4 text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="p-2 rounded-md w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-black rounded-3xl text-white px-4 py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              Get Your Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
