import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { experience } from '../../data/portfolioData.js';

export default function Experience() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <div className="mb-14 text-center">
        <p className="section-eyebrow mb-3">Experience</p>
        <h2 className="section-title">Where I've worked</h2>
      </div>

      <div ref={ref} className="relative border-l border-white/10 pl-8">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-aurora shadow-glow" />
            <div className="glass-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                <span className="font-mono text-xs text-accent-cyan">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent-purple">{exp.org}</p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-slate-300">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
