import React from "react";
import "../../css/slider.css";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 px-4-5 res-desktop">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full gap-9">
          <div className="w-full md:w-1/3 p-4 text-center md:text-left">
            <h6 className="text-lg font-semibold mb-4">Reach us</h6>
            <p className="flex items-start justify-center md:justify-start mb-2">
              <img
                src="./location.png"
                alt="Location"
                className="w-5 h-5 mr-2 mt-1"
              />
              <span>
              Avadhesh India Advisory Services LLP <br/> Plot No. 1625, Sri Sai Towers, Venkata <br/> Ramana Colony, KPHB, Hyderabad, <br/> Telangana- 500085
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <img src="./call.png" alt="Call" className="w-5 h-5 mr-2" />
              +91 85559 47892
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <img src="./email.png" alt="Email" className="w-5 h-5 mr-2" />
              hello@avadhesh.co
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4 text-center md:text-left footer-second-container">
            <h6 className="text-lg font-semibold mb-4">Insights</h6>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Client Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Industry Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Growth Strategies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Sales
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4 text-center md:text-left">
            <h6 className="text-lg font-semibold mb-4">Info</h6>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-9">
          <b className="text-lg">Let’s get social</b>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#">
              <img src="./instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="./facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="./linked_in.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
