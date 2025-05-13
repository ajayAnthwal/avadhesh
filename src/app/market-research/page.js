import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const Market_Research = () => {
  const services = [
    {
      title: "Primary Research​​​​",
      description:
        "Get firsthand insights directly from your target audience to inform strategic decisions.",
      imageUrl: "/Primary-Research.png",
    },
    {
      title: "Secondary Research​​​​",
      description:
        "Leverage existing data to uncover market trends and refine your competitive edge ",
      imageUrl: "/Secondary-Research.png",
    },
  ];

  const blogCards = [
    {
      title: "The Power of Market Research ",
      description:
        "Discover why market research is essential for Startups and some practical steps for effective market research",
      imgSrc: "/Blog-1-What-is-the-purpose.png",
    },
    {
      title: "Business Research (Detailed Guide)",
      description:
        "How is it a clear path to make informed decisions? A few practical examples of business research in action",
      imgSrc: "/Blog-2-Business-Research.png",
    },
    {
      title: "How to Use Data for Smarter Decisions",
      description:
        "Understanding the role of data in business and know about the common pitfalls in data usage and navigate those challenges",
      imgSrc: "/Blog-3-Using.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col  justify-center py-8 px-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>Market Research</h2>
              <p className="text-gray-500 text-sm marketing-span">
                Our
                <span className="font-semibold ml-2 mr-2 ">
                  CFaaS<sup>SM</sup>
                </span>
                offering
              </p>
              <div className="mt-9">
                <button
                  style={{
                    width: "auto",
                    padding: "10px 20px",
                    textAlign: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    border: "1px solid black",
                  }}

                  className=" marketing-btn"
                >
                  Discover Hidden Opportunities
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3 ">
              <p className="text-black text-justify marketing-description">
                <strong>Understand your market like never before.</strong> Our
                Market Research service provides actionable insights tailored to
                your unique needs, empowering you to make informed decisions.
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
                Eager to uncover hidden opportunities and stay ahead of the
                competition? Delve into how our in-depth research can drive your
                business success forward. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto px-2 md:px-0">
        <h1 className="text-center text-3xl font-bold mb-6">Market Research</h1>
        <p className="text-center text-lg mb-8">
          Dive into tailored research designed to fuel smarter <br /> decisions
          and business growth. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5 container mx-auto px-2 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black bg-cover bg-center h-[21rem] rounded-lg shadow-md group"
            style={{
              backgroundImage: `url(${service.imageUrl})`,
            }}
          >
            <div className="rounded-lg group-hover:bg-opacity-70 transition duration-300">
              <div className="flex flex-col justify-between h-56 py-6">
                <h3 className="text-xl font-bold text-white ml-5">
                  {service.title}
                </h3>
                <div className="px-5">
                  <p className="text-lg text-white text-left relative top-[115px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
        <div className="mt-7">
          <Image
            src="/Vector (2).png"
            alt="decorative image"
            className="w-full"
            width={100}
            height={100}
          />
          <section className="pt-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] res-desktop px-2 md:px-0">
            <div className="container mx-auto">
              <h1 className="text-center text-3xl font-bold mb-6">
                Recommended Market Research Insights
              </h1>
              <p className="text-center text-lg mb-8">
                Discover expert strategies and tips in our blogs <br /> to
                elevate your market research game! 
              </p>
              <div className="flex justify-center container mx-auto mt-12 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blogCards.map((card, index) => (
                    <BlogCard key={index} card={card} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className="px-2 md:px-0 flex flex-col items-center py-12 mx-auto bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
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
        </div>
      </div>
    </div>
  );
};

export default Market_Research;
