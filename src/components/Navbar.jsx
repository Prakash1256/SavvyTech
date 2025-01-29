import React, { useState } from "react";
 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md shadow-gray-700 border-b border-gray-600 fixed top-0 left-0 w-full z-10">
      <div className="w-full flex justify-around items-center gap-30">
        <div className="text-2xl  font-bold text-[#feead8]">SavvyTech</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-[#feead8]">
          <li className="hover:text-gray-400 cursor-pointer scroll-smooth"><a href="#home">Home</a></li>
          <li className="hover:text-gray-400 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-gray-400 cursor-pointer"><a href="#services">Services</a></li>
          <li className="hover:text-gray-400 cursor-pointer"><a href="#solutions">Solutions</a></li>
          <li className="hover:text-gray-400 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className="text-[#F5EBDC] text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center space-y-4 p-4 bg-black text-[#F5EBDC] md:hidden">
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
           <a href="#about">About</a>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href="#services">Services</a>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
           <a href="#solutions">Solutions</a>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
           <a href="#contact">Solutions</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
