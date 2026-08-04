import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
