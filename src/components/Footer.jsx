import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-600 py-12 px-1">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand and Description */}
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#feead8]">SavvyTech</h2>
          <p className="text-[#feead8] mt-4 sm:w-[350px] md:w-[250px] lg:w-[350px]">
            SavvyTech is a cutting-edge technology company based in India, specializing in the development of innovative digital, data, and IT solutions across various industries.
          </p>
        </div>

        {/* Features */}
        <div className="pl-0 sm:pl-8 md:pl-10 lg:pl-17">
          <h3 className="text-xl font-medium text-[#feead8]">Features</h3>
          <ul className="mt-4 space-y-2">
            {["Training ", "AI Detective", "Innovation", "Web Development"].map((item, index) => (
              <li key={index} className="text-[#feead8] relative block group cursor-pointer">
                {item}
                <span className="block h-[2px] w-0 bg-indigo-600 group-hover:w-[50%] transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div >
          <h3 className="text-xl font-medium text-[#feead8]">Resources</h3>
          <ul className="mt-4 space-y-2">
            {["Customer Support", "Digital Transformation", "E-commerce Platform", "Hosting"].map((item, index) => (
              <li key={index} className="text-[#feead8] relative block group cursor-pointer">
                {item}
                <span className="block h-[2px] w-0 bg-indigo-600 group-hover:w-[60%] transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-medium text-[#feead8]">Get in touch</h3>
          <p className="text-[#feead8] mt-4">www.savvytech.com</p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="text-[#1877F2] text-xl cursor-pointer" />
            <FaTwitter className="text-[#1DA1F2] text-xl cursor-pointer" />
            <FaInstagram className="text-[#d62976] text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-gray-500 text-sm">
        <p className="text-[#feead8]">© SavvyTech Tradex Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
