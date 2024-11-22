import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const Consulting = () => {
  const services = [
    {
      title: "Strategy Consulting​",
      description:
        "Align your vision with actionable strategies for sustainable growth and success.",
      imageUrl: "/Strategy-Consulting.png",
    },
    {
      title: "IT / Tech Consulting​",
      description:
        "Optimize technology investments with expert insights tailored to your business needs.",
      imageUrl: "/IT-Tech-Consulting.png",
    },
    {
      title: "Functional Consulting​",
      description:
        "Improve operations and efficiency with targeted functional expertise and innovative solutions.",
      imageUrl: "/Functional-Consulting.png",
    },
  ];

  const blogCards = [
    {
      title: "Strategy Consulting – What It Is and How It Helps a Business",
      description:
        "Discover what strategy consulting is and why your business needs it.",
      imgSrc: "/Blog-1-strategy-consulting-and-how-it-helps.png",
    },
    {
      title:
        "Artificial Intelligence vs. Human Wisdom - Who will win in the corporate world",
      description: "Get to know about the perfect tag team",
      imgSrc: "/Blog-2-AI-vs-human-wisdom-in-a-corporate-environment.png",
    },
    {
      title:
        "Understanding the Role of Functional Consulting for Growing Businesses",
      description:
        "Know more about what exactly a functional consultant does...",
      imgSrc: "/Blog-3-functional-consultant.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>Consulting</h2>
             
              <p className="text-gray-500 text-sm marketing-span">
                Our
                <span className="font-semibold ml-2 mr-2">
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

                  className="marketing-btn"
                >
                  Elevate Your Vision Now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3 ">
              <p className="text-black text-justify marketing-description">
                <strong>Your success is our strategy.</strong> Whether it’s
                designing game-changing tech solutions or refining your business
                operations, we’re obsessed with delivering results that matter
                to you.
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
                Ready to see how we can take your goals further? Discover how
                our consulting services are built around your vision for
                success.
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
        Consulting
        </h1>
        <p className="text-center text-lg mb-8">
        Unlock your business potential with comprehensive consulting services tailored for lasting impact 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5 container mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black bg-cover bg-center  h-[21rem] rounded-lg shadow-md group"
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
          <section className="pt-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] res-desktop">
            <div className="container mx-auto">
              <h1 className="text-center text-3xl font-bold mb-6">
              Recommended Consulting Insights
              </h1>
              <p className="text-center text-lg mb-8">
              Dive into our insightful blogs for expert consulting tips <br/> and strategies that drive success.
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
          <div className="flex flex-col items-center py-12 mx-auto bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
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

export default Consulting;
