import React ,{useState , useEffect} from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import the icons
import { FaSyncAlt, FaUserCheck, FaLaptop, FaDatabase, FaVolumeUp, FaShieldAlt, FaAward } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";

const Solutions = () => {

     useEffect(() => {
         Aos.init({ duration: 1000 });
       }, []); 


    const [activeSection, setActiveSection] = useState(null);
    const [imageSrc, setImageSrc] = useState(
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  
    const handleMouseEnter = (section, imageUrl) => {
      setActiveSection(section);
      setImageSrc(imageUrl);
    };
  
    const handleMouseLeave = () => {
      setActiveSection(null);
    };
   

    const features = [
        {
          icon: <FaSyncAlt className="text-[#feead8]  text-2xl" />, 
          title: '360 Degree Room Scan',
          description: 'The Wheebox Room Scan enables remote proctoring through a complete 360-degree view of candidates’ premises to scan for any sort of malpractice.'
        },
        {
          icon: <FaVolumeUp className=" text-2xl" />, 
          title: 'Noise Detection Using AI Services',
          description: 'The Wheebox AI helps detect noise and sends out alerts to candidates and proctors regarding the noise detected.'
        },
        {
          icon: <FaUserCheck className="text-green-600 text-2xl" />, 
          title: 'Student Authentication and Approval',
          description: 'Physical Approvers eliminate any risk of impersonation using a Two-Factor authentication process.'
        },
        {
          icon: <FaLaptop className="text-green-600 text-2xl" />, 
          title: 'Artificial Intelligence (AI) Services',
          description: 'Wheebox uses Microsoft Cognitive AI Services for Face Recognition and Object Identification, and has its own in-house AI Services such as Face Tracking and Voice Tracking.'
        },
        {
          icon: <FaShieldAlt className="text-green-600 text-2xl" />, 
          title: 'Wheebox Safe Exam Browser',
          description: 'SEB prohibits the navigation, sharing, and projection of the assessment screen to ensure a safe and secure assessment environment.'
        },
        {
          icon: <FaLaptop className="text-green-600 text-2xl" />, 
          title: 'Advanced Remote Proctoring Tools',
          description: 'Physical Remote Proctors monitor and manage the sanctity of assessments using the Wheebox Advanced Remote Proctoring Suite with services such as Face Tracking, Desktop Control, 360 Degree Scan, Audio, and Candidate Proxy Check.'
        },
        {
          icon: <FaDatabase className="text-green-600 text-2xl" />, 
          title: 'Data Security and Storage of Records',
          description: 'The Wheebox Remote Proctoring Services offer end-to-end encrypted data security, which includes images, question banks, results, and logs that are created during assessments. The data helps institutions respond to RTI in relation with candidates’ privacy issues.'
        },
        {
          icon: <FaAward className="text-green-600 text-2xl" />, 
          title: 'Wheebox Certified Proctors',
          description: 'Wheebox has hundreds of Certified Physical Proctors who are certified and trained to use & manage our applications and check for malpractices during the high-stake assessments.'
        }
      ];

  return (
    <div id='solutions'>
      <div className="relative  flex flex-col lg:flex-row md:flex-row items-center justify-center min-h-screen w-full p-6 lg:p-20 gap-8 bg-black">
         
          <h2 className="absolute top-15 bottom-20 text-[20px] md:text-[48px] text-[#feead8] font-bold w-full text-center" data-aos="fade-left">
          EdTech Solutions
          </h2>

        {/* left section  */}
          <div className="w-full mt-9 md:w-1/2 mb-6  md:mb-0"   data-aos="fade-left">
            <img
              src={imageSrc}
              alt="Meeting"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* right section */}
          <div className="w-full  md:w-1/2  md:p-2 flex flex-col justify-center mt-25" data-aos="fade-right" >
            <div className="">
             
              <div
                className="bg-black rounded-lg"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "remoteproctoring",
                    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
                  <span>Remote Proctoring </span>
                  <span>
                    {activeSection === "remoteproctoring" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                <p
                  className={`mt-2 text-xs text-[#feead8] transition-opacity duration-500 ease-in-out ${
                    activeSection === "remoteproctoring"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  it has Differentiated AI-Driven Remote Proctoring Solutions with features such as Face Recognition object 
                  Recognition , Noise Detection , Typing DNA , Auto ID Card-Based Authentication , Movement Tracking and 360 Degrees Room Scan.
                </p>
              </div>

             
              <div
                className="bg-black rounded-lg"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "security",
                    "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
                  <span>Security </span>
                  <span>
                    {activeSection === "security" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                    activeSection === "security"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  it has Differentiated Security Solutions including compliances of ISO , Certification by Cert-in , 
                  complying norms of GDPR and SOC 2 of our infrastructure provider , and end-to-end encryption ff data
                </p>
              </div>

             
              <div
                className="bg-black rounded-lg"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "advancedEncryption",
                    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
                  <span>Advanced Encryption </span>
                  <span>
                    {activeSection === "advancedEncryption" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                    activeSection === "advancedEncryption"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                 Wheebox application layer is secured  using 128 bit Advanced Encryption Services(AES). The user data , questions banks , and user answers are encrypted for higher security
                 They are secured through firewalls at cloud Server to protect access to the plateform for public use..
                </p>
              </div>

            
              <div
                className="bg-black rounded-lg"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "autoScale",
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-between items-center w-full text-lg text-[#feead8]">
                  <span>Auto Scale</span>
                  <span>
                    {activeSection === "autoScale" ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm text-[#feead8] transition-opacity duration-500 ease-in-out ${
                    activeSection === "autoScale"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                Wheebox uses Auto-scale , a method in cloud computing that dynamically adjust the number of computional resources on Microsoft 
                Azure Servers , based on the load or the concurrency or change in demand ..
                </p>
              </div>
            </div>   
            </div>
         </div>  
  

  {/* remote proctoring */}

  <div className="bg-black p-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 bg-black shadow-xl rounded-xl p-4"
          data-aos={
            index % 4 === 0
              ? 'fade-up'
              : index % 4 === 1
              ? 'fade-down'
              : index % 4 === 2
              ? 'fade-right'
              : 'fade-left'
          }
        >
          {feature.icon}
          <div>
            <h3 className="text-lg text-[#feead8] font-bold mb-1">{feature.title}</h3>
            <p className="text-[#feead8]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
  )
}

export default Solutions