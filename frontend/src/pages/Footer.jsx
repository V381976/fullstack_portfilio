import React from 'react'
import { FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";   
export default function Footer() {
  return (

<div className="  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300">
  <h3  className="text-x' md:text-2xl font-bold text-center mb-5  bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
    Other Ways to Connect
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
    
    {/* Email */}
    <div className=" backdrop-blur-sm p-6 rounded-xl text-center shadow">
      <FaEnvelope className="text-3xl mx-auto mb-3 text-neutral-500 hover:text-neutral-700" />
      <p className="font-semibold">Email</p>
      <p className="text-sm break-words">
                30dsaini@gmail.com
      </p>
    </div>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/devendra-saini-502042253/"
      target="_blank"
      className="hover:bg-sky-200 backdrop-blur-sm p-6 rounded-xl text-center shadow hover:-translate-y-1 transition"
    >
      <FaLinkedin className="text-3xl mx-auto mb-3 text-neutral-500 hover:text-neutral-700 " />
      <p className="font-semibold">LinkedIn</p>
      <p className="text-sm">View Profile</p>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/yourprofile"
      target="_blank"
      className="hover:bg-sky-200 backdrop-blur-sm p-6 rounded-xl text-center shadow hover:-translate-y-1 transition"
    >
      <FaFacebook className="text-3xl mx-auto mb-3 text-neutral-500 hover:text-neutral-700" />
      <p className="font-semibold">Facebook</p>
      <p className="text-sm">Visit</p>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/yourprofile"
      target="_blank"
      className="hover:bg-sky-200 backdrop-blur-sm p-6 rounded-xl text-center shadow hover:-translate-y-1 transition"
    >
      <FaInstagram className="text-3xl mx-auto mb-3 text-neutral-500 hover:text-neutral-700" />
      <p className="font-semibold">Instagram</p>
      <p className="text-sm">30dsaini </p>
    </a>
      <a
      href="https://github.com/V381976/"
      target="_blank"
      className="hover:bg-sky-200 backdrop-blur-sm p-6 rounded-xl text-center shadow hover:-translate-y-1 transition"
    >
      <FaInstagram className="text-3xl mx-auto mb-3 text-neutral-500 hover:text-neutral-700" />
      <p className="font-semibold">Git&Github</p>
      <p className="text-sm"> Devendra Saini</p>
    </a>
  </div>
</div>

  )
}
