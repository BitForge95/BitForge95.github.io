import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-56 text-center">
      <motion.h2
        className="text-6xl font-bold mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let’s Build Something Thoughtful
      </motion.h2>

      <motion.p
        className="text-zinc-400 mb-14 text-xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        I’m interested in opportunities where engineering depth, clean design,
        and long-term thinking matter. If you’re working on something meaningful,
        I’d be glad to connect.
      </motion.p>

      <motion.a
        href="mailto:guttulacharansai@gmail.com"
        className="px-12 py-4 gradient-stroke rounded-xl text-lg inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
