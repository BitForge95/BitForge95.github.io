import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiRust,
  SiMysql,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiTailwindcss,
  SiOpenapiinitiative,
  SiFramer,
  SiGooglechrome,
  SiAuth0,
  SiNumpy,
  SiPandas,
  SiScipy,
  SiScikitlearn,
  SiPytest,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { FaBrain, FaJava } from "react-icons/fa";

const rowOne = [
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Rust", icon: SiRust },
  { name: "SQL", icon: SiMysql },
  { name: "Bash", icon: SiGnubash },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 }
];

const rowTwo = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Django", icon: SiDjango },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "REST APIs", icon: SiOpenapiinitiative },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Chrome Extension API", icon: SiGooglechrome },
  { name: "OAuth 2.0", icon: SiAuth0 }
];

const rowThree = [
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "SciPy", icon: SiScipy },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Nilearn", icon: FaBrain },
  { name: "PyTest", icon: SiPytest },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel }
];

function SkillMarquee({ skills, reverse = false, durationClass = "marquee-speed-md" }) {
  return (
    <div className="marquee-shell">
      <div className={`marquee-track ${durationClass} ${reverse ? "marquee-reverse" : ""}`}>
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;

          return (
            <span
              key={`${skill.name}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm sm:text-base"
            >
              <Icon className="text-cyan-400 text-base sm:text-lg" />
              <span>{skill.name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell overflow-hidden">
      <h2 className="section-title">Skills</h2>

      <div className="space-y-4 sm:space-y-5">
        <SkillMarquee skills={rowOne} durationClass="marquee-speed-sm" />
        <SkillMarquee skills={rowTwo} reverse durationClass="marquee-speed-md" />
        <SkillMarquee skills={rowThree} durationClass="marquee-speed-lg" />
      </div>

      <p className="mt-10 text-sm text-zinc-500 max-w-2xl leading-relaxed">
        Core skills across systems, full-stack development, and data tooling, with practical
        project experience and an emphasis on performance and maintainable design.
      </p>
    </section>
  );
}
