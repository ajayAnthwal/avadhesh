import React from "react";

const Case_study = () => {
  return (
    <div className="w-full">
      <div className="mt-7">
        <img src="./Vector (1).png" alt="img" className="w-full" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  max-w-screen-xl w-[70%]">
                <div className="bg-gray-300 shadow-lg rounded-lg p-6 h-96 box-third-container">
                  <div className="h-44 bg-white rounded-md mb-4"></div>
                  <button className="btn-custom -mt-7 flex justify-center m-auto items-center bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
                    Button
                  </button>
                </div>
                <div className="bg-gray-300 shadow-lg rounded-lg p-6 h-96 box-third-container">
                  <div className="h-44 bg-white rounded-md mb-4"></div>
                  <button className="btn-custom -mt-7 flex justify-center m-auto items-center bg-black hover:bg-gray-300 text-white py-2 px-4 rounded">
                    Button
                  </button>
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
