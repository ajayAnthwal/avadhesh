import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const Customer_Support = () => {
  const services = [
    {
      title: "Multi-Channel Contact Center Set up​​",
      description:
        "Seamlessly connect with your customers across multiple platforms for a unified experience.",
      imageUrl: "/Multi-Channel.png",
    },
    {
      title: "Chatbots​​",
      description:
        "Enhance customer interactions with 24/7 AI-powered support that delivers instant solutions.",
      imageUrl: "/Chatbots.png",
    },
  ];

  const blogCards = [
    {
      title: "The Client Query Challenge ",
      description:
        "Explore how intelligent automation brings order to chaos, the tools that help with the process and learn what you gain with IA",
      imgSrc: "/The-Client-Query.png",
    },
    {
      title: "Chatbot vs Search Engine",
      description:
        "Don’t forget to catch the ultimate showdown of these digital helpers, and we assure you- Both of them have got your back!...",
      imgSrc: "/Blog-2-Chatbot.png",
    },
    {
      title: "The Chatbot Chronicles",
      description:
        "How Conversational AI is Redefining Business Operations: Embark on a journey with us through the bustling “Chatbot City”...",
      imgSrc: "/Benefits-of-Chatbots.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col  justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>Customer Support</h2>
              
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
                 Experience Support Excellence
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3 ">
              <p className="text-black text-justify marketing-description">
                <strong>Exceptional support, every time.</strong> Our Customer Service team is dedicated to providing you with prompt, personalized assistance that keeps your needs at the forefront. Want to experience service that truly cares? 
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
              Discover how we turn every interaction into a positive experience that fosters loyalty and trust. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto px-2 md:px-0">
        <h1 className="text-center text-3xl font-bold mb-6">Customer Support</h1>
        <p className="text-center text-lg mb-8">
        Empower your customer support with innovative solutions <br/> that boost satisfaction and engagement. 
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
          <section className="pt-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB] res-desktop">
            <div className="container mx-auto">
              <h1 className="text-center text-3xl font-bold mb-6">
              Recommended Customer Support Insights
              </h1>
              <p className="text-center text-lg mb-8">
              Discover our blogs for expert insights and strategies to <br/> revolutionize your customer service approach! 
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

export default Customer_Support;
