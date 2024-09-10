import React from "react";
import Image from "next/image";

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
        <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
          <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full lg:w-1/3 h-96">
            <div className="h-44 bg-white rounded-md mb-4 relative">
              <Image
                src="/developer.webp"
                alt="Developer"
                className="h-[177px] w-full object-cover"
                width={500}
                height={177}
              />
              <button className="absolute bottom-[-14%] left-1/2 transform -translate-x-1/2 bg-black hover:bg-gray-300 text-white py-2 px-4 rounded z-10">
                Button
              </button>
            </div>
          </div>
          <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full lg:w-1/3 h-96">
            <div className="h-44 bg-white rounded-md mb-4 relative">
              <Image
                src="/developer.webp"
                alt="Developer"
                className="h-[177px] w-full object-cover"
                width={500}
                height={177}
              />
              <button className="absolute bottom-[-14%] left-1/2 transform -translate-x-1/2 bg-black hover:bg-gray-300 text-white py-2 px-4 rounded z-10">
                Button
              </button>
            </div>
          </div>
          <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full lg:w-1/3 h-96">
            <div className="h-44 bg-white rounded-md mb-4 relative">
              <Image
                src="/developer.webp"
                alt="Developer"
                className="h-[177px] w-full object-cover"
                width={500}
                height={177}
              />
              <button className="absolute bottom-[-14%] left-1/2 transform -translate-x-1/2 bg-black hover:bg-gray-300 text-white py-2 px-4 rounded z-10">
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
