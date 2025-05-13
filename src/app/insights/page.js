import React from "react";
import Sliders from "../components/sliders/sliders";
import EbookSection from "../components/insight/EbookSection";
import Case_study from "../components/insight/Case_Studies";
import IndustriesServed from "../components/insight/IndustriesServed";
import BlogCard from "../components//blogCard/BlogCard";
import Image from "next/image";
import Link from "next/link";

const Insights = () => {
  const cards = [
    {
      id: 1,
      title: "The Client Query Challenge",
      description:
        "Explore how intelligent automation brings order to chaos, the tools that help with the process and learn what you gain with IA.",
      imgSrc: "/Query.png",
    },
    {
      id: 2,
      title: "Amplify Your Tech Journey (Explained Guide)",
      description:
        "Learn how AWS, Google Cloud, and Azure empower startups and SMBs to scale.",
      imgSrc: "/Blog 1-Amplify-Your-Tech-Journey.png",
    },
    {
      id: 3,
      title: "What Are Some Common Contractual Terms Found In A Company...",
      description:
        "Breaking down the most common contractual terms you're likely to find in a shareholder's agreement.",
      imgSrc: "/Blog.png",
    },
  ];

  return (
    <div>
      <div
        className="relative w-full h-[300px] md:h-[500px] flex items-center"
        style={{
          backgroundImage: "url('/Insights.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className="text-left text-black container mx-auto">
          <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 pl-6"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
            Insights
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white m-auto container px-2 md:px-0">
        <div className="w-full mt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Featured Blogs</h2>
            <p className="text-gray-600">
              Don’t miss out on our blogs which talk about <br /> some of our
              tailored CFaaS solutions
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card) => (
                <BlogCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EbookSection />
      <Case_study />

      <div className="w-full">
        <Image
          src="/Vector (1).png"
          alt="img"
          layout="responsive"
          width={1920}
          height={400}
        />
      </div>

      <div className="bg-gradient-to-b from-[#FFF1B9] to-[#FFF1B9] res-desktop px-2 md:px-0">
        <div className="container flex flex-col items-center py-12 mx-auto">
          <IndustriesServed />
          <div className="px-2 md:px-0 text-center mb-12 max-w-4xl">
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

export default Insights;
