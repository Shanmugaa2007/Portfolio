# Shanmuganathan S — Portfolio

A two-part project:

- `frontend/` — React + Vite + Tailwind portfolio site (animations via Framer Motion & GSAP, 3D hero via React Three Fiber, glassmorphism skill cards, command palette, AI chatbot UI, contact form).
- `backend/` — Express API with two real endpoints: `/api/chat` (Groq-powered chatbot) and `/api/contact` (emails you via Nodemailer).

## Quick start

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in GROQ_API_KEY and SMTP_* values
npm run dev             # runs on http://localhost:5000
```

- Get a free Groq API key at https://console.groq.com — the free tier is generous and fast, good for a chatbot widget.
- For `SMTP_*`, easiest path is a Gmail address + an [app password](https://myaccount.google.com/apppasswords) (not your normal password). Any SMTP provider (SendGrid, Mailgun, etc.) works too.

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env   # VITE_API_BASE_URL=/api is correct for local dev
npm run dev             # runs on http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:5000` (see `vite.config.js`), so the chatbot and contact form work against your local backend immediately.

## What to customize first

1. **`frontend/src/data/portfolioData.js`** — this is the single source of truth for your projects, experience, education, certifications, and achievements. Everything currently there is a placeholder except your personal info (name, email, GitHub, LinkedIn, etc.), which was filled in from your brief.
2. **`backend/config/portfolioContext.js`** — a lightweight copy of your background used to ground the chatbot's answers. Keep it updated as you add real projects, or point it at the same data file if you later add a shared package.
3. **`frontend/public/resume.pdf`** — add your resume here; the "Download Resume" buttons already link to it.
4. **Deployment** — deploy `frontend/` to Vercel and `backend/` to Render or Railway (both are pre-wired in `techStack` on the site). Set `VITE_API_BASE_URL` on Vercel to your deployed backend URL, and `CLIENT_ORIGIN` on the backend to your deployed frontend URL.

## What's implemented vs. what needs more work

**Fully built:** Hero with 3D scene, About, categorized Skills with icons/tilt/glow, Tech Stack, Experience timeline, Education, filterable Projects, Achievements, Certifications, live GitHub stats/contribution graph, Services, optional Testimonials, a simple Blog list, a real AI chatbot wired to Groq, a real contact form wired to email, dark/light mode, Ctrl+K command palette, custom cursor, particle background, scroll reveals, smooth scrolling (Lenis).

**Scaffolded but intentionally simple, since they need real infrastructure decisions from you:**
- **Multi-language (EN/Tamil):** the toggle exists in the navbar and flips a `language` value in context, but section copy isn't translated yet — add a strings dictionary per language when you're ready.
- **Blog:** currently reads from a plain array. Swap in a Markdown loader (`import.meta.glob` + a Markdown renderer like `react-markdown`) once you have real posts.
- **Admin dashboard / visitor analytics:** not included — these need persistent storage and auth (e.g. MongoDB + JWT), which is a project of its own. The backend folder structure is ready for you to add `models/`, `routes/admin.js`, etc.
- **Contact form storage:** currently just emails you; add a MongoDB model in `backend/models` if you also want submissions saved.

## Folder structure

```
frontend/
  src/
    components/
      layout/       Navbar, Footer, CommandPalette, CursorFollower, ParticleBackground
      sections/      Hero, About, Skills, TechStack, Experience, Education, Projects,
                      Achievements, Certifications, GithubStats, Services, Testimonials, Blog, Contact
      chatbot/       AIChatbot
    context/         ThemeContext (dark/light + language)
    data/            portfolioData.js — edit this first
    hooks/           useScrollReveal
    services/        api.js — talks to the backend
    utils/           icons.jsx — skill name → icon mapping

backend/
  config/            portfolioContext.js — chatbot's knowledge base
  controllers/        chatController.js, contactController.js
  routes/             chatRoutes.js, contactRoutes.js
  middlewares/        errorHandler.js
  server.js
```
