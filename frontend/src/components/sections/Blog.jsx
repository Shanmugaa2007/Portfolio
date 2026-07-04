import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { blogPosts } from '../../data/portfolioData.js';

export default function Blog() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="blog" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Blog</p>
        <h2 className="section-title">Writing</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          Posts are plain data for now — drop Markdown files in <code>src/content/blog</code> and
          wire up a loader (e.g. <code>import.meta.glob</code>) when you're ready.
        </p>
      </div>

      <div ref={ref} className="space-y-4">
        {blogPosts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={`#blog-${post.slug}`}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card group flex items-center justify-between p-6"
          >
            <div>
              <p className="font-mono text-xs text-accent-cyan">{post.date}</p>
              <h3 className="mt-1 font-display font-semibold text-white">{post.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{post.excerpt}</p>
            </div>
            <FiArrowUpRight className="flex-none text-lg text-slate-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-purple" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
