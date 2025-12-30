import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"; 

function Home() {
  const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
  }
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section id="home" 
     variants={cardVariant}
                 initial="hidden"
                 whileInView="show"
                 transition={{ duration: 0.5 }}

    className="w-full py-20 flex items-center ">
      <div className="max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
         initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}>
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl 
                         font-mono text-gray-700 leading-tight"
          >
            <span className=" bg-gradient-to-r from-teal-600 to-purple-800 bg-clip-text text-transparent animate-pulse">
              {" "}
              Hi, I’m Devendra
            </span>
          </h1>

          {/* Dynamic Text */}
          <h2
            className="mt-7 text-base sm:text-2xl md:text-3xl 
                         font-sans  text-sky-700"
          >
            <Typewriter
              options={{
                strings: ["Full-Stack Developer", "React Developer"],
                autoStart: true,
                loop: true,
                cursor: "..",
              }}
            />
          </h2>

          <p
            className=" mt-7 text-sm  font-inter sm:text-base  md:text-sm  lg:text-sm text-gray-600 max-w-xl leading-relaxed"
          >
            I build modern, scalable web applications using React, Tailwind CSS,
            Node.js, and MongoDB, focusing on clean design, performance, and
            real-world problem solving.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-200 text-slate-500 px-8 py-4 rounded-md 
                         text-1xl hover:bg-blue-300 transition shadow-lg "
            >
              View Projects
            </a>

          
            <a

              href="file\_DEVENDRA_SAINI_Resume.pdf"  
              download
              className="bg-blue-200 text-slate-500 px-8 py-4 rounded-md 
                         text-1xl hover:bg-blue-300 transition shadow-lg  items-center "
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
     <motion.div
 
  className="flex justify-center md:justify-end relative"
>
  <div
    className="relative w-56 h-56 sm:w-64 sm:h-64 
               md:w-80 md:h-80 lg:w-96 lg:h-96 
               rounded-full flex items-center justify-center"
  >
    {/* Glow Ring */}
    <motion.div
      className="absolute inset-0 rounded-full 
                 bg-gradient-to-r from-blue-500 to-purple-600 
                 blur-2xl opacity-40"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* Image */}
    <motion.img
      src="images/web_developer.png"
      alt="Web Developer Illustration"
      className="relative rounded-full w-full h-full object-cover 
                 border-4 border-cyan-400 shadow-xl"
      whileHover={{ scale: 1.08, rotate: 2 }}
      transition={{ type: "spring", stiffness: 180 }}
    />
  </div>
</motion.div>

      </div>
    </motion.section>
  );
}

export default Home;
