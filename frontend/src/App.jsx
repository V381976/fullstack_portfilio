import React from 'react'
 import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Projects from "./pages/project";
import Footer from './pages/Footer';
import Skills from './pages/Skills';

function App() {
  return (
    < div className=" min-h-screen w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"> 
  <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer />
  </div>
  )
}

export default App



