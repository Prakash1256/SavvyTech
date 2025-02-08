import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md shadow-gray-700 fixed top-0 left-0 w-full z-20">
      <div className="w-full md:max-w-[80%] flex justify-between items-center mx-auto">
        <div className="text-2xl font-bold text-[#feead8]">SavvyTech</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9 text-[#feead8]">
          {["Home", "About", "Services", "Solutions"].map((item) => (
            <li key={item} className="hover:text-indigo-300 cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <li className="cursor-pointer">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none pt-1 pb-1 text-white hover:text-black px-6 rounded-full"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className={`text-[#feead8] transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-3xl  text-[#feead8] ">🞬</span>
            ) : (
              <span className="text-2xl text-[#feead8]">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 p-4 bg-black text-[#feead8]">
          {["Home", "About", "Services", "Solutions"].map((item) => (
            <li
              key={item}
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}  // Close menu when clicked
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <li className="cursor-pointer">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none pt-1 pb-1 text-[#feead8] px-4 py-2 rounded-full hover:bg-[#feead8]/80 transition-all"
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