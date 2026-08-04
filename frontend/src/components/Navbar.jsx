"use client";

import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skill", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`text-cyan-800 sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-blue-200/85 backdrop-blur-xl shadow-md border-b border-sky-200/60"
          : "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"
      }`}
    >
      <div className="max-w-6xl mx-auto py-3 px-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-3xl tracking-wide text-blue-800 drop-shadow-lg">
          D.Saini
        </a>

        <div className="text-sm xl:text-base hidden lg:flex items-center space-x-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-600 transition hover:underline decoration-cyan-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-8 pb-4 space-y-3 bg-blue-100/90 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
