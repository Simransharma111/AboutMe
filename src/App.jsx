import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// ...import other sections as needed

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 dark:bg-gray-100 text-gray-200 dark:text-gray-900 min-h-screen transition-colors duration-500">
        <section
          id="home"
          className="min-h-screen flex justify-center items-center text-indigo-500 text-6xl font-bold"
        >
          Hi, I'm Simran Sharma
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* Add Contact and other sections */}
        <Footer />
      </main>
    </>
  );
}

export default App;
