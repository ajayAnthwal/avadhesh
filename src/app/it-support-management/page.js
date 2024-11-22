import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const it_support_management = () => {
  const services = [
    {
      title: "Cloud Management​​​",
      description:
        "Optimize your cloud infrastructure for scalability, efficiency, and cost savings. ",
      imageUrl: "/Cloud-Management.png",
    },
    {
      title: "Infrastructure​​​",
      description:
        "Build a robust IT infrastructure that supports your business’s growth and innovation.",
      imageUrl: "/Infrastructure.png",
    },
    {
      title: "Data Analytics, AI and ML​​​",
      description:
        "Unlock insights with data analytics and AI solutions tailored to your needs. ",
      imageUrl: "/Data-Analytics.png",
    },
    {
      title: "Databases​​",
      description:
        "Ensure data integrity and accessibility with expertly managed database solutions. ",
      imageUrl: "/Databases.png",
    },
    {
      title: "DevOps​​​​",
      description:
        "Streamline development and operations for faster delivery and enhanced collaboration.",
      imageUrl: "/DevOps.png",
    },
    {
      title: "Security​",
      description:
        "Protect your assets with comprehensive security solutions tailored to your business. ",
      imageUrl: "/Security.png",
    },
    {
      title: "Application Dev & Support​",
      description:
        "Build and support custom applications that drive efficiency and meet your goals.",
      imageUrl: "/Application-Dev-&-Support.png",
    },
  ];

  const blogCards = [
    {
      title: "Amplify Your Tech Journey (Explained Guide)",
      description:
        "Learn how AWS, Google Cloud, and Azure empower startups and SMBs to scale  ",
      imgSrc: "/Blog-1-Amplify-Your-Tech-Journey.png",
    },
    {
      title: "Smarter Risk Management (Explained Guide)",
      description:
        "Discover how startups and SMBs can harness AI and Data Analytics and build an AI ready culture in your...",
      imgSrc: "/Blog-2-Data-Analytics-&-AI.png",
    },
    {
      title:
        "Does Mobile Application Development Really Help in Business Growth?...",
      description:
        "Know the answer to this question and some of the latest trends on how to stay ahead...",
      imgSrc: "/Blog-3-App-Development.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
                IT Support & Management
              </h2>
             
              <p className="text-gray-500 text-sm marketing-span">
                Our
                <span className="font-semibold ml-2 mr-2">
                  CFaaS<sup>&#39;SM</sup>
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
                  Transform Your Tech Today
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <p className="text-black text-justify marketing-description">
                <strong>Innovation starts with reliable IT.</strong> Whether
                it&#39;s managing your cloud, securing your data, or driving
                innovation with AI and DevOps, we&#39;re committed to making
                your IT work harder for you.
              </p>

              <br />
              <p className="text-black text-justify marketing-description">
                Ready to experience seamless support and tailored solutions?
                Explore how we can elevate your technology to new heights. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
          IT Support & Management
        </h1>
        <p className="text-center text-lg mb-8">
          Empower your business with our comprehensive IT support <br /> and
          management solutions for success. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5 container mx-auto">
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
                Recommended IT Support Insights
              </h1>
              <p className="text-center text-lg mb-8">
                Dive into our blogs for expert IT insights and <br /> tips to
                enhance your operations! 
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

export default it_support_management;
