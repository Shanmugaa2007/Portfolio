import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { techStack } from '../../data/portfolioData.js';
import { getIcon } from '../../utils/icons.jsx';

export default function TechStack() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="tech-stack" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Tech Stack</p>
        <h2 className="section-title">How it's built</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(techStack).map(([layer, tools], i) => (
          <motion.div
            key={layer}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-card p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-purple">
              {layer}
            </h3>
            <ul className="space-y-2.5">
              {tools.map((tool) => {
                const Icon = getIcon(tool);
                return (
                  <li key={tool} className="flex items-center gap-3 text-sm text-slate-300">
                    <Icon className="text-accent-cyan" /> {tool}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
