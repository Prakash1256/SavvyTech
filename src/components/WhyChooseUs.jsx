import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen p-6 lg:p-42 gap-9 bg-black">
      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-right" // Add fade-right effect for the image
      >
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <ul className="space-y-4 text-gray-700 w-full">
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
