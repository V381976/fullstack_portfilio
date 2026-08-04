"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Country Info Explorer",
    description:
      "Search and explore country details using public REST APIs with a clean React interface.",
    features: [
      "Live country search and filters",
      "API data fetching and error states",
      "Responsive card-based UI",
    ],
    tech: ["React", "REST API", "JavaScript", "CSS"],
    github: "https://github.com/V381976/",
    live: "#",
  },
  {
    title: "JWT Login Authentication",
    description:
      "Secure authentication flow with protected routes and token-based login sessions.",
    features: [
      "JWT based login/signup",
      "Protected dashboard access",
      "Node.js API integration",
    ],
    tech: ["React", "Node.js", "JWT", "Express"],
    github: "https://github.com/V381976/",
    live: "#",
  },
  {
    title: "EV Charging Station Manager",
    description:
      "Full-stack management system for EV stations with auth, CRUD, and admin workflows.",
    features: [
      "Station create/update/delete",
      "User authentication",
      "MongoDB data persistence",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/V381976/",
    live: "#",
  },
  {
    title: "Portfolio Contact System",
    description:
      "This portfolio’s inquiry system with Neon PostgreSQL storage and SMTP email alerts.",
    features: [
      "Form validation + thank-you UI",
      "Owner + sender email templates",
      "Prisma + Neon database",
    ],
    tech: ["Next.js", "Prisma", "Neon", "Nodemailer"],
    github: "https://github.com/V381976/",
    live: "#contact",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
          Selected work showing frontend polish, backend APIs, auth, and database
          integrations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
