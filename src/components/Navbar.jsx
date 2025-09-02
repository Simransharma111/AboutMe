import React, { useState, useEffect } from "react";
import {
  BiHome,
  BiUser,
  BiBook,
  BiBriefcaseAlt2,
  BiMessageSquareDots,
  BiSun,
  BiMoon,
} from "react-icons/bi";

const navItems = [
  { id: "home", icon: <BiHome />, label: "Home" },
  { id: "about", icon: <BiUser />, label: "About" },
  { id: "skills", icon: <BiBook />, label: "Skills" },
  { id: "projects", icon: <BiBriefcaseAlt2 />, label: "Projects" },
  { id: "contact", icon: <BiMessageSquareDots />, label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [darkTheme, setDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update root html class and save to localStorage on theme change
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  // Highlight nav item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let newActive = "home";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          newActive = id;
        }
      });
      setActive(newActive);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section on nav click
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed bottom-4 left-0 right-0 z-50">
      <nav className="mx-auto container bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-full w-96 px-6 py-3 flex justify-between text-gray-200 shadow-lg">
        {navItems.map(({ id, icon, label }) => (
          <button
            key={id}
            aria-label={label}
            className={`flex items-center text-2xl rounded-full p-3 hover:bg-indigo-600 hover:text-white transition ${
              active === id ? "bg-indigo-600 text-white" : ""
            }`}
            onClick={() => scrollTo(id)}
          >
            {icon}
          </button>
        ))}
        <button
          aria-label="Toggle dark mode"
          className="text-2xl rounded-full p-3 hover:bg-indigo-600 hover:text-white transition"
          onClick={() => setDarkTheme((prev) => !prev)}
        >
          {darkTheme ? <BiSun /> : <BiMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
