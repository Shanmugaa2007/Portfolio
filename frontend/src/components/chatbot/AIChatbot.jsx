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
      // Backend forwards this history to Groq/OpenAI — see backend/controllers/chatController.js
      const { reply } = await sendChatMessage(
        nextMessages.filter((m) => m !== WELCOME).map(({ role, content }) => ({ role, content }))
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
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-aurora text-white shadow-glow"
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-card fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden"
          >
            <div className="border-b border-white/10 px-4 py-3">
              <p className="font-display text-sm font-semibold text-white">AI Assistant</p>
              <p className="text-[11px] text-slate-400">Powered by Groq / OpenAI via the backend API</p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-3.5 py-2 text-sm ${
                    m.role === 'user'
                      ? 'ml-auto bg-aurora text-white'
                      : 'bg-white/5 text-slate-200'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="max-w-[60%] rounded-xl bg-white/5 px-3.5 py-2 text-sm text-slate-400">
                  Thinking…
                </div>
              )}
              {error && (
                <p className="text-xs text-rose-400">{error}</p>
              )}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-accent-blue"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Send"
                className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-aurora text-white disabled:opacity-60"
              >
                <FiSend size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
