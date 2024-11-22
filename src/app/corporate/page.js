import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const Corporate = () => {
  const services = [
    {
      title: "Experiential Gifts​​​",
      description:
        "Create memorable experiences with curated gifts that leave a lasting impression.",
      imageUrl: "/Experiential-Gifts.png",
    },
    {
      title: "Personalized Gifts​​​",
      description:
        "Tailored gifts that resonate with your recipient on a personal level, creating unique connections.",
      imageUrl: "/Personalized-Gifts.png",
    },
    {
      title: "Customized Gifts​​​​​​",
      description:
        "Bespoke gifts designed to reflect your brand’s personality and values. ",
      imageUrl: "/Customized-Gifts.png",
    },
    {
      title: "Promotional Gifts​​",
      description:
        "Boost brand visibility with strategic promotional gifts that captivate and engage. ",
      imageUrl: "/Promotional-Gifts.png",
    },
    {
      title: "Festive Gifts​​​​",
      description:
        "Celebrate every occasion with thoughtful festive gifts that spread joy and goodwill.  ",
      imageUrl: "/Festive-Gifts.png",
    },
    {
      title: "New Hire / Employee Appreciation Gifts​​",
      description:
        "Welcome new hires and reward employees with meaningful appreciation gifts.  ",
      imageUrl: "/New-Hire-Employee.png",
    },
  ];

  const blogCards = [
    {
      title:
        "How do You Build/Promote Your Brand With Custom Promotional Gifts?",
      description: "Craft your perfect promotional gift strategy... ",
      imgSrc: "/How-do-you-buildpromote.png",
    },
    {
      title:
        "Are Experiential Gifts More Socially Connecting Than Material Gifts?",
      description:
        "Find a way to make a genuine connection with experiential gifting...",
      imgSrc: "/Are-experiential-gifts.png",
    },
    {
      title:
        "Gifts are About Giving. Giving Selflessly. Then, how Corporate Gifts...",
      description:
        "How corporate gifts are the cherry on top of a business relationship...",
      imgSrc: "/Gifts-are-about.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col  justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
                Corporate Gifting
              </h2>
              
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
                  Create Lasting Impressions
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <p className="text-black text-justify marketing-description">
                <strong>Make every connection count.</strong> Our Corporate
                Gifting service delivers personalized, high-quality gifts that
                leave a lasting impact. Interested in how we can help you build
                stronger relationships and elevate your brand?
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
                Discover how our customized gifting solutions create memorable
                experiences for your clients and partners. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">
          Corporate Gifting
        </h1>
        <p className="text-center text-lg mb-8">
          Elevate relationships and brand loyalty with thoughtful <br />{" "}
          corporate gifting solutions tailored to your needs. 
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
                Recommended Corporate Gifting Insights
              </h1>
              <p className="text-center text-lg mb-8">
                Check out our blogs for expert gifting tips and strategies{" "}
                <br /> to elevate your corporate gifting game! 
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

export default Corporate;
