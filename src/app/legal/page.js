import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const Legal = () => {
  const services = [
    {
      title: "Company Registration​​",
      description:
        "Simplify the registration process with expert guidance for a smooth business launch.   ",
      imageUrl: "/Company-Registration.png",
    },
    {
      title: "Shareholder Agreements​​",
      description:
        "Ensure clarity and protection with well-drafted, customized shareholder agreements. ",
      imageUrl: "/Shareholder-Agreements.png",
    },
    {
      title: "Company contracts and agreement​​​​​",
      description:
        "Secure your business interests with expertly crafted contracts and agreements.",
      imageUrl: "/Company-contracts.png",
    },
    {
      title: "General Legal Counsel​​",
      description:
        "Stay legally compliant with expert advice tailored to your business needs. ",
      imageUrl: "/General-Legal-Counsel.png",
    },
    {
      title: "Patent, Trademarks and Copyrights​​​",
      description:
        "Protect your innovations with comprehensive intellectual property services. ",
      imageUrl: "/Patent-Trademarks.png",
    },
  ];

  const blogCards = [
    {
      title: "What Are Some Common Contractual Terms Found in a Company...",
      description:
        "Breaking down the most common contractual terms you’re likely to find in a shareholder’s agreement ",
      imgSrc: "/Blog-1-What-Are-Some.png",
    },
    {
      title:
        "What's the Difference Between a Company's Shareholders' Agreement...",
      description:
        "Have a clear understanding of when to use each agreement and how they protect your business",
      imgSrc: "/Blog-2-Difference-between.png",
    },
    {
      title:
        "Are AI Models Infringing on the Copyrights of Original Content Creators?",
      description:
        "Click to read if AI models are stepping on the toes of content creators by “borrowing” their work",
      imgSrc: "/Blog-3-Are-AI-models-infringing.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col  justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>Legal</h2>
              
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
                  Secure Legal Expertise Now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3 ">
              <p className="text-black text-justify marketing-description">
                <strong>Legal expertise, whenever you need it.</strong>Our
                Legal-as-a-Service provides flexible, on-demand support for all
                your legal needs—without the overhead. Curious how we can
                safeguard your business with expert guidance?
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
                Explore how our tailored legal solutions ensure you stay
                compliant and protected, every step of the way. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
          Legal-as-a-Service
        </h1>
        <p className="text-center text-lg mb-8">
          Safeguard your business with our full-spectrum legal <br /> services
          designed for every stage of growth. 
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
                Recommended Legal-as-a-Service Insights
              </h1>
              <p className="text-center text-lg mb-8">
                Explore our blogs for valuable legal tips and strategies <br />{" "}
                to safeguard and elevate your business! 
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

export default Legal;
