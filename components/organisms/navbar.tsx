"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isScrolling = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(() => {
          setShowNavbar(window.scrollY <= lastScrollY);
          setLastScrollY(window.scrollY);
          isScrolling.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#1b3b34] text-white px-6 py-3 fixed w-full z-50 shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {" "}
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition duration-200">
          <img src="/images/logo1.png" alt="Logo" className="h-16" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About Us", "Menu", "Contact Us"].map((item, idx) => (
            <li key={idx}>
              <Link
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-gray-400 transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1b3b34] fixed top-0 left-0 w-full h-screen z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="space-y-6 text-center mt-16">
          {["Home", "About Us", "Menu", "Contact Us"].map((item, idx) => (
            <li key={idx}>
              <Link
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block text-lg text-white hover:text-gray-400 transition duration-200"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
