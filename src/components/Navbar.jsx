import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md shadow-gray-700 fixed top-0 left-0 w-full z-10">
      {/* Navbar Container */}
      <div className="w-full md:max-w-[80%] flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#feead8]">SavvyTech</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9 text-[#feead8]">
          {["Home", "About", "Services", "Solutions"].map((item) => (
            <li key={item} className="hover:text-indigo-300 cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          {/* Contact link styled as a button */}
          <li className="cursor-pointer">
            <a
              href="#contact"
              className="bg-teal-500 text-white hover:text-black px-6 py-1 rounded-full"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className={`text-[#feead8] transition-transform duration-300 ${
              isMenuOpen ? "rotate-90 text-2xl" : "text-3xl"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-1xl text-black">✖</span>
            ) : (
              <span className="text-inherit">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 p-4 bg-black text-[#feead8]">
          {["Home", "About", "Services", "Solutions"].map((item) => (
            <li
              key={item}
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          {/* Mobile Contact link styled as a button */}
          <li className="cursor-pointer">
            <a
              href="#contact"
              className="bg-teal-500 text-black px-4 py-2 rounded-full hover:bg-[#feead8]/80 transition-all"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
