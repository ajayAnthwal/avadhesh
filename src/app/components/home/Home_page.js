import React from "react";
import Image from "next/image";
import "../../css/slider.css";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto my-6 px-4 lg:px-20 mt-14">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div
            className="flex justify-center items-center"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <div className="w-full">
              <div className="mx-auto container">
                <div className="flex flex-col items-center justify-center">
                  <video controls className="w-full md:h-[300px] h-auto">
                    <source src="/play-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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

      <Image
        src="/Vector (1).png"
        alt="img"
        className="w-full"
        width={1920}
        height={1080}
      />
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
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3 mb-4 lg:mb-0">
              <div className="left-panel flex flex-col h-full p-4 bg-gray-300 shadow-lg">
                <div className="content text-lg landing">
                  Landing / Blog / Highlights
                </div>
              </div>
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="box h-64 bg-white rounded-md shadow-lg">
                  <Image
                    src="/developer.webp"
                    alt="Developer"
                    className="h-[255px] w-full object-cover"
                    width={500}
                    height={255}
                  />
                </div>
                <div className="box h-64 bg-white rounded-md shadow-lg">
                  <Image
                    src="/developer.webp"
                    alt="Developer"
                    className="h-[255px] w-full object-cover"
                    width={500}
                    height={255}
                  />
                </div>
                <div className="box h-64 bg-white rounded-md shadow-lg">
                  <Image
                    src="/developer.webp"
                    alt="Developer"
                    className="h-[255px] w-full object-cover"
                    width={500}
                    height={255}
                  />
                </div>
                <div className="box h-64 bg-white rounded-md shadow-lg">
                  <Image
                    src="/developer.webp"
                    alt="Developer"
                    className="h-[255px] w-full object-cover"
                    width={500}
                    height={255}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
