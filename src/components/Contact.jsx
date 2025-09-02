import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiMailSend, BiPhone, BiMap } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const fadeUp = { opacity: 0, y: 50 };
const transition = { duration: 0.6, ease: "easeOut" };

const whatsappNumber = "918894576440"; // Replace with your full number
const whatsappMessage = encodeURIComponent(
  "Hello, I found your portfolio website and would like to connect."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial={fadeUp}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold mb-12 text-indigo-500 text-center">
        Contact Me
      </h2>
      <div className="max-w-3xl mx-auto text-gray-300 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center">
          <div className="space-y-2">
            <BiMailSend size={40} className="mx-auto text-indigo-500" />
            <p>ssa013386@gmail.com</p>
          </div>
          <div className="space-y-2">
            <BiPhone size={40} className="mx-auto text-indigo-500" />
            <p>Connect</p>
          </div>
          <div className="space-y-2">
            <BiMap size={40} className="mx-auto text-indigo-500" />
            <p>New Delhi, India</p>
          </div>
          <div className="space-y-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-indigo-500 hover:text-indigo-400"
            >
              <FaWhatsapp size={40} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md px-4 py-3 bg-indigo-800 border border-indigo-600 focus:outline-none focus:border-indigo-400 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md px-4 py-3 bg-indigo-800 border border-indigo-600 focus:outline-none focus:border-indigo-400 text-white"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md px-4 py-3 bg-indigo-800 border border-indigo-600 focus:outline-none focus:border-indigo-400 text-white resize-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
