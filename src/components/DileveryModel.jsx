import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import the icons
import Aos from "aos";
import "aos/dist/aos.css";

const DeliveryModels = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [activeSection, setActiveSection] = useState(null);
  const [imageSrc, setImageSrc] = useState(
    "https://img.freepik.com/free-photo/detective-evaluating-old-archived-folders-organize-all-cases-based-crimes_482257-83366.jpg?t=st=1737818920~exp=1737822520~hmac=bdc9aa382908eb5a394ed970f7c71b5eae6b5d01ff6f2bb5ce0fe706836041a4&w=1380"
  );

  const handleMouseEnter = (section, imageUrl) => {
    setActiveSection(section); // Set the active section to show content
    setImageSrc(imageUrl); // Dynamically update the image
  };

  const handleMouseLeave = () => {
    setActiveSection(null); // Hide content when mouse leaves
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black pt-15">

      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0" data-aos="fade-left">
        <img
          src={imageSrc} // Dynamically change image
          alt="Meeting"
          className="w-full h-[200px] md:w-[600px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center" data-aos="fade-right">
        <h2 className="text-2xl md:text-3xl text-[#feead8] font-bold mb-4">
          Comprehensive Suit Our Service
        </h2>

        <div className="space-y-4">
          {/* Quick Response Teams */}
          <div
            className="bg-black rounded-lg "
            onMouseEnter={() =>
              handleMouseEnter(
                "quickResponse",
                "https://img.freepik.com/free-photo/two-teens-watching-line-content-laptop-lying-floor_1153-3737.jpg?t=st=1737821900~exp=1737825500~hmac=a473b11fe8e02f6220dcc57e6e46df0834b61138121284cc8f31e1ab81fb3f9f&w=996"
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
              <span>Quick Response Teams</span>
              <span>{activeSection === "quickResponse" ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <p
              className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                activeSection === "quickResponse" ? "opacity-100" : "opacity-0"
              }`}
            >
              Our Quick Response Teams are designed to handle urgent needs,
              ensuring rapid and effective solutions to critical challenges.
            </p>
          </div>

          {/* Specialized Workforce Action Teams */}
          <div
            className="bg-black rounded-lg"
            onMouseEnter={() =>
              handleMouseEnter(
                "specializedWorkforce",
                "https://img.freepik.com/free-photo/portrait-smart-businesswoman-looking-away_23-2148452635.jpg?t=st=1737822126~exp=1737825726~hmac=84dde7bf84027c70ce0a1bc01e6e205fc631073399f140d2759bd6aecd84f119&w=996"
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
              <span>Specialized Workforce Action Teams</span>
              <span>{activeSection === "specializedWorkforce" ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <p
              className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                activeSection === "specializedWorkforce" ? "opacity-100" : "opacity-0"
              }`}
            >
              Specialized Workforce Action Teams provide skilled professionals
              tailored to meet your specific project requirements.
            </p>
          </div>

          {/* Co-Product Development */}
          <div
            className="bg-black rounded-lg "
            onMouseEnter={() =>
              handleMouseEnter(
                "coProductDevelopment",
                "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169848.jpg?t=st=1737822155~exp=1737825755~hmac=9e415f9dac62e70fe80755300696228bb9efc470e020c2543342faf57c150d18&w=996"
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
              <span>Co-Product Development</span>
              <span>{activeSection === "coProductDevelopment" ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <p
              className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                activeSection === "coProductDevelopment" ? "opacity-100" : "opacity-0"
              }`}
            >
              Collaborate with us to co-develop products that align with your
              vision and market needs.
            </p>
          </div>

          {/* Staff Augmentation */}
          <div
            className="bg-black rounded-lg"
            onMouseEnter={() =>
              handleMouseEnter(
                "staffAugmentation",
                "https://img.freepik.com/free-photo/diverse-team-working-overtime-criminal-investigation-searching-evidence-arhive-room-private-detectives-working-through-every-clue-crime-scene-analyzing-criminology-report_482257-62937.jpg?t=st=1737822184~exp=1737825784~hmac=5c2edb814bfb0c2b8d80fabd9e533b1e97314e31e23dfa8709091bb50017b61b&w=996"
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
              <span>Staff Augmentation</span>
              <span>{activeSection === "staffAugmentation" ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <p
              className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                activeSection === "staffAugmentation" ? "opacity-100" : "opacity-0"
              }`}
            >
              Our Staff Augmentation services provide you with additional
              resources to enhance your team’s capabilities.
            </p>
          </div>

          {/* Project Delivery */}
          <div
            className="bg-black rounded-lg"
            onMouseEnter={() =>
              handleMouseEnter(
                "projectDelivery",
                "https://img.freepik.com/free-photo/dark-silhouette-businessman-standing-office-window-holding-tablet-smartphone_1098-20169.jpg?t=st=1737816293~exp=1737819893~hmac=f5123bbfdd254785652a4b4f11f102e9ce827f776a78cfda03135d0d2e768dcd&w=996"
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
              <span>Project Delivery</span>
              <span>{activeSection === "projectDelivery" ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <p
              className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                activeSection === "projectDelivery" ? "opacity-100" : "opacity-0"
              }`}
            >
              Our Project Delivery approach ensures timely, high-quality,
              and within-scope solutions for your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryModels;
