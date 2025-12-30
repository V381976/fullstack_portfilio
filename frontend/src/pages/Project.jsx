import React from 'react'
 import ProjectCard from '../components/ProjectCard';
 import { motion } from 'framer-motion';
function Project() {
   const projects = [
    {
      title: "Country Info ",
      description: "API based country information .",
      tech: "React, REST API",
      github: "#",
      live: "#",
    },
    {
      title: "Login Authentication ",
      description: "JWT based login system.",
      tech: "React, Node.js",
      github: "#",
      live: "#",
    },
    {
      title: "EV Charging Station ",
      description: "Full stack MERN project.",
      tech: "vuejs, Node, MongoDB",
      github: "#",
      live: "#",
    },
     {
      title: "country Info ",
      description: "API based country information .",
      tech: "React, REST API",
      github: "#",
      live: "#",
    },
  ];
    const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
  }
  return (
     <section id="projects" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="mb-10 text-4xl md:text-5xl font-bold text-center  bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">Projects</h2>

      <motion.div
         variants={cardVariant}
                 initial="hidden"
                 whileInView="show"
                 transition={{ duration: 0.5 }}

       className="grid md:grid-cols-2 gap-6 hover:border-blue-400">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  )
}

export default Project