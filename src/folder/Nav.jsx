import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-14 w-full bg-[#34C9B6] flex items-center justify-between px-4 md:px-8 lg:px-16 relative">
      <div>
        <h1 className="font-bold text-xl md:text-2xl text-[#C7F2FF] ml-28">
          Medi
          <span className="font-bold text-xl md:text-2xl text-white">site</span>
        </h1>
      </div>

      <ul className="hidden md:flex gap-6 lg:gap-10 text-white font-extralight cursor-pointer mr-28">
        <li>
          <Link
            to="/"
            className="hover:text-[#C7F2FF] transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-[#C7F2FF] transition-colors duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/serviceA"
            className="hover:text-[#C7F2FF] transition-colors duration-200"
          >
            Service Area
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className="hover:text-[#C7F2FF] transition-colors duration-200"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-[#C7F2FF] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden text-white p-1 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#34C9B6] md:hidden shadow-lg z-50">
          <ul className="flex flex-col text-white font-extralight">
            <li>
              <Link
                to="/"
                className="block px-4 py-3 hover:bg-[#2BA898] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-3 hover:bg-[#2BA898] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/serviceA"
                className="block px-4 py-3 hover:bg-[#2BA898] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Service Area
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-3 hover:bg-[#2BA898] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

