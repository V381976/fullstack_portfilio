import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion"; 
import {
  SiGit,
  SiGithub,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

function Skills() {
    
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-lime-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-900" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress  className="text-indigo-950"/> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git & GitHub", icon: <SiGit  className="text-red-900" /> },
 
  ];
   const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
  }
  return (
    <section  id= "skill" className="max-w-6xl mx-auto  px-10 ">
      <h2  className="text-4xl md:text-5xl font-bold text-center mb-10  bg-gradient-to-r from-teal-400
                  to-purple-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
      <motion.div
                variants={cardVariant}
                 initial="hidden"
                 whileInView="show"
                 transition={{ duration: 0.5, delay: index * 0.2 }}
                 
           
              key={index}
            className="
              backdrop-blur-sm 
              bg-blue/100 
              border border-blue/90
              rounded-xl 
              p-6 
              text-center
              shadow-lg
              transition-all
             hover:bg-sky-200
           
              hover:shadow-gray-500
            "
          >
            <div className="text-4xl mb-3 flex justify-center">
              {skill.icon}
            </div>

            <p className="text-sm sm:text-base font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
