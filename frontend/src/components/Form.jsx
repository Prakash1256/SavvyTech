import React, { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return; // Prevent multiple clicks

    setLoading(true);
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        event.target.reset(); 
      } else {
        setMessage(`❌ ${data.error || "Failed to send message."}`);
      }
    } catch (error) {
      setMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 2000); 
    }
  };

  return (
    <section id="contact" className="flex justify-center items-center bg-black min-h-screen px-5 md:px-10 py-20 lg:px-20">
      <form
        onSubmit={onSubmit}
        className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-lg border border-gray-700 hover:border-indigo-500 transform transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(75,0,130,0.8)] duration-300 ease-in-out"
      >
        <h2 className="text-3xl text-[#feead8] font-bold mb-6 text-center">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-[#feead8] font-medium mb-2">Full Name</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-700 rounded-lg text-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500" 
            placeholder="Enter Your Name" 
            name="name"
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#feead8] font-medium mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-3 border border-gray-700 rounded-lg text-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500" 
            placeholder="Enter Your Email" 
            name="email"
            required 
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#feead8] font-medium mb-2">Your Message</label>
          <textarea 
            name="message"
            className="w-full p-3 border border-gray-700 rounded-lg text-white bg-black focus:outline-none focus:ring-1 focus:ring-blue-500 h-32 resize-none" 
            placeholder="Enter Your Message" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className={`w-full text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  focus:outline-none py-3 rounded-lg font-medium ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {message && <p className="text-center text-white mt-4">{message}</p>}
      </form>
    </section>
  );
};

export default Form;
