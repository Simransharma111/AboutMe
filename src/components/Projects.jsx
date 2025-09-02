import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -100, y: 20 },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 100, y: 20 },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const variantsArray = [fromLeft, fromRight, fromBottom];

// Example projects data — replace with your actual projects
const projects = [
  {
    title: "Room Rental Website",
    description: "MERN app for room bookings, filtering, and user auth.",
    liveUrl: "https://your-mern-project-url.com",
  },
  {
    title: "E-Commerce Platform",
    description: "React & Firebase e-commerce with cart and payment.",
    liveUrl: null, // Coming soon project
  },
  {
    title: "Travel Website",
    description: "Responsive travel site with custom APIs integration.",
    liveUrl: "https://your-travel-site.com",
  },
  {
    title: "Photo Studio Website",
    description: "Static landing page with modern responsive design.",
    liveUrl: null,
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="min-h-screen container mx-auto px-4 py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={containerVariants}
  >
    <h2 className="text-3xl font-bold mb-12 text-indigo-500 text-center">
      Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="bg-indigo-900 rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-indigo-600 transition"
          variants={variantsArray[idx % variantsArray.length]}
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-indigo-300">{project.description}</p>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 underline mt-3 block"
            >
              Visit Project
            </a>
          ) : (
            <span className="text-yellow-400 mt-3 inline-block font-semibold">
              Coming Soon
            </span>
          )}
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
