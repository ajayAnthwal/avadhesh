import React from "react";
import BlogCard from "../blogCard/BlogCard";
import Image from "next/image";
import Link from "next/link";

const Hr_insights = () => {
  const cards = [
    {
      imgSrc: "/Blog-1.png",
      title: "Best Practices For HR Operations Management",
      description: "Are your HR Operations equipped for a hybrid work world?",
    },
    {
      imgSrc: "/Blog-2.png",
      title: "Strategies For Attracting Top Talents",
      description:
        "Know about the winning strategies to attract the best of talents.",
    },
    {
      imgSrc: "/Blog-3.png",
      title: "If You're An Entrepreneur, Learn To Manage Imposter Syndrome",
      description: "How your mindset impacts the company you're working on.",
    },
  ];

  return (
    <div className="w-full">
      <div className="mt-7">
        <Image
          src="/Vector (2).png"
          alt="img"
          className="w-full"
          width={1200} // Set appropriate width for the image
          height={400} // Set appropriate height for the image
        />
        <section className="pt-12 bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
          <div className="container mx-auto">
            <h1 className="text-center text-3xl font-bold mb-6">
              Recommended HR Insights
            </h1>
            <p className="text-center text-lg mb-8">
              Discover expert HR tips and insights in our <br /> blogs to
              elevate your workforce today!
            </p>

            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {cards.map((card, index) => (
                  <BlogCard key={index} card={card} />
                ))}
              </div>
            </div>
          </div>

          <div className="container flex flex-col items-center py-12 mx-auto max-w-screen-xl bg-gradient-to-b from-[#D3F1FB] to-[#D3F1FB]">
            <div className="text-center mb-12 max-w-4xl">
              <h1 className="text-center text-4xl font-bold mb-6">
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
        </section>
      </div>
    </div>
  );
};

export default Hr_insights;
