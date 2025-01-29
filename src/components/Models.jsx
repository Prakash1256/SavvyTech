import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';



function Models() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const services = [
    {
      title: "Custom Product Development",
      content: "We offer tailored software solutions that align with your business goals.",
    },
    {
      title: "Custom Web and Mobile Applications",
      content: "Develop cutting-edge web and mobile applications to stay competitive.",
    },
    {
      title: "Digital Transformation and Cloud Solutions",
      content: "Streamline your business processes with advanced digital solutions.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-5 py-16 bg-black pt-10 sm:pt-16 lg:pt-10">
                                                  
      {/* Left Content */}
      <div className="bg-black-800 text-[#feead8] p-6 rounded-lg max-w-xl w-full mt-10 sm:mt-44 lg:mt-0">

        <h2 className="text-3xl text-[#feead8] sm:text-4xl font-bold leading-tight mb-6">   
          IT Development: From Concept to <span className="underline decoration-teal-300">Completion</span>
        </h2>
        <div>
          {services.map((service, index) => (
            <div key={index} className="mb-4 border border-black-600 rounded-lg overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full bg-black-700 text-[#feead8] text-left px-4 py-3 flex items-center justify-between focus:outline-none"
              >
                <span className="font-medium">{service.title}</span>
                <FaChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden  transition-all duration-400 ${
                  openIndex === index ? "max-h-40 p-4 bg-black text-[#feead8]" : "max-h-0"
                }`}
              >
                <p >{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Content */}
      <div className="mt-8 lg:mt-0 lg:ml-8 max-w-xl w-full">
        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="IT Development Illustration"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  );
}

export default Models;
