import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { achievements } from '../../data/portfolioData.js';

export default function Achievements() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="achievements" className="relative mx-auto max-w-4xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Achievements</p>
        <h2 className="section-title">Milestones</h2>
      </div>

      <div ref={ref} className="space-y-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card flex items-center gap-4 p-5"
          >
            <FiAward className="flex-none text-xl text-accent-purple" />
            <p className="text-sm text-slate-300">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
