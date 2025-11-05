import React from 'react';
import { User, Cpu, Bot, CircuitBoard } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Bot className="h-5 w-5 text-orange-400" />, label: 'Robotics & Mechatronics' },
    { icon: <Cpu className="h-5 w-5 text-orange-400" />, label: 'Machine Learning & AI' },
    { icon: <CircuitBoard className="h-5 w-5 text-orange-400" />, label: 'Embedded Systems & IoT' },
    { icon: <Cpu className="h-5 w-5 text-orange-400" />, label: 'Signal Processing' },
  ];

  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80">
          <User className="h-4 w-4 text-orange-400" />
          About Me
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Electrical & Electronics Engineering Student</h2>
            <p className="text-white/70">
              I explore the intersection of hardware and intelligence. My work spans robotic systems, AI-driven control, and electronics—from PCB design to embedded firmware. I enjoy turning ideas into working prototypes and sharing what I learn along the way.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {skills.map((s, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/40 ring-1 ring-white/10">
                  {s.icon}
                </div>
                <span className="text-white/80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
