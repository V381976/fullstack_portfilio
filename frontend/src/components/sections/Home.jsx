"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const highlights = [
  "Next.js + React apps",
  "REST APIs & Auth",
  "Neon / MongoDB",
  "SMTP & contact systems",
];

function Home() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.25),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/50 border border-sky-200 px-4 py-1.5 text-sm font-medium text-teal-800 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance projects
          </motion.span>

          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-teal-700 via-sky-700 to-purple-800 bg-clip-text text-transparent">
              Hi, I&apos;m Devendra Saini
            </span>
          </h1>

          <h2 className="mt-5 text-xl sm:text-3xl font-medium text-sky-800 min-h-[2.5rem]">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "Next.js Specialist",
                  "MERN Stack Builder",
                  "Freelance Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 24,
              }}
            />
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed">
            I design and build production-ready web apps with clean UI,
            secure APIs, and reliable databases — from landing pages to full
            business systems with auth, email, and admin workflows.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                className="rounded-full bg-sky-100/80 border border-sky-200 px-3 py-1 text-xs sm:text-sm text-slate-700"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 px-7 py-3.5 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-white/70 border border-sky-200 px-7 py-3.5 text-slate-700 font-semibold shadow-md hover:bg-white transition"
            >
              Start a Project
            </a>
            <a
              href="/file/_DEVENDRA_SAINI_Resume.pdf"
              download
              className="rounded-xl bg-blue-200/80 px-7 py-3.5 text-slate-700 font-semibold shadow-md hover:bg-blue-200 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-700">
            <a
              href="https://github.com/V381976/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/devendra-saini-502042253/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:30dsaini@gmail.com"
              className="hover:text-teal-700 transition"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-40"
              animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative h-full w-full overflow-hidden rounded-full border-4 border-cyan-300 shadow-2xl"
            >
              <Image
                src="/images/web_developer.png"
                alt="Devendra Saini - Web Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
