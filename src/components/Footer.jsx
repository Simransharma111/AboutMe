import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-indigo-300 pt-8 pb-24 md:pb-32 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center max-w-5xl">
        <div className="mb-6 md:mb-0 text-xl font-semibold text-indigo-400">
          © 2025 Simran Sharma
        </div>

        <nav className="mb-6 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-indigo-100">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-100">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-100">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-100">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-100">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/Simransharma111"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-100"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/simran-sharma-2a46232a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-100"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-100"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/tapsya_tech?igsh=MXZuamcyaTN5NHluaQ== "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-100"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
