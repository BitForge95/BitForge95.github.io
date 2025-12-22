import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLinux,
  SiGit,
  SiGithub
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";

const stack = [
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Linux", icon: SiLinux },
  { name: "QEMU", icon: FaMicrochip },
  { name: "Assembly", icon: FaMicrochip },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub }
];

function StackRow({ reverse = false, size = "text-3xl", speed = 30 }) {
  return (
    <motion.div
      className={`flex gap-20 whitespace-nowrap ${size}`}
      initial={{ x: reverse ? "-50%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-50%" }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "linear"
      }}
    >
      {[...stack, ...stack].map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="flex items-center gap-4 opacity-70 hover:opacity-100 transition"
          >
            <Icon className="text-cyan-400" />
            <span className="font-medium">{item.name}</span>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="py-48 overflow-hidden">
      <motion.h2
        className="text-5xl font-bold mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <StackRow size="text-4xl" speed={35} />

      <div className="mt-16">
        <StackRow reverse size="text-2xl text-zinc-400" speed={45} />
      </div>

      <p className="mt-20 text-sm uppercase tracking-widest text-zinc-500">
        Languages · Frameworks · Tooling · Systems
      </p>
    </section>
  );
}
