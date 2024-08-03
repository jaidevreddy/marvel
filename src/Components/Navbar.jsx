import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center p-6 bg-transparent z-10">
      <div className="text-2xl font-bold mr-12">Marvelous.</div>
      <div className="flex space-x-8">
        <a href="#works" className="hover:underline">Works</a>
        <a href="#studio" className="hover:underline">Studio</a>
        <a href="#process" className="hover:underline">Process</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
