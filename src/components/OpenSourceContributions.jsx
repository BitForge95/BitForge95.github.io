import { motion } from "framer-motion";

const contributions = [
   {
    project: "bids-validator (INCF)",
    role: "Core Contributor",
    duration: "Dec 2025 - Present",
    summary:
      "Developed recursive validation logic for derivative datasets and authored OSC-8 compliant Markdown rendering improvements for terminal outputs.",
    links: [
      { label: "Project", href: "https://github.com/bids-standard/bids-validator" },
      { label: "View PRs", href: "https://github.com/bids-standard/bids-validator/issues?q=is%3Apr%20author%3ABitForge95" }
    ]
  }, 
  {
    project: "experanto (INCF)",
    role: "Contributor",
    duration: "Mar 2026 - Present",
    summary:
      "Engineered PyTest suites with MagicMock to isolate Experiment class data routing, and collaborated with maintainers to improve data generation pipelines.",
    links: [
      { label: "Project", href: "https://github.com/sensorium-competition/experanto" },
      { label: "View PRs", href: "https://github.com/sensorium-competition/experanto/issues?q=is%3Apr%20author%3ABitForge95" }
    ]
  },
  {
    project: "phys2bids",
    role: "Officially Recognized Contributor",
    duration: "Mar 2026",
    summary:
      "Improved CLI documentation and usability for the pad option, helping researchers format physiological data for neuroimaging workflows.",
    links: [
      { label: "Project", href: "https://github.com/physiopy/phys2bids" },
      { label: "View PRs", href: "https://github.com/physiopy/phys2bids/issues?q=is%3Apr+author%3ABitForge95" }
    ]
  }
];

export default function OpenSourceContributions() {
  return (
    <section className="py-48">
      <motion.h2
        className="text-5xl font-bold mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Open Source
      </motion.h2>

      <div className="space-y-12">
        {contributions.map((item) => (
          <motion.article
            key={item.project}
            className="gradient-stroke rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-3xl font-semibold">{item.project}</h3>
                <p className="mt-2 text-zinc-300">{item.role}</p>
              </div>
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                {item.duration}
              </p>
            </div>

            <p className="mt-6 text-zinc-400 max-w-4xl leading-relaxed">
              {item.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-zinc-700 rounded-xl text-sm uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
