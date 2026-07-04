import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { profile } from '../../data/portfolioData.js';
import { submitContactForm } from '../../services/api.js';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Contact</p>
        <h2 className="section-title">Let's build something</h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card space-y-5 p-7 md:col-span-2"
        >
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-accent-cyan">
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-accent-cyan">
            <FiPhone /> {profile.phone}
          </a>
          <p className="flex items-center gap-3 text-sm text-slate-300">
            <FiMapPin /> {profile.location}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card space-y-4 p-7 md:col-span-3"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs text-slate-400">Name</label>
            <input
              id="name" name="name" required value={form.name} onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-blue"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs text-slate-400">Email</label>
            <input
              id="email" name="email" type="email" required value={form.email} onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-blue"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-slate-400">Message</label>
            <textarea
              id="message" name="message" required rows={4} value={form.message} onChange={handleChange}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-accent-blue"
              placeholder="Tell me about your project…"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-xl bg-aurora px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
          >
            <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-emerald-400">
              <FiCheckCircle /> Message sent — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-rose-400">
              <FiAlertCircle /> {error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
