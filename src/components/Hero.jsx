import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/lUfiWve0vh3E-uKW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.18)_0%,rgba(0,0,0,0.65)_55%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          <Rocket className="h-4 w-4 text-purple-400" />
          Electrical & Electronics • Robotics • AI • Embedded
        </span>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Playful robotics meets intelligent systems
          <span className="block text-2xl font-normal text-white/70 md:text-3xl">
            Building futuristic experiences with AI and electronics.
          </span>
        </h1>

        <p className="max-w-2xl text-white/70">
          I’m an Electrical & Electronics Engineering student passionate about robotics, machine learning, and embedded systems. Explore my projects and get in touch to collaborate.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 rounded-md bg-purple-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-purple-400"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
