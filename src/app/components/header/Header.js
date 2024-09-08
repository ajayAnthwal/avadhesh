"use client"; // Ensures this component is client-side

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close mobile menu and dropdown
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Close menu on pathname change
    closeMenu();
  }, [pathname]);

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
              <li className="flex gap-1 items-center">
                <Link
                  href="/what-we-do"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                >
                  What we do
                </Link>
                <svg
                  onClick={toggleDropdown}
                  className="w-2.5 h-2.5 ms-3 cursor-pointer"
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

        {/* Dropdown section */}
        {isDropdownOpen && (
          <div
            id="mega-menu-full-cta-dropdown"
            className="mt-1 bg-gray-200 border-gray-200 shadow-sm border-y"
          >
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-black md:grid-cols-3 md:px-6">
              {/* Mobile Dropdown Column */}
              <ul
                className="space-y-4 sm:mb-4 md:mb-0 md:hidden" // Hide on medium screens and above
                aria-labelledby="mega-menu-full-cta-button"
              >
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    HR, Staffing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Legal as a service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Customer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Marketing & Lead Gen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    IT Support & Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Corporate gifting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    CFO-as-a-service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Procurement
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Market Research
                  </Link>
                </li>
              </ul>
              {/* Desktop Dropdown Columns */}
              <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    HR, Staffing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Legal as a service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Customer
                  </Link>
                </li>
              </ul>
              <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Marketing & Lead Gen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    IT Support & Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline hover:text-blue-600"
                  >
                    Corporate gifting
                  </Link>
                </li>
              </ul>
              <div className="mt-4 md:mt-0">
                <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                  <li>
                    <Link
                      href="#"
                      className="hover:underline hover:text-blue-600"
                    >
                      CFO-as-a-service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:underline hover:text-blue-600"
                    >
                      Procurement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:underline hover:text-blue-600"
                    >
                      Market Research
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
