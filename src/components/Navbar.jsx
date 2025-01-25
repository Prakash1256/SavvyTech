import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md shadow-gray-700 border-b border-gray-600 fixed top-0 left-0 w-full z-10">  

      <div className="w-full flex justify-around items-center gap-20">
        <div className="text-2xl font-semibold text-[#feead8]">SavvyTech</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#feead8]">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Service</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
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
          <li className="hover:text-gray-400 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Service</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
