import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { certifications } from '../../data/portfolioData.js';

export default function Certifications() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Certifications</p>
        <h2 className="section-title">Credentials</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass-card p-5"
          >
            <FiCheckCircle className="mb-3 text-lg text-accent-cyan" />
            <h3 className="font-display text-sm font-semibold text-white">{c.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{c.issuer}{c.year ? ` · ${c.year}` : ''}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
