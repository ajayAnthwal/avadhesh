import React from "react";
import Sliders from "../components/sliders/sliders";
import Team from "../components/about_us/Team";
import AvatarsSection from "../components/about_us/AvatarsSection";
const About = () => {
  return (
    <div>
      <Sliders />
      <div className="container mx-auto my-6 px-4-5">
        <h2 className="text-center text-2xl font-bold mb-4">
          Lorem Ipsum is simply dummy text of the <br />
          printing and typesetting industry. 
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex justify-center items-center md:justify-start w-full md:w-1/2">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book Lorem Ipsum is text
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book Lorem Ipsum is text
            </p>
          </div>
        </div>
      </div>
      {/* section  */}

      <img src="./Vector (2).png" alt="img" className="w-full"/>
      <div className="w-full  px-4-5 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
        <div className="text-center w-full mx-auto py-8">
          <h2 className="text-center text-2xl font-bold mb-4">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. 
          </h2>
          <div className="mx-auto ">
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  Lorem it.
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="border-l-4 border-black h-auto mr-4"></div>
              <blockquote>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <Team />
      <AvatarsSection />
      <div className="container mt-6">
        <div className="text-center mb-4 schedule">
          <h1 className="text-center about-title text-4xl font-bold mb-4">
            Have Questions?
          </h1>
          <button className="btn-gray-call">Schedule a call with us</button>
          <p className="paragraph">
            <a
              href="#"
              className="text-dark text-decoration-underline call-paragraph"
            >
              Click on the FAQs page to know more about how we can help you?
            </a>
          </p>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default About;
