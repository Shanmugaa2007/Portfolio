import Groq from 'groq-sdk';
import { profile, about, skillCategories, experience, education, achievements, projects } from '../config/portfolioContext.js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are the portfolio assistant for ${profile.name}, a ${profile.title}.
Answer questions about his background, skills, and projects using the context below.
Be concise, friendly, and factual — if you don't know something, say so and suggest
contacting him directly at ${profile.email}. Do not invent details that aren't provided.

About: ${about.join(' ')}

Skills: ${skillCategories.map((c) => `${c.title}: ${c.skills.join(', ')}`).join(' | ')}

Experience: ${experience.map((e) => `${e.role} at ${e.org} (${e.period})`).join(' | ')}

Education: ${education.map((e) => `${e.degree}, ${e.institution} — ${e.period}. ${e.notes}`).join(' | ')}

Achievements: ${achievements.join(' | ')}

Projects: ${projects.map((p) => `${p.title} — ${p.description}`).join(' | ')}
`;

export async function chatHandler(req, res, next) {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      const error = new Error('messages must be a non-empty array of {role, content}.');
      error.status = 400;
      throw error;
    }

    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'llama-3.1-8b-instant',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.6,
      max_tokens: 400,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      const error = new Error('The model returned an empty response.');
      error.status = 502;
      throw error;
    }

    res.json({ reply });
  } catch (err) {
    next(err);
  }
}
