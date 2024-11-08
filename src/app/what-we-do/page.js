import React from "react";
import Marketing from "@/app/components/what_we_do/Marketing";
import MarketingServices from "@/app/components/what_we_do/MarketingServices";
import Marketing_insights from "@/app/components/what_we_do/Marketing_insights";

const What_we_do = () => {
  return (
    <div>
      <div className="mt-9 container m-auto">
        <section className="flex flex-col items-center justify-center p-8  res-desktop px-4-5 ">
          <div className="p-6 flex flex-col md:flex-row items-center w-full container marketing">
            <div className=" h-56 w-full md:w-1/3   mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black">
                Marketing & Lead Gen
              </h2>
              <p className="text-black">as a service</p>
              <p className="text-gray-500 text-sm">
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
                >
                  Amplify Your Brand Now 
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3 -mt-10">
              <p className="text-black text-justify">
                <strong> Your growth is our mission.</strong> From powerful
                digital marketing and SEO to engaging campaigns and
                unforgettable events, we’ve got every tool to elevate your
                brand.
              </p>
              <br />
              <p className="text-black text-justify">
                Ready to take the next step? Explore how our marketing services
                are designed to drive results and amplify your success. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <Marketing />
      <MarketingServices />
      <Marketing_insights />
    </div>
  );
};

export default What_we_do;
