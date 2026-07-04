import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { profile } from '../../data/portfolioData.js';

// Uses the public github-readme-stats service — no backend or API key needed.
const username = profile.github.split('/').filter(Boolean).pop();

export default function GithubStats() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="github-stats" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10 text-center">
        <p className="section-eyebrow mb-3">GitHub</p>
        <h2 className="section-title">Stats & contributions</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden p-4"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=38e0ff&icon_color=9b5cff&text_color=cbd5e1`}
            alt="GitHub stats"
            loading="lazy"
            className="w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="glass-card overflow-hidden p-4"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=38e0ff&text_color=cbd5e1`}
            alt="Most used languages"
            loading="lazy"
            className="w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card overflow-hidden p-4 md:col-span-2"
        >
          <img
            src={`https://ghchart.rshah.org/4f7cff/${username}`}
            alt="GitHub contribution graph"
            loading="lazy"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
