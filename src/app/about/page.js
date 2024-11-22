import React from "react";
import Image from "next/image";
import Sliders from "../components/sliders/sliders";
import Team from "../components/about_us/Team";
import AvatarsSection from "../components/about_us/AvatarsSection";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div
        className="relative w-full h-[300px] md:h-[500px] flex items-center"
        style={{
          backgroundImage: "url('/About.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className="text-left text-black container mx-auto">
          <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4  pl-6"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
            About Us
          </h3>
        </div>
      </div>
      <div className="container mx-auto my-6">
        <h2 className="text-center text-2xl font-bold mb-4">
          Know more about us & explore the story of <br /> how can we help you
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex justify-center items-center md:justify-start w-full md:w-1/2">
            <p className="text-justify">
              At AvadheshCo, we fuel business growth by driving innovation and
              maintaining operational excellence. We offer tailored, flexible
              models to set up corporate functions and expand employee bases,
              allowing you to focus on core priorities.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <p className="text-justify">
              With a strong outcome-driven approach, we mutually define goals
              that deliver measurable results. Our investment in proprietary
              assets and adaptable commercial models ensures you stay relevant
              and competitive in today’s fast-paced market.
            </p>
          </div>
        </div>
      </div>
      {/* Section */}
      <div className="w-full">
        <Image
          src="/Vector (2).png"
          alt="img"
          layout="responsive"
          width={1000}
          height={200}
        />
        <div className="w-full bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
          <div className="container m-auto">
            <div className="text-center w-full mx-auto">
              <h2 className="text-center text-2xl font-bold mb-4">
                Your Partner-in-Growth
              </h2>
              <div className="mx-auto mt-12">
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                  <div
                    className="flex justify-center items-center md:justify-start w-full md:w-1/2 video-play"
                    style={{ backgroundColor: "#D9D9D9" }}
                  >
                    <div className="w-2/3 md:w-full">
                      <div className="max-w-sm mx-auto">
                        <div className="flex flex-col items-center justify-center">
                          <Image
                            src="/play.png"
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
                      Augment. Amplify. Accelerate.
                    </h2>
                    <p className="text-justify">
                      At AvadheshCo, we Augment your operations to achieve
                      excellence and reduce costs. We Amplify business outcomes
                      to maximize ROI and Accelerate success by streamlining
                      processes and eliminating distractions. As the world’s
                      first CFaaS (Corporate Functions as a Service) provider,
                      we offer flexible solutions to drive growth and
                      efficiency, positioning ourselves as your trusted partner
                      in long-term success.
                    </p>
                  </div>
                </div>
                <div className="flex mt-8 res-desktop py-6">
                  <div className="border-l-4 border-black h-auto mr-4"></div>
                  <blockquote>
                    “At our core, we believe in simplifying growth. We partner
                    with businesses to remove the complexity, allowing leaders
                    to focus on what truly matters. Together, we achieve
                    meaningful results, not just through services, but through a
                    shared vision of success and long-term collaboration”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Team />
        <AvatarsSection />
        <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl">
          <div className="text-center mb-12 max-w-4xl">
            <h1 className="text-center about-title text-4xl font-bold mb-6">
              Have Questions?
            </h1>
            <button className="btn-gray-call mb-4">
              Schedule a call with us
            </button>
            <div className="paragraph">
              <Link
                href="#"
                className="text-dark text-decoration-underline call-paragraph"
              >
                Click on the FAQs page to know more about how we can help you?
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
