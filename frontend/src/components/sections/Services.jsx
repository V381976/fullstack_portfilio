"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaLayerGroup, FaServer, FaEnvelopeOpenText } from "react-icons/fa";
import { fetchServices } from "@/lib/api";

const fallbackServices = [
  {
    id: "1",
    title: "Website Development",
    description:
      "Custom responsive websites with modern UI, SEO basics, and clean deployment.",
    features: [
      "Landing pages & business sites",
      "Mobile-first responsive design",
      "Fast performance setup",
      "Domain & hosting support",
    ],
    icon: "globe",
  },
  {
    id: "2",
    title: "Full-Stack Web App",
    description:
      "End-to-end apps with auth, APIs, database, and admin-ready workflows.",
    features: [
      "Next.js / React frontend",
      "REST API + JWT auth",
      "PostgreSQL / MongoDB",
      "Email & form systems",
    ],
    icon: "layers",
  },
];

const iconMap = {
  globe: <FaGlobe className="text-sky-700" />,
  layers: <FaLayerGroup className="text-indigo-700" />,
  server: <FaServer className="text-teal-700" />,
  mail: <FaEnvelopeOpenText className="text-purple-700" />,
};

const extras = [
  {
    id: "extra-1",
    title: "API & Backend Setup",
    description: "Secure APIs, validation, Prisma models, and production-ready server logic.",
    features: ["Zod validation", "Prisma schema design", "Error handling", "Env-based config"],
    icon: "server",
  },
  {
    id: "extra-2",
    title: "Contact / Inquiry Systems",
    description: "Forms that save to database and notify you instantly by SMTP email.",
    features: ["Thank-you UI", "Owner alert mail", "Sender confirmation", "Spam-safe flows"],
    icon: "mail",
  },
];

function Services() {
  const [services, setServices] = useState([...fallbackServices, ...extras]);

  useEffect(() => {
    let active = true;
    const removed = ["Frontend UI / Dashboard", "Bug Fix & Feature Add"];

    fetchServices()
      .then((res) => {
        if (active && res?.data?.length) {
          const fromApi = res.data.filter(
            (service) => !removed.includes(service.title)
          );
          setServices([...fromApi, ...extras]);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="services" className="max-w-6xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          Freelance Services
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          From polished websites to complete fullstack systems — built to launch
          and grow.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl border border-white/60 bg-white/45 backdrop-blur-md p-6 shadow-lg hover:bg-sky-50/80 transition"
          >
            <div className="text-3xl">
              {iconMap[service.icon] || iconMap.globe}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              {(service.features || []).map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block mt-5 text-sky-800 font-medium hover:underline"
            >
              Contact me →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
