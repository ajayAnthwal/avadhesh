import React from "react";

const Case_study = () => {
  return (
    <div>
      <div className="mt-7">
        <img src="./Vector (1).png" alt="img" className="w-full" />
        <section className="py-12 bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] res-desktop">
          <div className="container">
            <h1 className="text-center text-3xl font-bold mb-6">
            Case Studies
            </h1>
            <p className="text-center text-lg mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry standard.
            </p>

            <div className="flex justify-center px-4-5 w-ful m-auto items-center">
              <div className="flex gap-4 w-full box-third justify-center m-auto">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Case_study;
