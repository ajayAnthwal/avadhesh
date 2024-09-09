"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "../../css/slider.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname
  const dropdownRef = useRef(null); // Ref for dropdown menu

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when menu is closed
    }
  };

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent any default action that might cause scrolling
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close mobile menu and dropdown
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    document.body.style.overflow = ""; // Ensure scrolling is enabled after closing menu
  };

  useEffect(() => {
    // Close menu on pathname change
    closeMenu();
    window.scrollTo(0, 0); // Reset scroll position to top after navigation
  }, [pathname]);

  useEffect(() => {
    // Close dropdown when clicking outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="bg-white border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse lg:-ml-10 -ml-0"
          >
            <img src="/image_1.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Avadhesh
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            data-collapse-toggle="mega-menu-full-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mega-menu-full-cta"
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

              <li className="relative">
                <Link
                  href="/what-we-do"
                 
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                >
                  What we do
                  <svg
                    className="w-2.5 h-2.5 ms-3 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    onClick={toggleDropdown}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="menu-drop-res" ref={dropdownRef}>
                    <ul className="absolute left-0 z-10 mt-2 bg-gray-200 border-gray-200 shadow-sm p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-max">
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Marketing & Lead Gen
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          CFO-as-a-service  
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          HR, Staffing
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          IT Support & Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Procurement
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Legal as a services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Corporate gifting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Market Research
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-1 px-3 text-black hover:bg-gray-100"
                        >
                          Customer
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
