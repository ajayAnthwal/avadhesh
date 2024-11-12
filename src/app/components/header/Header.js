"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "../../css/slider.css";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Close mobile menu when navigating to another page
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    document.body.style.overflow = "";
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle dropdown for mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md z-10">
      <nav className="bg-white border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap justify-between items-center mx-auto py-4 container">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/image_1.png"
              alt="Logo"
              className="h-8"
              width={32} // Specify width and height for the image
              height={32} // Adjust to fit your needs
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Avadhesh
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            id="mega-menu-full-cta"
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>

              {/* What we do with dropdown toggle for mobile */}
              <li
                className="relative md:group"
                onClick={toggleDropdown}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
                  What we do
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu with single-column layout on mobile */}
                {isDropdownOpen && (
                  <div className="absolute left-0 z-10 bg-gray-200 border-gray-200 shadow-sm p-2 md:w-max w-full mt-1" style={{ marginTop: "-1px" }}>
                    <ul className="md:grid md:grid-cols-3 gap-4 flex flex-col">
                      <li>
                        <Link
                          href="/consulting"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/what-we-do"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Marketing & Lead Gen
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cfo"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          CFO-as-a-service  
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/hr"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          HR, Staffing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/it-support-management"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          IT Support & Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/procurement"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Procurement
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/legal"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Legal as a services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/corporate"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Corporate gifting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/market-research"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Market Research
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/customer-support"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Customer Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/insights"
                  className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/hr"
                  className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
