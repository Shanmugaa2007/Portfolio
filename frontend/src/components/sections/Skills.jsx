import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { skillCategories } from '../../data/portfolioData.js';
import { getIcon } from '../../utils/icons.jsx';

function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }
  function handleLeave() {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`glass-card transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

function CategoryCard({ category, index }) {
  const [ref, visible] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
    >
      <TiltCard className="h-full p-6">
        <h3 className="mb-5 font-display text-lg font-semibold text-white">
          {category.title}
        </h3>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {category.skills.map((skill) => {
            const Icon = getIcon(skill);
            return (
              <div
                key={skill}
                className="group flex flex-col items-center gap-2 rounded-xl p-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-200 shadow-sm transition-all duration-300 group-hover:border-accent-cyan/50 group-hover:shadow-glow group-hover:text-accent-cyan">
                  <Icon />
                </div>
                <span className="text-center text-[11px] leading-tight text-slate-400 group-hover:text-slate-200">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Skills() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <div ref={headRef} className="mb-14 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headVisible ? { opacity: 1 } : {}}
          className="section-eyebrow mb-3"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          What I work with
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.id} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
