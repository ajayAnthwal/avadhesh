"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-6 header-res">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/image_1.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-semibold">Avadhesh</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/what-we-do" className="hover:text-gray-900">
            What we do
          </Link>
          <Link href="/insights" className="hover:text-gray-900">
            Insights
          </Link>
          <Link href="/hr" className="hover:text-gray-900">
            Careers
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact Us
          </Link>
          <div className="text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          isOpen ? "block res-nav" : "hidden"
        } md:hidden bg-white text-sm font-medium text-gray-700 space-y-2 px-6 py-4 shadow-md`}
      >
        <Link
          href="/"
          className="block hover:text-gray-900"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href="/what-we-do"
          className="block hover:text-gray-900"
          onClick={closeMenu}
        >
          What we do
        </Link>
        <Link
          href="/insights"
          className="block hover:text-gray-900"
          onClick={closeMenu}
        >
          Insights
        </Link>
        <Link
          href="/hr"
          className="block hover:text-gray-900"
          onClick={closeMenu}
        >
          Careers
        </Link>
        <Link
          href="/about"
          className="block hover:text-gray-900"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block hover:text-gray-900"
          onClick={closeMenu}
        >
          Contact Us
        </Link>
        <div className="block text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
