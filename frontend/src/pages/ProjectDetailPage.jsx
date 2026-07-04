import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft, FiImage } from 'react-icons/fi';
import { projects } from '../data/portfolioData.js';
import { getIcon } from '../utils/icons.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Block({ title, items, accent = 'text-accent-cyan' }) {
  if (!items || items.length === 0) return null;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card p-6 sm:p-8"
    >
      <h2 className={`mb-4 font-display text-xl font-semibold text-white`}>
        <span className={accent}>#</span> {title}
      </h2>
      <ul className="space-y-2.5 text-sm text-slate-300">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-aurora" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <article className="px-6 pb-28 pt-32">
      {/* Hero banner */}
      <header className="relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-3xl border border-white/10">
        <div className="absolute inset-0 bg-aurora opacity-20 animate-gradient bg-[length:200%_200%]" />
        <div className="relative bg-base-900/60 px-6 py-16 text-center backdrop-blur-sm sm:px-12">
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-accent-cyan"
          >
            <FiArrowLeft /> Back to projects
          </Link>
          <p className="section-eyebrow mb-3">{project.category}</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-white sm:text-5xl"
          >
            {project.title}
          </motion.h1>
          {project.tagline && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              {project.tagline}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
              >
                <FiGithub /> View Code
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-aurora px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Tech stack sidebar */}
        <motion.aside
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card h-fit p-6 lg:col-span-1"
        >
          <h2 className="mb-4 font-display text-lg font-semibold text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => {
              const Icon = getIcon(tech);
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                >
                  <Icon className="text-accent-cyan" /> {tech}
                </span>
              );
            })}
          </div>

          <h2 className="mb-3 mt-8 font-display text-lg font-semibold text-white">Screenshots</h2>
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {project.screenshots.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} className="rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 text-slate-500">
              <FiImage size={22} />
              <span className="text-xs">Add screenshots to <code>project.screenshots</code></span>
            </div>
          )}
        </motion.aside>

        {/* Main content */}
        <div className="space-y-6 lg:col-span-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Overview</h2>
            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
          </motion.div>

          <Block title="Architecture" items={project.architecture} accent="text-accent-blue" />
          <Block title="Features" items={project.features} accent="text-accent-cyan" />
          <Block title="Challenges" items={project.challenges} accent="text-accent-purple" />
          <Block title="Learnings" items={project.learnings} accent="text-accent-cyan" />
        </div>
      </div>
    </article>
  );
}
