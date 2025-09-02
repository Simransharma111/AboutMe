import React from "react";
import { motion } from "framer-motion";
import { BiAward, BiBriefcaseAlt, BiSupport } from "react-icons/bi";
import Illustration from "../assets/undraw_programmer_raqr.svg"; // Adjust path if necessary

const fadeLeft = { opacity: 0, x: -50 };
const transition = { duration: 0.6, ease: "easeOut" };

const About = () => (
  <motion.section
    id="about"
    initial={fadeLeft}
    whileInView={{ opacity: 1, x: 0 }}
    transition={transition}
    viewport={{ once: false, amount: 0.3 }}
    className="min-h-screen container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
  >
    <div className="flex justify-center md:w-1/2">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-4 shadow-lg">
        <img
          src={Illustration}
          alt="Simran Sharma Illustration"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
    <div className="md:w-1/2 space-y-8">
      <h2 className="text-3xl font-bold text-indigo-500 mb-4">About Me</h2>
      <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
        Full Stack Developer specializing in the MERN stack (MongoDB, Express,
        React, Node.js). Passionate about building scalable, user-friendly web
        applications and delivering clean, robust code. Completed internship at
        Solitaire Infosys Pvt Ltd, working on room rental website projects.
        Earned Masters and Bachelors in Computer Applications.
      </p>
      <div className="grid grid-cols-3 gap-6 text-center text-gray-400">
        <div>
          <BiAward size={40} className="mx-auto text-indigo-500" />
          <h3 className="text-lg font-semibold mt-1 text-white">Experience</h3>
          <p>6 Months Internship</p>
        </div>
        <div>
          <BiBriefcaseAlt size={40} className="mx-auto text-indigo-500" />
          <h3 className="text-lg font-semibold mt-1 text-white">Projects</h3>
          <p>4+ Completed</p>
        </div>
        <div>
          <BiSupport size={40} className="mx-auto text-indigo-500" />
          <h3 className="text-lg font-semibold mt-1 text-white">Support</h3>
          <p>24/7 Online</p>
        </div>
      </div>
      <a
        href="#contact"
        className="inline-block mt-8 px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-full hover:bg-indigo-500 hover:text-white transition"
      >
        Contact Me
      </a>
    </div>
  </motion.section>
);

export default About;
