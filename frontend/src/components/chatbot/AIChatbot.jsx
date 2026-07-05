import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { sendChatMessage } from '../../services/api.js';
import { profile } from '../../data/portfolioData.js';

const WELCOME = {
  role: 'assistant',
  content: `Hi! I'm ${profile.name.split(' ')[0]}'s AI assistant. Ask me about his skills, projects, or how to get in touch.`,
};

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  async function handleSend(e) {
    e.preventDefault();

    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const { reply } = await sendChatMessage(
        nextMessages
          .filter((m) => m !== WELCOME)
          .map(({ role, content }) => ({ role, content }))
      );

      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message || 'The assistant is unavailable right now.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-aurora text-white shadow-glow"
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[50] bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'none',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 30 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="glass-card flex h-[80vh] max-h-[42rem] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                style={{
                  position: 'relative',
                  left: 'auto',
                  right: 'auto',
                  top: 'auto',
                  bottom: 'auto',
                  transform: 'none',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-white">AI Assistant</p>
                    <p className="text-xs text-slate-400">
                      Powered by Groq / OpenAI via the backend API
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close chat"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        m.role === 'user'
                          ? 'ml-auto bg-aurora text-white shadow-glow'
                          : 'bg-white/5 text-slate-200'
                      }`}
                    >
                      {m.content}
                    </div>
                  ))}

                  {loading && (
                    <div className="max-w-[60%] rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-400">
                      Thinking…
                    </div>
                  )}

                  {error && <p className="text-xs text-rose-400">{error}</p>}

                  <div ref={bottomRef} />
                </div>

                <form
                  onSubmit={handleSend}
                  className="flex items-center gap-3 border-t border-white/10 p-4"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something…"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-blue"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Send"
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-aurora text-white shadow-glow disabled:opacity-60"
                  >
                    <FiSend size={18} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}