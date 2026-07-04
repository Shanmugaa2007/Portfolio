import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { education } from '../../data/portfolioData.js';

export default function Education() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="education" className="relative mx-auto max-w-4xl px-6 py-28">
      <div className="mb-14 text-center">
        <p className="section-eyebrow mb-3">Education</p>
        <h2 className="section-title">Academic background</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card flex gap-4 p-6"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-aurora text-white shadow-glow">
              <FiBookOpen />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white">{ed.degree}</h3>
              <p className="text-sm text-accent-cyan">{ed.institution}</p>
              <p className="mt-1 text-xs font-mono text-slate-500">{ed.period}</p>
              <p className="mt-2 text-sm text-slate-300">{ed.notes}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
