import React from "react";
import Marketing from "@/app/components/what_we_do/Marketing";
import HrStaffingWellBeing from "@/app/components/hr_career/HrStaffingWellBeing";
import Hr_insights from "@/app/components/hr_career/Hr_insights";

const Hr = () => {
  return (
    <div>
      <div className="mt-9 container m-auto">
        <section className="flex flex-col  justify-center py-8  res-desktop ">
          <div className="p-6 flex flex-col md:flex-row  w-full container marketing">
            <div className=" h-56 w-full md:w-1/3   mb-4 md:mb-0 md:mr-6 bg-white">
              <h2 className="text-2xl font-bold text-black marketing-heading"  style={{ fontFamily: '"Libre Caslon Text", serif' }}>
                HR, Staffing & Well Being​
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
                  Empower Your Team Now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-2/3 ">
              <p className="text-black text-justify marketing-description">
                Your people are our priority. From streamlined HR management and
                expert staffing to personalized well-being services like life
                coaching, nutrition, and mental health support, we’re here to
                empower your team.
              </p>
              <br />
              <p className="text-black text-justify marketing-description">
                Ready to enhance your workforce’s potential? Explore how our
                tailored HR and well-being services put your people first. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <Marketing />
      <HrStaffingWellBeing />
      <Hr_insights />
    </div>
  );
};

export default Hr;
