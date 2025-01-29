import React ,{useEffect} from 'react';
import CountUp from 'react-countup';
import Aos from "aos";
import "aos/dist/aos.css";

function AboutSection() {
     
   useEffect(() => {
         Aos.init({ duration: 1000 });
       }, []);  
   

  return (
    <div id='about' className="bg-black  px-6 py-18 md:px-16 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text Section */}
        <div data-aos="fade-left">
          <h1 className="text-3xl font-bold text-[#feead8] mb-4">About US</h1>
          <p className="mb-4 text-[#feead8]">
            <span className="font-bold text-teal-300">Labrys</span> is a cutting-edge technology company based in India, specializing in the development of innovative digital, data, and IT solutions across various industries. With a combined experience of over twenty years, our team excels in creating advanced deep tech solutions.
          </p>
          <p className="mb-4 text-[#feead8]">
            At <span className="font-bold text-teal-300">Labrys</span>, we stand as a symbol of strength, precision, and innovation. Inspired by the “Labrys,” a double-headed axe that has represented power and resilience for centuries. We deliver <span className="font-bold text-teal-300">robust, scalable solutions</span> tailored to meet the most demanding business challenges.
          </p>
          <p className='text-[#feead8]'>
            We are committed to <span className="font-bold text-teal-300">deliver success</span> consistently through strong processes, our humanized approach to problem-solving, and nurturing the best of talent.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8" data-aos="fade-right">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#feead8]">
              <CountUp end={70} duration={3} />+
            </h2>
            <p className="text-lg text-[#feead8]">YEARS OF FOUNDERS EXPERIENCE</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#feead8]">
              <CountUp end={10} duration={3} />+
            </h2>
            <p className="text-lg text-[#feead8]">HAPPY CUSTOMERS</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#feead8]">
              <CountUp end={15} duration={3} />+
            </h2>
            <p className="text-lg text-[#feead8]">PROJECTS AND PRODUCTS DELIVERED</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-teal-300">
              <CountUp end={3} duration={3} />+
            </h2>
            <p className="text-lg text-[#feead8]">COUNTRIES</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#feead8]">
              <CountUp end={7} duration={3} />+
            </h2>
            <p className="text-lg text-[#feead8]">BUSINESS AND INDUSTRIES DOMAINS</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#feead8]">
              <CountUp end={50} duration={3} />+
            </h2>
            <p className="text-[#feead8]">TECHNOLOGISTS, DIGITAL ENGINEERS AND CONSULTANTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
