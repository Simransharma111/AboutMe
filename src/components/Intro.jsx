import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { ScrollContext } from "./ScrollProvider";

const Intro = () => {
  const scrollProgress = useContext(ScrollContext);
  const controls = useAnimation();

  React.useEffect(() => {
    if (scrollProgress > 0.1) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [scrollProgress, controls]);

  return (
    <section
      id="intro"
      style={{ minHeight: "100vh" }}
      data-scroll-section
      className="flex flex-col justify-center items-center bg-gradient-to-tr from-blue-900 to-indigo-700 text-white px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-4"
      >
        Hi, I'm Simran Sharma
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl text-center text-lg md:text-xl"
      >
        Full Stack Developer specializing in MERN stack. I build scalable,
        user-friendly, and innovative web applications.
      </motion.p>
    </section>
  );
};

export default Intro;
