import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-600 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:pl-10 lg:pl-25 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Brand and Description */}
        <div className="sm:ml-5">
          <h2 className="text-2xl font-bold text-[#feead8]">SavvyTech</h2>
          <p className="text-[#feead8] mt-4 max-w-sm mx-auto lg:w-[400px]  md:w-[300px] sm:mx-0 sm:w-[450px]">
            SavvyTech is a cutting-edge technology company based in India, specializing in innovative digital, data, and IT solutions. We are committed to delivering success consistently through strong processes and a humanized approach to problem-solving.
            <a href="#about" className="text-cyan-500 ml-1">Read more...</a>
          </p>
        </div>

        {/* Features */}
        <div className="sm:ml-5 lg:ml-25 md:ml-30">
          <h3 className="text-xl font-medium text-[#feead8]">Features</h3>
          <ul className="mt-4 space-y-0">
            {[  <a href="#ai">AI Solutions</a> , <a href="#solutions">EdTech Solutions</a> ,<a href="#services">Digital Transformation</a> ,<a href="#tech">IOT Solutions</a> ].map((item, index) => (
              <li key={index} className="text-[#feead8] group cursor-pointer">
                {item}
                <span className="block h-[2px] w-0 bg-indigo-600 group-hover:w-[50%] transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="sm:pl-5">
          <h3 className="text-xl font-medium text-[#feead8]">Get in touch</h3>
          <p className="text-[#feead8] mt-4">www.savvytech.com</p>
          <div className="flex justify-center sm:justify-start mt-4 space-x-4">
            <FaFacebook className="text-[#1877F2] text-xl cursor-pointer" />
            <FaTwitter className="text-[#1DA1F2] text-xl cursor-pointer" />
            <FaInstagram className="text-[#d62976] text-xl cursor-pointer" />
          </div>
        </div>
      </div>

      
      <div className="mt-8 pt-4 text-center text-gray-500 text-sm">
        <p className="text-[#feead8]">© SavvyTech  Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
