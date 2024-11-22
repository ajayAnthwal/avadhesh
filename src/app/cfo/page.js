import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";


const cfo = () => {
  const services = [
    {
      title: "Payroll Management​​",
      description:
        "Simplify payroll processes with accurate, timely management tailored to your business needs.",
      imageUrl: "/Payroll-Management.png",
    },
    {
      title: "AR Receivables​​",
      description:
        "Optimize cash flow with efficient accounts receivable solutions that enhance your revenue cycle.",
      imageUrl: "/AR-min.png",
    },
    {
      title: "Financial Projections​​",
      description:
        "Make informed decisions with reliable financial forecasts that drive your business strategy.",
      imageUrl: "/Financial-Projections.png",
    },
    {
      title: "Financial Compliance Management​​​",
      description:
        "Ensure compliance with regulations through expert guidance and meticulous oversight.",
      imageUrl: "/Financia-Compliance-Management.png",
    },
    {
      title: "Book keeping​​​",
      description:
        "Maintain accurate financial records effortlessly, allowing you to focus on growing your business.",
      imageUrl: "/Book-Keeping.png",
    },
  ];

  const blogCards = [
    {
      title: "The ABCs of Financial Projections for Your Startup",
      description:
        "The perfect blog to guide your startup about the basics of financial projections ",
      imgSrc: "/The-ABCs-of-Financial.png",
    },
    {
      title:
        "Navigating Inflation’s Impact- Strategies to Safeguard Margins...",
      description:
        "The 5 key strategies to navigate inflation and build a long-term vision for growth",
      imgSrc: "/Navigating-Inflation.png",
    },
    {
      title:
        "How do Bookkeeping Services Help in Managing Financial Records...",
      description:
        "Importance of accurate financial records and why bookkeeping services matter for tax compliance",
      imgSrc: "/How-do-bookkeeping-services.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col  justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>CFO</h2>
             
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
                 Simplify Your Finances Today
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <p className="text-black text-justify marketing-description">
                <strong>Your finances deserve expert care.</strong>From seamless
                payroll management to accurate bookkeeping and compliance, our
                CFO services are built to support your financial health.
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
                Curious how we can simplify your financial operations and
                projections? Discover how we bring clarity and confidence to
                your numbers.
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
          CFO-as-a-Service​
        </h1>
        <p className="text-center text-lg mb-8">
          Streamline financial operations with our comprehensive <br />
          CFO-as-a-Service​ solutions for your success. 
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
              Recommended CFO-as-a-Service​ Insights
              </h1>
              <p className="text-center text-lg mb-8">
              Explore our blogs for expert insights and tips to <br/> optimize your financial strategy!
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

export default cfo;
