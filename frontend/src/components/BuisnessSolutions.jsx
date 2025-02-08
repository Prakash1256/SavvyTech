import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const BusinessSolutions = () => {
     useEffect(() => {
          Aos.init({ duration: 1000, once: false });
          const handleScroll = () => {
            Aos.refresh(); 
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);  
    


  return (
    <section id="buisness" className="bg-black">
      <div className="p-6 md:p-12 max-w-5xl mx-auto bg-black">
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[#feead8] mb-14" data-aos="fade-left">
            Edtech Business Solutions
          </h1>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 items-center ">
          <div className="shadow-lg rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.8)] duration-300 ease-in-out p-4 rounded-lg" data-aos="fade-left">
            <h2 className="text-xl font-semibold text-[#feead8]">
              Remote Proctoring as a Service
            </h2>
            <p className="text-[#feead8] mt-2">
              An enterprise solution for utilizing remote proctoring as a service for
              certification and learning management systems (LMS) represents a transformative
              approach to conducting secure and efficient assessments in today's digital landscape.
            </p>
            <p className="text-[#feead8] mt-2">
              Within the context of certification and LMS, ETS remote proctoring as a service seamlessly
              integrates with existing platforms, allowing organizations to administer exams and
              certifications online with confidence.
            </p>
          </div>
          <div className="flex justify-center shadow-lg rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.8)] duration-300 ease-in-out p-4 rounded-lg" data-aos="fade-up">
          <div className="w-64 h-64  p-8 flex flex-col justify-center items-center rounded-full" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504238624541-bca0f332da07?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <p className="mt-6 font-semibold text-[#feead8]">Remote Proctoring Tool</p>
              <div className="w-40 h-40  rounded-full flex items-center justify-center transition-transform duration-700">
                <span className="font-bold text-lg text-[#feead8]">*ets</span>
              </div>
              <p className="mb-1 font-semibold text-[#feead8]">Assessment Platform</p>
              <p className="mb-1 font-semibold text-[#feead8]">Recruitment Test</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-black p-6 rounded-lg shadow-lg rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.8)] duration-300 ease-in-out" data-aos="fade-right">
            <h3 className="text-lg font-semibold text-[#feead8]">
              Enterprise Recruitment and Development Tests
            </h3>
            <p className="text-[#feead8] mt-2">
              Standardized tests play a pivotal role in the modern business landscape, serving as objective
              measures to assess the suitability of candidates for various roles within an organization.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.8)] duration-300 ease-in-out" data-aos="fade-left">
            <h3 className="text-lg font-semibold text-[#feead8]">
              Scalable and Secured Cloud Assessment Platform as a Service
            </h3>
            <p className="text-[#feead8] mt-2">
              AI-enabled assessment platform tailored for recruitment and development represents a
              groundbreaking approach to talent evaluation within organizations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessSolutions;
