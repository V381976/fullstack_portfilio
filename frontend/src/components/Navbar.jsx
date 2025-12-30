import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="  text-cyan-800 sticky top-0 z-50 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 ">
      <div className="max-w-6xl mx-auto  py-3 flex items-center justify-between ">
        
        {/* Logo */}
        <h1 className="  font-bold text-3xl tracking-wide  text-blue-800 drop-shadow-lg ">
           D.Saini
        </h1>

        {/* Desktop Menu  */}
        <div className=" text-xl hidden md:flex space-x-10">
          <a href="#home" className="hover:text-cyan-500 transition hover:underline decoration-cyan-500 ">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-500 transition  hover:underline decoration-cyan-500">
            About
          </a>
           <a href="#skill" className="hover:text-cyan-500 transition hover:underline decoration-cyan-500">
         Skills
          </a>
          <a href="#projects" className="hover:text-cyan-500 transition hover:underline decoration-cyan-500">
            Projects
          </a>
          <a href="#contact" className=  " hover:text-cyan-500 transition hover:underline decoration-cyan-500">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-10 pb-4 space-y-3 items-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 sh">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            About
          </a>
           <a
            href="#skill"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
       
          </a>
          <a
            href="#project"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
