import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AvatarsSection = () => {
  return (
    <>
      <img src="./Vector (1).png" alt="img" className="w-full" />
      <section className="py-12 bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] px-4-5">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Meet the AvaStars</h2>
          <div className="flex items-center justify-between">
            <AiOutlineLeft size={30} className="cursor-pointer" />
            <div className="grid grid-cols-3 gap-4 w-full px-4">
              <div className="border border-black rounded-lg w-full h-96 bg-white"></div>
              <div className="border border-black rounded-lg w-full h-96 bg-white"></div>
              <div className="border border-black rounded-lg w-full h-96 bg-white"></div>
            </div>
            <AiOutlineRight size={30} className="cursor-pointer" />
          </div>
          <button className="mt-6 px-6 py-2 border border-black rounded-md hover:bg-gray-200 transition duration-200 bg-white">
            View all members
          </button>
        </div>
      </section>
    </>
  );
};

export default AvatarsSection;
