import React from 'react';
import { ExternalLink, Cpu, Bot, CircuitBoard } from 'lucide-react';

const projectData = [
  {
    title: 'Autonomous Line-Following Robot',
    desc: 'PID-controlled line follower with IR sensor array, tuned for smooth cornering and variable speeds.',
    tags: ['Robotics', 'Embedded', 'Control'],
    icon: Bot,
    link: '#',
  },
  {
    title: 'Edge AI Gesture Recognition',
    desc: 'TinyML model deployed on microcontroller to classify hand gestures in real time.',
    tags: ['AI', 'TinyML', 'Signal Processing'],
    icon: Cpu,
    link: '#',
  },
  {
    title: 'Smart Power Monitoring Board',
    desc: 'Custom PCB with current sensing and Wi‑Fi telemetry for energy analytics.',
    tags: ['Electronics', 'PCB', 'IoT'],
    icon: CircuitBoard,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/60">A selection of robotics, AI, and electronics builds.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map(({ title, desc, tags, icon: Icon, link }, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 transition hover:from-white/[0.08] hover:to-white/[0.04]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/40 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={link}
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noreferrer' : undefined}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300"
              >
                View details
                <ExternalLink className="h-4 w-4" />
              </a>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
