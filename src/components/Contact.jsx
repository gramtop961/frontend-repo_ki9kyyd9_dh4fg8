import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          I’m open to internships, research collaborations, and project opportunities in robotics, AI, and electronics.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:youremail@example.com"
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/40 ring-1 ring-white/10">
                <Mail className="h-5 w-5 text-orange-400" />
              </span>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-white/70">youremail@example.com</div>
              </div>
            </div>
            <span className="text-sm text-white/60">Say hello →</span>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/40 ring-1 ring-white/10">
                <Github className="h-5 w-5 text-orange-400" />
              </span>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-xs text-white/60">Explore code</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/40 ring-1 ring-white/10">
                <Linkedin className="h-5 w-5 text-orange-400" />
              </span>
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-xs text-white/60">Connect professionally</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
