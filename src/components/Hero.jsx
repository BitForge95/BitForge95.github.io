export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center relative section-shell !pt-16 sm:!pt-20">
      <div className="noise" />

      <div className="w-full">
        <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-cyan-400/90">
          Computer Science Sophomore · IIITDM Jabalpur
        </p>

        <h1 className="mt-6 sm:mt-7 text-[clamp(2.4rem,10vw,6.2rem)] font-extrabold leading-[0.95] tracking-tight">
          Guttula<br />Charan Sai
        </h1>

        <p className="mt-7 text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed">
          Student developer focused on backend systems, scalable web applications,
          and open-source engineering in neuroinformatics.
        </p>

        <p className="mt-4 text-zinc-400 max-w-2xl leading-relaxed">
          I build practical products while growing strong fundamentals in computer science,
          systems design, and maintainable software architecture.
        </p>

        <div className="mt-10 sm:mt-12 flex gap-3 sm:gap-4 md:gap-6 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            View Resume
          </a>

          <a
            href="https://github.com/BitForge95"
            className="btn-outline !normal-case !tracking-normal w-full sm:w-auto sm:!px-8 sm:!py-4 sm:!text-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/charansai-guttula-764547324/"
            className="btn-outline !normal-case !tracking-normal w-full sm:w-auto sm:!px-8 sm:!py-4 sm:!text-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
