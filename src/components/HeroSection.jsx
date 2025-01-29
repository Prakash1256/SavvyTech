import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
    useEffect(() => {
       Aos.init({ duration: 1000 });
     }, []); 

  return (
    <section id="home"  className="bg-black  py-16 px-6 md:px-12">
      <div className="max-w-7xl pt-25 p-15 mx-auto flex flex-col  md:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h1 className="text-3xl md:text-6xl font-bold text-[#feead8] leading-tight" >
           Company OverView
          </h1>
          <p className="mt-4 text-[#feead8] text-lg">
               Innovative, Scalable, Agile and Intelligent Solutions
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img 
            src="https://images.unsplash.com/photo-1607270134634-75fb2ac1afd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Consulting" 
            className="rounded-3xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
