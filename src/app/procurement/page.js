import React from "react";
import Image from "next/image"; // Import Image component
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";
import CFaaS from "../components/cfaas/CFaaS";
import ServiceCard from "../components/service_card/ServiceCard";
import BlogCard from "../components/blogCard/BlogCard";
import Link from "next/link";

const Procurement = () => {
  const services = [
    {
      title: "IT Hardware Procurement​​​​",
      description:
        "Acquire the right hardware solutions tailored to your business needs seamlessly.  ",
      imageUrl: "/IT-Hardware-Procurement.png",
    },
    {
      title: "IT Software Procurement​",
      description:
        "Simplify software acquisition with strategic sourcing that enhances your operational efficiency.",
      imageUrl: "/IT-Software-Procurement.png",
    },
    {
      title: "Accessories Procurement​​​​",
      description:
        "Elevate your workspace with quality accessories procured for optimal performance. ",
      imageUrl: "/Accessories-Procurement.png",
    },
    {
      title: "Facilities Procurement​",
      description:
        "Streamline your facilities procurement for cost-effective and efficient operational solutions.",
      imageUrl: "/Facilities-Procurement.png",
    },
  ];

  const blogCards = [
    {
      title: "Latest Trends in IT Procurement",
      description:
        "Level up your procurement game by knowing these latest trends in IT procurement ",
      imgSrc: "/Blog-1-Latest-trends-in-IT-procurement.png",
    },
    {
      title: "Best Procurement Strategies for Startups",
      description:
        "Learn more on how to build a strong foundation for growth and optimize your procurement strategy",
      imgSrc: "/Blog-2-Best-procurement-strategies.png",
    },
    {
      title: "What is Pool Procurement? Can It Help Your Business?",
      description:
        "Understand what pool procurement is and know why it makes sense for startups and SMB’s...",
      imgSrc: "/Blog-3-What-is-pool-procurement.png",
    },
  ];

  return (
    <div>
      <div className="mt-9 container mx-auto">
        <section className="flex flex-col  justify-center py-8 res-desktop">
          <div className="p-6 flex flex-col md:flex-row w-full container marketing">
            <div className="h-56 w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>Procurement</h2>
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
                  Streamline Your Purchases Now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <p className="text-black text-justify marketing-description">
                <strong>Your procurement needs, delivered.</strong>Whether
                it&#39;s IT hardware, software, facilities, or accessories, we
                ensure you get the right solutions, on time and within budget.
                Curious how we can simplify and optimize your procurement
                process?
              </p>

              <br />
              <p className="text-black text-justify marketing-description">
                Explore how our tailored services are designed to meet your
                business needs seamlessly.
              </p>
            </div>
          </div>
        </section>
      </div>
      <CFaaS />
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-6">Procurement</h1>
        <p className="text-center text-lg mb-8">
          Optimize your purchasing power with our comprehensive <br />{" "}
          procurement services tailored for success. 
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
                Recommended Procurement Insights
              </h1>
              <p className="text-center text-lg mb-8">
                Check out our blogs for valuable procurement tips and <br />{" "}
                strategies to maximize your purchasing impact! 
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

export default Procurement;
