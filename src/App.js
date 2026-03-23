import { lazy, Suspense } from "react";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const OpenSourceContributions = lazy(() => import("./components/OpenSourceContributions"));
const Contact = lazy(() => import("./components/Contact"));

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07080d]/70 border-b border-zinc-800/70">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="text-sm sm:text-base font-semibold tracking-tight">
            Charan Sai
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-zinc-100 transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !text-[11px] sm:!text-xs"
          >
            Resume
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <Skills />
          <OpenSourceContributions />
          <Projects />
          <About />
          <Contact />
        </Suspense>
      </div>
    </>
  );
}
