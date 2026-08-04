"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaUserGraduate } from "react-icons/fa";

const stats = [
  { label: "Projects Built", value: "10+", icon: <FaLaptopCode /> },
  { label: "Tech Stack", value: "MERN + Next", icon: <FaCode /> },
  { label: "Education", value: "BCA 2025", icon: <FaUserGraduate /> },
  { label: "Focus", value: "Real Apps", icon: <FaRocket /> },
];

const focusAreas = [
  {
    title: "Frontend Engineering",
    text: "Responsive UI with React/Next.js, Tailwind, Framer Motion, and reusable components.",
  },
  {
    title: "Backend & APIs",
    text: "Secure REST APIs, JWT auth, Prisma ORM, PostgreSQL (Neon), and email workflows.",
  },
  {
    title: "Product Thinking",
    text: "Clean UX, performance, and features that solve real business problems.",
  },
];

function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto text-base sm:text-lg">
            Full-stack developer focused on building useful, modern web products
            with solid frontend polish and dependable backend systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/45 backdrop-blur-md border border-white/50 p-6 sm:p-8 shadow-lg"
          >
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              I am a passionate{" "}
              <span className="font-semibold text-slate-900">Web Developer</span>{" "}
              and{" "}
              <span className="font-semibold text-slate-900">BCA graduate (2025)</span>.
              I enjoy turning ideas into fast, clean, and user-friendly applications.
            </p>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              My stack includes{" "}
              <span className="font-medium text-slate-900">
                HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js,
                Express, Prisma, PostgreSQL, and MongoDB
              </span>
              . I recently built full contact systems with SMTP email delivery and
              database-backed inquiries.
            </p>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              One of my key projects is an{" "}
              <span className="font-medium text-sky-700">
                EV Charging Station Management System
              </span>
              , where I focused on auth, CRUD workflows, and real-world usability.
            </p>
          </motion.div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl bg-sky-100/60 border border-sky-200 p-4 shadow-md"
                >
                  <div className="text-2xl text-teal-700">{item.icon}</div>
                  <p className="mt-3 text-xl font-bold text-slate-800">{item.value}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="rounded-2xl bg-white/50 border border-white/60 p-4"
                >
                  <h3 className="font-semibold text-slate-800">{area.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {area.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
