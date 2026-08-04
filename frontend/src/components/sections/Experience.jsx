"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 – Present",
    title: "Freelance Full-Stack Developer",
    place: "Remote",
    points: [
      "Building client websites and full-stack apps with Next.js and Node.js",
      "Implemented contact systems with Neon DB + SMTP email delivery",
      "Delivering responsive UI, API integration, and deployment support",
    ],
  },
  {
    year: "2024 – 2025",
    title: "MERN / Next.js Projects",
    place: "Personal + Academic",
    points: [
      "Built EV Charging Station Management System with auth and CRUD",
      "Created JWT login flows and REST API based applications",
      "Practiced clean component architecture and Tailwind UI systems",
    ],
  },
  {
    year: "2022 – 2025",
    title: "BCA Graduation",
    place: "Bachelor of Computer Applications",
    points: [
      "Strong foundation in programming, databases, and web development",
      "Worked on practical projects focused on real-world use cases",
      "Continuously learning modern frontend and backend tools",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            A quick look at my learning path, project work, and freelance focus.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-sky-300/70 ml-3 sm:ml-6 space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 ring-4 ring-sky-100" />
              <div className="rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 p-5 sm:p-6 shadow-md">
                <p className="text-sm font-semibold text-teal-700">{item.year}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.place}</p>
                <ul className="mt-3 space-y-1.5 text-sm sm:text-base text-slate-700">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
