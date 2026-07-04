import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const COMMANDS = [
  { label: 'Go to About', href: '/#about' },
  { label: 'Go to Skills', href: '/#skills' },
  { label: 'Go to Projects', href: '/#projects' },
  { label: 'Go to Experience', href: '/#experience' },
  { label: 'Go to Certifications', href: '/#certifications' },
  { label: 'Go to Blog', href: '/#blog' },
  { label: 'Go to Contact', href: '/#contact' },
  { label: 'Open GitHub', href: 'https://github.com/Shanmugaa2007' },
  { label: 'Open LinkedIn', href: 'https://www.linkedin.com/in/shanmuganathan23/' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    function onCustomOpen() { setOpen(true); }

    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onCustomOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onCustomOpen);
    };
  }, []);

  const filtered = COMMANDS.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm pt-32"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-lg overflow-hidden rounded-2xl"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search…"
              className="w-full bg-transparent px-5 py-4 text-white placeholder:text-slate-500 outline-none border-b border-white/10"
            />
            <ul className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-5 py-3 text-sm text-slate-500">No matches.</li>
              )}
              {filtered.map((c) => (
                <li key={c.label}>
                  {c.href.startsWith('/') ? (
                    <Link
                      to={c.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-5 py-2.5 text-sm text-slate-200 hover:bg-white/5 hover:text-accent-cyan transition-colors"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center px-5 py-2.5 text-sm text-slate-200 hover:bg-white/5 hover:text-accent-cyan transition-colors"
                    >
                      {c.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
