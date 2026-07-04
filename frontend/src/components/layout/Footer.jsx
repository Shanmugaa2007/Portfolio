import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { profile } from '../../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} · Built with React, Tailwind, and a lot of coffee.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-accent-cyan transition-colors">
            <FiGithub size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-accent-blue transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-300 hover:text-accent-purple transition-colors">
            <FiMail size={20} />
          </a>
          <Link
            to="/#home"
            aria-label="Back to top"
            className="ml-2 rounded-full border border-white/10 p-2 text-slate-300 hover:border-accent-blue/60 hover:text-white transition-colors"
          >
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
