// Talks to the Express backend in /backend. Set VITE_API_BASE_URL in your .env
// (defaults to /api, which the Vite dev server proxies to http://localhost:5000).

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const isJson = res.headers.get('content-type')?.includes('application/json');
  const body = isJson ? await res.json() : null;

  if (!res.ok) {
    const message = body?.message || `Request failed with status ${res.status}`;
    throw new Error(message);
  }
  return body;
}

/**
 * Sends the running chat history to the backend, which forwards it to
 * Groq/OpenAI and returns the assistant's reply. See backend/controllers/chatController.js.
 * @param {{role: 'user'|'assistant', content: string}[]} messages
 */
export function sendChatMessage(messages) {
  return request('/chat', {
    method: 'POST',
    body: JSON.stringify({ messages }),
  });
}

/**
 * Submits the contact form. The backend validates, stores (optional), and
 * emails the notification. See backend/controllers/contactController.js.
 */
export function submitContactForm(payload) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
