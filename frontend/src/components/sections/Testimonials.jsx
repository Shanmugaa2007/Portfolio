import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { testimonials } from '../../data/portfolioData.js';

export default function Testimonials() {
  const [ref, visible] = useScrollReveal();

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Testimonials</p>
        <h2 className="section-title">Kind words</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <FiMessageSquare className="mb-3 text-accent-cyan" />
            <p className="text-sm italic text-slate-300">"{t.quote}"</p>
            <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
