import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="noise" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ y: -6 }}
      >

        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Computer Science Sophomore · IIITDM Jabalpur
        </p>

        <h1 className="mt-8 text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.95]">
          Guttula<br />Charan Sai
        </h1>

        <p className="mt-10 text-2xl text-zinc-400 max-w-2xl">
          Full Stack Developer with a strong interest in building scalable systems,
          backend architecture, and modern web applications.
        </p>


        <div className="mt-14 flex gap-8 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 gradient-stroke rounded-xl text-lg"
          >
            View Resume
          </a>

          <a
            href="https://github.com/BitForge95"
            className="px-8 py-4 border border-zinc-700 rounded-xl text-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/charansai-guttula-764547324/"
            className="px-8 py-4 border border-zinc-700 rounded-xl text-lg"
          >
            LinkedIn
          </a>
        </div>

      </motion.div>
    </section>
  );
}
