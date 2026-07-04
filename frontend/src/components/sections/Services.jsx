import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiBarChart2 } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { services } from '../../data/portfolioData.js';

const ICONS = [FiCode, FiCpu, FiBarChart2];

export default function Services() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Services</p>
        <h2 className="section-title">How I can help</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {services.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-aurora text-xl text-white shadow-glow">
                <Icon />
              </div>
              <h3 className="font-display font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
