import { motion } from "framer-motion";

const projects = [
  {
    name: "High-Performance-Neuro-Data-Pipeline",
    image: "/noderoom.png",
    desc:
      "A high-performance, object-oriented data infrastructure prototype designed to align large-scale neuronal recordings with high-dimensional behavioral stimuli."
  },
  {
    name: "Clustify",
    image: "/clustify.png",
    desc:
      "A backend-oriented clustering project exploring modular architecture and performance-aware design."
  },
  {
    name: "CodeX",
    image: "/codex.png",
    desc:
      "A full-stack blogging platform designed with clean content flow and scalable backend architecture."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="space-y-28 md:space-y-36">
        {projects.map((p, index) => (
          <motion.div
            key={p.name}
            className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center"
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight break-words">
                {p.name}
              </h3>
              <p className="mt-5 sm:mt-6 text-zinc-400 max-w-xl leading-relaxed text-base sm:text-[1.05rem]">
                {p.desc}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileInView={{ y: [40, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="surface-card overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
