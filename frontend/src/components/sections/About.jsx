import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { about, profile } from '../../data/portfolioData.js';

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div ref={ref} className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="section-eyebrow mb-3">About</p>
          <h2 className="section-title">Who I am</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {['MERN Stack', 'AI Integration', 'Data Analytics', 'Founder'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card md:col-span-3 p-8"
        >
          {about.map((p, i) => (
            <p key={i} className="mb-4 text-slate-300 last:mb-0">
              {p}
            </p>
          ))}
          <a
            href={profile.website}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-accent-cyan hover:underline"
          >
            {profile.company} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
