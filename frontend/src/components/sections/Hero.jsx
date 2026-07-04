import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { profile } from '../../data/portfolioData.js';
import './Hero.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const roles = [
  'Software Engineer',
  'MERN Stack Developer',
  'AI Engineer',
  'Data Analyser',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 55 : 90;
    const pauseTime = typedText === currentRole && !isDeleting ? 1200 : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === currentRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, pauseTime);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="section-eyebrow mb-4">
            {profile.company} · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="gradient-text">{profile.name.split(' ')[0]}</span>
            <br />
            {profile.title.split('|')[0].trim()}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-aurora px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex gap-8 text-sm text-slate-400">
            <div>
              <p className="font-display text-2xl font-semibold text-white">MERN</p>
              <p>Full-Stack</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">AI</p>
              <p>Integrations</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white">Data</p>
              <p>Analytics</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="hero-profile-wrap"
        >
          <div className="hero-profile-card">
            <img
              src={profile.imageUrl || '/profile.png'}
              alt={profile.name}
              className="hero-profile-img"
            />

            <div className="hero-role-box">
              <span className="hero-role-text">
                {typedText}
                <span className="hero-cursor">|</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float sm:block">
        <div className="h-9 w-6 rounded-full border border-white/20 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-accent-cyan" />
        </div>
      </div>
    </section>
  );
}