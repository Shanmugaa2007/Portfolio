import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { projects } from '../../data/portfolioData.js';

export default function Projects() {
  const [ref, visible] = useScrollReveal();
  const [filter, setFilter] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  );
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-10 text-center">
        <p className="section-eyebrow mb-3">Projects</p>
        <h2 className="section-title">Things I've built</h2>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
              filter === cat
                ? 'border-transparent bg-aurora text-white shadow-glow'
                : 'border-white/10 text-slate-400 hover:border-accent-cyan/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card group flex flex-col overflow-hidden p-6"
            >
              <span className="mb-3 w-fit rounded-full border border-accent-cyan/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-accent-cyan">
                {p.category}
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                <Link to={`/projects/${p.id}`} className="hover:text-accent-cyan">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-sm">
                <Link
                  to={`/projects/${p.id}`}
                  className="flex items-center gap-1.5 font-medium text-accent-cyan hover:underline"
                >
                  Details <FiArrowUpRight />
                </Link>
                {p.github && p.github !== '#' && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-300 hover:text-white">
                    <FiGithub /> Code
                  </a>
                )}
                {p.demo && p.demo !== '#' && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-300 hover:text-white">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
