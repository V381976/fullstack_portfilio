"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech = [],
  features = [],
  github,
  live,
  index = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full rounded-3xl bg-white/50 backdrop-blur-md border border-white/60 p-6 shadow-lg hover:shadow-xl hover:bg-sky-50/70 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <span className="shrink-0 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1">
          Case Study
        </span>
      </div>

      <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>

      {features?.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
          {features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {(Array.isArray(tech) ? tech : String(tech).split(",")).map((item) => (
          <span
            key={item}
            className="rounded-full bg-sky-100 border border-sky-200 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {String(item).trim()}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-800 text-white px-4 py-2 text-sm font-medium hover:bg-slate-700 transition"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-500 transition"
        >
          <FaExternalLinkAlt /> Demo
        </a>
      </div>
    </motion.article>
  );
}
