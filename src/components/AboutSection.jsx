import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="bg-black px-6 py-16 md:px-16 lg:px-40 min-h-screen flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Text Section */}
      <div className="text-[#feead8] flex flex-col justify-center" data-aos="fade-left">
        <h1 className="text-3xl font-bold text-[#feead8] mb-4"> About Us </h1>
        <p className="mb-4">
          <span className="font-bold text-[#feead8]">SavvyTech</span> is a cutting-edge technology company based in India, specializing in the development of innovative digital, data, and IT solutions across various industries. With a combined experience of over twenty years, our team excels in creating advanced deep tech solutions.
        </p>
        <p className="mb-4">
          At <span className="font-bold text-[#feead8]">SavvyTech</span>, we stand as a symbol of strength, precision, and innovation. Inspired by the “Labrys,” a double-headed axe that has represented power and resilience for centuries. We deliver <span className="font-bold text-[#feead8]">robust, scalable solutions</span> tailored to meet the most demanding business challenges.
        </p>
        <p>
          We are committed to <span className="font-bold text-[#feead8]">deliver success</span> consistently through strong processes, our humanized approach to problem-solving, and nurturing the best of talent.
        </p>
      </div>
  
      {/* Image Section */}
      <div className="flex justify-center items-center h-full" data-aos="fade-right">
          <div className="h-full w-full flex">
            <img
              src="./images/about.jpg"
              alt="SavvyTech"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
    </div>
  </div>
  );
}

export default AboutSection;
