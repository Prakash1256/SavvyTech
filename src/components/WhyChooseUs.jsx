import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen p-6 lg:p-12 gap-8 bg-black">
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-right" // Add fade-right effect for the image
      >
        <img
          src="https://img.freepik.com/free-photo/black-laptop-screen-dark-room-night_169016-58009.jpg?t=st=1737827812~exp=1737831412~hmac=142eda537cd965439f594b10ae88eb38744f717fdb9af863bf645696f7a8889d&w=996"
          alt="Person working on laptop"
          className="rounded-xl shadow-lg max-w-full"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-full lg:w-1/2"
        data-aos="fade-left" // Add fade-left effect for the text section
      >
        <h2 className="text-2xl text-[#feead8] lg:text-4xl font-bold mb-6">
          Why Choose Us?
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li className="text-[#feead8]">
            <span className="font-bold text-[#feead8]">Innovative Solutions:</span> We stay at the forefront of technology, delivering solutions that leverage the latest advancements in AI, cloud, and data.
          </li>
          <li className="text-[#feead8]">
            <span className="font-bold text-[#feead8]">Customer-Centric:</span> We prioritize customer delight by creating personalized solutions aligned with your business goals.
          </li>
          <li className="text-[#feead8]">
            <span className="font-bold text-[#feead8]">Collaborative Approach:</span> We work alongside you, building long-term partnerships founded on trust and success.
          </li>
          <li className="text-[#feead8]">
            <span className="font-bold text-[#feead8]">Agile Approach:</span> As a startup, we are agile, flexible, and responsive to changing business needs.
          </li>
          <li className="text-[#feead8]">
            <span className="font-bold text-[#feead8]">Diverse Expertise:</span> Our team boasts a wide range of industry and technical expertise, giving us the agility to handle projects of any scale.
          </li>
          <li className="text-[#feead8]">
            <span className="font-bold text-[#feead8]">Quality Assurance:</span> We follow rigorous quality processes to deliver flawless solutions that drive performance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
