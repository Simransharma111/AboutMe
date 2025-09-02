import React, { useState } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="bg-indigo-900 text-yellow-400 fixed w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold cursor-pointer">Simran Sharma</div>
        <nav>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-yellow-400"></span>
              <span className="block w-6 h-0.5 bg-yellow-400"></span>
              <span className="block w-6 h-0.5 bg-yellow-400"></span>
            </div>
          </button>
          <ul className={`flex flex-col md:flex-row md:space-x-8 absolute md:static bg-indigo-900 md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in ${navOpen ? 'top-16' : '-top-96'}`}>
            <li className="py-3 px-6 hover:bg-yellow-400 hover:text-indigo-900 cursor-pointer">
              <a href="#about">About Me</a>
            </li>
            <li className="py-3 px-6 hover:bg-yellow-400 hover:text-indigo-900 cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-3 px-6 hover:bg-yellow-400 hover:text-indigo-900 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="py-3 px-6 hover:bg-yellow-400 hover:text-indigo-900 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
