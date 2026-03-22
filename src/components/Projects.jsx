import { motion } from "framer-motion";

const projects = [
  {
    name: "High-Performance-Neuro-Data-Pipeline",
    image: "/noderoom.png", // Using the same image for now
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
    <section className="py-48">
      <motion.h2
        className="text-5xl font-bold mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="space-y-48">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="grid md:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div>
              <h3 className="mt-6 text-4xl font-semibold">
                {p.name}
              </h3>
              <p className="mt-8 text-zinc-400 max-w-xl">
                {p.desc}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileInView={{ y: [40, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="gradient-stroke rounded-2xl overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
