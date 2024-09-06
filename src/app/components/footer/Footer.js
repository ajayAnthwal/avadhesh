import React from "react";
import "../../css/slider.css";

const Footer = () => {
  return (
    <div className="container mx-auto py-8  px-4-5">
      <div className="flex justify-between w-full gap-9 footer footer-col">
        <div className="w-1/3 footer-container">
          <h6 className="text-lg font-semibold mb-2">Reach us</h6>
          <p className="flex items-start mb-2">
            <img
              src="./location.png"
              alt="Location"
              className="w-5 h-5 mr-2 mt-1"
            />
            Avadhesh India Advisory Services LLP
            <br />
            Plot No. 1625, Sri Sai Towers, Venkata Ramana Colony,
            <br />
            KPHB, Hyderabad, Telangana- 500085
          </p>
          <p className="flex items-center mb-2">
            <img src="./call.png" alt="Call" className="w-5 h-5 mr-2" />
            +91 85559 47892
          </p>
          <p className="flex items-center">
            <img src="./email.png" alt="Email" className="w-5 h-5 mr-2" />
            hello@avadhesh.co
          </p>
        </div>
        <div className="w-1/3 footer-container">
          <h6 className="text-lg font-semibold mb-2">Insights</h6>
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
        <div className="w-1/3 footer-container">
          <h6 className="text-lg font-semibold mb-2">Info</h6>
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
      <div className="text-center mt-9 mb-5">
        <b className="text-lg">Let’s get social</b>
        <br />
        <div className="flex justify-center space-x-4 mt-2">
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
  );
};

export default Footer;
