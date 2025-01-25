import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="bg-black min-h-screen pt-0 md:pt-5 lg:pt-30 pb-0 px-4 sm:px-5 md:px-10 lg:px-12"

>

      {/* About Us Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-6xl font-bold text-[#feead8] leading-tight relative bottom-0" data-aos="fade-right">
          About Us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10" data-aos="fade-up" >
        {/* Images Section */}
        <div
          className="flex-1 flex justify-center relative"
          data-aos="fade-left"
        >
          <img
            src="https://img.freepik.com/free-photo/male-worker-explaining-marketing-plans-female-coworker_1163-4101.jpg?t=st=1737813764~exp=1737817364~hmac=449c1053151875742e7862d357bec8f7174a914035ed41f36b7ff201e515c52e&w=996"
            alt="Team Collaboration"
            className="rounded-[10px] w-full shadow-lg w-52 h-36 sm:w-64 sm:h-48 md:w-110 md:h-80 object-cover"

          />
        </div>

        {/* Text Content */}
        <div
          className="flex-1 text-gray-700 mt-10 md:mt-0"
          data-aos="fade-right"
        >
          <p className=" text-[#feead8] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
  Savvy Tech is a cutting-edge technology company based in India,
  specializing in the development of innovative digital, data, and IT
  solutions across various industries. With a combined experience of
  over twenty years, our team excels in creating advanced deep tech
  solutions. At Savvy Tech, we believe in building long-term
  associations with our customers and business partners. We deliver
  <strong> robust, innovative, and scalable solutions </strong> tailored to meet
  the most demanding business challenges. We are committed to
  delivering success consistently through strong processes, a
  humanized approach to problem-solving, and nurturing the best
  talent.
</p>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
