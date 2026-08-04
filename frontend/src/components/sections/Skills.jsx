"use client";

import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiGit,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-800" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-600" /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-indigo-950" /> },
      { name: "Prisma", icon: <SiPrisma className="text-teal-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Git & GitHub", icon: <SiGit className="text-red-800" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skill" className="max-w-6xl mx-auto px-4 sm:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Tools
        </h2>
        <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
          Technologies I use to ship modern fullstack products faster and cleaner.
        </p>
      </motion.div>

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 p-5 text-center shadow-md hover:shadow-lg hover:bg-sky-100/70"
                >
                  <div className="text-3xl mb-3 flex justify-center">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-800">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
