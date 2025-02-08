import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Models() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    { title: "Quick Response Team", content: "We offer tailored software solutions that align with your business goals." },
    { title: "Specialization work team", content: "Develop cutting-edge web and mobile applications to stay competitive." },
    { title: "Co-product development", content: "Streamline your business processes with advanced digital solutions." },
    { title: "Staff Augmentation", content: "Streamline your business processes with advanced digital solutions." },
    { title: "Project Delivery", content: "Streamline your business processes with advanced digital solutions." },
  ];

  return (
    <section className="bg-black px-4 py-18">
      <div className="flex flex-col lg:flex-row items-start justify-center w-full md:max-w-[80%] lg:max-w-[80%] max-w-screen-xl mx-auto space-y-10 lg:space-y-0 lg:space-x-10">

        
        {/* Left Content */}
        <div className="bg-black-800 text-[#feead8] p-6 rounded-lg w-full lg:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl text-[#feead8] font-bold leading-tight mb-6">
            IT Development: From Concept to Completion
          </h2>
          <div>
            {services.map((service, index) => (
              <div key={index} className="mb-4 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full bg-black-700 text-[#feead8] text-left px-4 py-3 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-medium">{service.title}</span>
                  <FaChevronDown
                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                <div
                  className={`transition-all ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100 p-4 bg-black" : "max-h-0 opacity-0"}`}
                  style={{ transition: "0.1s ease-in-out" }}
                >
                  <p>{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img
            src="./images/development.jpg"
            alt="IT Development Illustration"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Models;
