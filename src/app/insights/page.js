import React from "react";
import Sliders from "../components/sliders/sliders";
import Featured_blogs from "../components/insight/Featured_blogs";
import EbookSection from "../components/insight/EbookSection";

const Insights = () => {
  return (
    <div>
      <Sliders />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full px-4-5 mt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">What we do</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-300 pt-16 px-6 pb-6 rounded-lg shadow-lg text-center"
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border border-black"></div>

                  <p className="mt-12 text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Featured_blogs />
      <EbookSection />
    </div>
  );
};

export default Insights;
