import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); // Add empty dependency array to run once on component mount

  return (
    <div className="bg-black py-10 px-4 sm:px-5 md:px-40 lg:px-12 h-screen">
      {/* About Us Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-6xl font-bold text-[#feead8] leading-tight relative bottom-20" data-aos="fade-right">
          About Us
        </h1>
      </div>

      <div
        className="flex flex-col md:flex-row items-center md:items-start md:space-x-10"
        data-aos="fade-up"
      >
        {/* Images Section */}
        <div
          className="flex-1 flex justify-center relative"
          data-aos="fade-left"
        >
          <img
            src="https://img.freepik.com/free-photo/male-worker-explaining-marketing-plans-female-coworker_1163-4101.jpg?t=st=1737739306~exp=1737742906~hmac=75c3badb49dd7abec581ff0cdc48c89eb82a84ba713f3a91210ef1d118d05cb6&w=996"
            alt="Travel"
            className="rounded-lg shadow-lg w-72 h-48 object-cover absolute top-0 left-0 transform rotate-[-10deg]"
          />
          <img
            src="https://img.freepik.com/free-photo/business-teammates-working-late_23-2148991314.jpg?t=st=1737739333~exp=1737742933~hmac=7ee10ea4b11cfe01f0d252e82ae74207664fdd8a8c822ebc0dbfd1cd9947562f&w=996"
            alt="Travel"
            className="rounded-lg shadow-lg w-72 h-48 object-cover absolute top-8 right-30 bottom-[10px] transform rotate-[20deg]"
          />
          <img
            src="https://img.freepik.com/free-photo/business-teammates-working-late_23-2148991316.jpg?t=st=1737739379~exp=1737742979~hmac=43b7ac5fbe2d55b006c052955f1330c61fc2f73db8f2c443b6241aeac3fcaf7f&w=996"
            alt="Travel"
            className="rounded-lg shadow-lg w-72 h-48 object-cover absolute bottom-0 left-10 transform rotate-[-5deg]"
          />
        </div>

        {/* Text Content */}
        <div
          className="flex-1 text-gray-700 mt-10 md:mt-0"
          data-aos="fade-right"
        >
          <p className="mb-6 text-[#feead8] leading-tight text-2xl leading-normal">
            Savvy Tech is a cutting-edge technology company based in India,
            specializing in the development of innovative digital, data and IT
            solutions across various industries. With a combined experience of
            over twenty years, our team excels in creating advanced deep tech
            solutions. At Savvy Tech, we believe in building long term
            associations with our customers and business partners. We deliver
            𝐫𝐨𝐛𝐮𝐬𝐭 , innovative and 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 tailored to meet the most
            demanding business challenges. We are committed to deliver success
            consistently through strong processes, our humanized approach to
            problem solving and nurturing the best of talent
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
