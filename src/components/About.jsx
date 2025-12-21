import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-48 max-w-4xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold mb-14">About</h2>

      <p className="text-3xl leading-relaxed text-zinc-300">
        I’m a Computer Science undergraduate at IIITDM Jabalpur
        who enjoys building software by understanding systems deeply —
        not just assembling frameworks.
      </p>

      <p className="mt-10 text-zinc-400 max-w-3xl">
        My interests span full stack development, backend architecture,
        and low-level systems, with a focus on correctness,
        scalability, and long-term maintainability.
      </p>
    </motion.section>
  );
}
