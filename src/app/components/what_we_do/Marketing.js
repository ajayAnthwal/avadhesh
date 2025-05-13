import React from "react";
import "../../css/slider.css";
import Image from "next/image";

const Marketing = () => {
  return (
    <div className="w-full px-2 md:px-0 ">
      <div className="container m-auto ">
        <section className="flex flex-col items-center justify-center py-8 bg-white">
          <div className="bg-[#FDA20F] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full container res-ebook">
            <div className="bg-white h-56 w-full md:w-1/3 rounded-lg border border-gray-300 mb-4 md:mb-0 md:mr-6">
              <Image
                src="/geometric-abstract-design-with-minimalistic-shapes-neutral-background.jpg"
                alt="Developer"
                className="h-[221px] w-full object-cover"
                width={500}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Wondering what all we do in CFaaS?
              </h3>
              <p className="text-black mb-4 text-sm md:text-base">
                We’re here to strengthen your business strategy with flexible
                models, helping you achieve key outcomes and freeing you to
                focus on what matters most. With our support, you can
                confidently drive success while we handle the rest  
              </p>
              <button className="bg-black rounded-md text-white px-4 py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-40">
                Get Your Copy
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketing;
