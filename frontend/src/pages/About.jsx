import React from "react";
import {motion} from  "framer-motion"; 
function About() {
  return (
    <>
    
      {/* About Section */}
      <motion.section
       id="about"
      
      initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}

      className="w-full py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h2  className="text-4xl md:text-5xl font-bold text-center mb-10  bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
          </div>

          {/* Content Card */}
          <div
            className=" p-6 sm:p-8 md:p-10 
                       shadow-md hover:shadow-lg transition"
          >
            <p
              className="text-gray-700 
                          text-base sm:text-lg leading-relaxed"
            >
              I am a passionate{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Web Developer
              </span>{" "}
              and a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                BCA graduate (2025)
              </span>{" "}
              with a strong interest in building modern, responsive, and
              user-friendly web applications.
              <br />
              <br />I have hands-on experience with
              <span className="font-medium text-gray-900 dark:text-white">
                {" "}
                HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js,
                Express, and MongoDB
              </span>
              , and I enjoy creating clean UI with scalable backend
              architectures.
              <br />
              <br />I love solving real-world problems and continuously
              improving my skills by working on practical projects such as
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {" "}
                EV Charging Station Management Systems
              </span>
              , where I focus on performance, usability, and real-world
              functionality.
            </p>
          </div>
        </div>
      </motion.section>

     
    </>
  );
}

export default About;
