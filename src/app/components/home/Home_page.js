import React from "react";
import Image from "next/image";
import "../../css/slider.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto my-6 mt-14">
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
          <div className="w-full md:w-1/2 px-2 md:px-0">
            <h2 className="text-left text-2xl font-bold mb-4">
              Augment. Amplify. Accelerate. 
            </h2>
            <p className="text-justify hero-description">
              At AvadheshCo, we Augment your operations to achieve excellence
              and reduce costs. We Amplify business outcomes to maximize ROI and
              Accelerate success by streamlining processes and eliminating
              distractions. As the world’s first CFaaS (Corporate Functions as a
              Service) provider, we offer flexible solutions to drive growth and
              efficiency, positioning ourselves as your trusted partner in
              long-term success.
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-center about-title text-4xl font-bold mb-6">
            Latest Highlight
          </h1>
          <p className="text-center text-lg mb-10">
            Stay ahead with our latest insights!
          </p>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3 mb-4 lg:mb-0">
              <div
                className="flex flex-col h-full p-4 bg-gray-300 shadow-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('abstract-backdrop-with-multi-colored-pattern-futuristic-motion-generated-by-ai.jpg')",
                }}
              >
                <div className="content text-lg border border-white rounded-2xl">
                  <Image
                    src="/geometric-abstract-design-with-minimalistic-shapes-neutral-background.jpg"
                    alt="image"
                    width={500}
                    height={282}
                    layout="responsive"
                    priority
                    className="rounded-2xl"
                  />
                </div>

                <h2
                  className="text-white text-[26px] mt-4 text-center"
                  style={{ fontFamily: '"Libre Caslon Text", serif' }}
                >
                  Get a CFaaS Offering E-book
                </h2>

                <div className="flex-grow"></div>

                <button className="px-6 py-3 w-2/4 flex justify-center items-center mx-auto font-semibold text-black bg-white rounded-2xl hover:bg-gray-100">
                  Get Your Copy
                </button>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div
                  className="relative h-72 bg-white rounded-md shadow-lg"
                  style={{
                    backgroundImage: "url('/Highlight-section-1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div
                    className="absolute top-4 left-3 text-white text-2xl font-semibold text-left"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    Learn to Manage <br /> Imposter Syndrome
                  </div>
                </div>

                {/* Card 2 */}
                <div className="h-72 bg-purple-500 rounded-md shadow-lg flex flex-col justify-between p-4">
                  <div
                    className="text-black text-2xl font-semibold text-left"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    Brand Your Armor for 2024 and Beyond
                  </div>
                  <div
                    className="text-black text-[20px] text-left font-medium"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    Learn More &gt;
                  </div>
                </div>

                {/* Card 3 */}
                <div className="h-72 bg-orange-500 rounded-md shadow-lg flex flex-col justify-between p-4">
                  <div
                    className="text-black text-2xl font-semibold text-left"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    Amplify Your Tech <br /> Journey
                  </div>
                  <div
                    className="text-black text-[20px] text-left font-medium"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    Learn More &gt;
                  </div>
                </div>

                {/* Card 4 */}
                <div
                  className="relative h-72 bg-white rounded-md shadow-lg"
                  style={{
                    backgroundImage: "url('/Highlight-section-2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute top-4 left-3 text-black text-2xl font-semibold text-left"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    Content Marketing for Google Algorithm or for Your Readers?
                  </div>
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
