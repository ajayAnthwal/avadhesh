import React from "react";
import "../../css/slider.css";

const HomePage = () => {
  return (
    <>
      {/* Video Section */}
      <div className="container mx-auto my-6 px-4 lg:px-20 mt-14">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div
            className="flex justify-center items-center md:justify-start w-full md:w-1/2 video-play"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <div className="w-2/3 md:w-full">
              <div className="max-w-sm mx-auto">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="./play.png"
                    alt="Play Button"
                    width={47}
                    height={37}
                  />
                  <p className="text-center mt-2">
                    Video that sir sent <br />
                    (Company Video)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-left text-2xl font-bold mb-4">
              Lorem Ipsum is simply dummy
            </h2>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the Lorem it.
            </p>
          </div>
        </div>
      </div>

      <img src="./Vector (1).png" alt="img" className="w-full" />

      {/* Latest Highlight Section */}
      <div className="hero top-section bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] py-12">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-center about-title text-4xl font-bold mb-6">
            Latest Highlight
          </h1>
          <p className="text-center text-lg mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry&#39;s standard.
          </p>

          {/* Flex container for the "Latest Highlight" section */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Panel */}
            <div className="lg:w-1/4 mb-4 lg:mb-0">
              <div className="left-panel flex flex-col h-full p-4 bg-gray-300 shadow-lg">
                <div className="content text-lg landing">
                  Landing / Blog / Highlights
                </div>
              </div>
            </div>

            {/* Right Panel - Cards */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="box h-64 bg-white rounded-md shadow-lg"></div>
                <div className="box h-64 bg-white rounded-md shadow-lg"></div>
                <div className="box h-64 bg-white rounded-md shadow-lg"></div>
                <div className="box h-64 bg-white rounded-md shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
