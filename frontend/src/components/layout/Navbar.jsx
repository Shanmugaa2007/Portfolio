import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGlobe, FiCommand, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext.jsx';
import { profile } from '../../data/portfolioData.js';

const LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? 'glass-card py-2' : 'py-1'
        }`}
      >
        <Link to="/#home" className="font-display text-lg font-semibold text-white">
          Shan<span className="gradient-text">.dev</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Open command palette"
            onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
            className="hidden sm:flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-slate-300 hover:border-accent-blue/60 hover:text-white transition-colors"
          >
            <FiCommand /> K
          </button>
          <button
            aria-label="Toggle language"
            onClick={toggleLanguage}
            className="rounded-lg border border-white/10 p-2 text-slate-300 hover:border-accent-cyan/60 hover:text-white transition-colors"
          >
            <FiGlobe />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-lg border border-white/10 p-2 text-slate-300 hover:border-accent-purple/60 hover:text-white transition-colors"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-aurora px-3 py-1.5 text-xs font-medium text-white shadow-glow"
          >
            <FiDownload /> Resume
          </a>
          <button
            className="md:hidden rounded-lg border border-white/10 p-2 text-slate-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass-card mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </motion.nav>
      )}
      <span className="sr-only">{language}</span>
    </motion.header>
  );
}
