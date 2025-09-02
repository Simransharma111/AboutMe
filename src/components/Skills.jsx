import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const fadeUp = { opacity: 0, y: 50 };
const transition = { duration: 0.6, ease: "easeOut" };

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: "Advanced" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, level: "Advanced" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: "Advanced" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: "Intermediate" },
];

const Skills = () => (
  <motion.section
    id="skills"
    initial={fadeUp}
    whileInView={{ opacity: 1, y: 0 }}
    transition={transition}
    viewport={{ once: false, amount: 0.3 }}
    className="min-h-screen container mx-auto px-4 py-16"
  >
    <h2 className="text-3xl font-bold mb-12 text-indigo-500 text-center">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
      {skills.map(({ name, icon, level }) => (
        <div key={name} className="bg-indigo-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-indigo-300">{level}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
