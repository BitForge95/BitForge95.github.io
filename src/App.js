import { motion, useScroll } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}
