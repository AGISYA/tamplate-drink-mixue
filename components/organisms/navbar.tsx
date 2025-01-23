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
      className={`bg-[#1b3b34] text-white px-6 py-2 fixed w-full z-50 transition-transform duration-200 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Teks */}
        <Link href="/" className="hover:opacity-80 transition duration-200">
          <img src="/images/logo1.png" alt="Logo" className="h-16" />
        </Link>
        {/* Menu Tengah */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="#home"
              className="hover:text-gray-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#aboutus"
              className="hover:text-gray-400 transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#menu"
              className="hover:text-gray-400 transition duration-200"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-gray-400 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-[#1b3b34] py-4 border-t border-gray-800">
          <li>
            <Link
              href="#home"
              className="block hover:text-gray-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#aboutus"
              className="block hover:text-gray-400 transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#menu"
              className="block hover:text-gray-400 transition duration-200"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block hover:text-gray-400 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
