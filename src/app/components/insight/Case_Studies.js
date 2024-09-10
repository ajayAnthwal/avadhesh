import React from "react";
import Image from "next/image";

const Case_study = () => {
  return (
    <div className="w-full">
      <div className="mt-7">
        <Image
          src="/Vector (1).png"
          alt="img"
          className="w-full"
          height={100}
          width={100}
        />
        <section className="pt-12 bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] res-desktop">
          <div className="container mx-auto">
            <h1 className="text-center text-3xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-center text-lg mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry standard.
            </p>

            <div className="flex justify-center px-4  w-full pb-9">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  max-w-screen-xl lg:w-[70%] ">
                <div className="bg-white shadow-lg rounded-lg p-6 h-96 box-third-container">
                  <div className="h-44 bg-gray-300  rounded-md mb-4">
                    <Image
                      src="/developer.webp"
                      alt="Developer"
                      className="h-[177px] w-full object-cover"
                      width={500}
                      height={177}
                    />
                    <button className=" m-auto flex relative bottom-4 bg-black hover:bg-gray-300 text-white py-2 px-4 rounded z-10">
                      Button
                    </button>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 h-96 box-third-container">
                  <div className="h-44 bg-gray-300 rounded-md mb-4">
                    <Image
                      src="/developer.webp"
                      alt="Developer"
                      className="h-[177px] w-full object-cover"
                      width={500}
                      height={177}
                    />
                    <button className=" m-auto flex relative bottom-4 bg-black hover:bg-gray-300 text-white py-2 px-4 rounded z-10">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Case_study;
