// Central content file — edit this to update the site without touching components.

export const profile = {
  name: 'Shanmuganathan S',
  title: 'Software Engineer | MERN Stack • AI • Data Analytics',
  tagline:
    'Building intelligent web applications by combining full-stack development, machine learning, and data-driven insights.',
  location: 'Pudukkottai, Tamil Nadu, India',
  email: 'shan.officialtech@gmail.com',
  phone: '+91 6369007712',
  github: 'https://github.com/Shanmugaa2007',
  linkedin: 'https://www.linkedin.com/in/shanmuganathan23/',
  company: 'Zenvy Technologies',
  website: 'https://zenvytechnologies.vercel.app',
  imageUrl:'https://res.cloudinary.com/dbl5b8y7r/image/upload/v1783174565/CTO_jn3at9.jpg',
  resumeUrl: '/resume.pdf',
};

export const about = [
  "Hi, I'm Shanmuganathan, a passionate Software Engineer and Founder of Zenvy Technologies.",
  'I specialize in building scalable web applications using the MERN Stack while integrating Artificial Intelligence and Data Analytics to solve real-world problems.',
  'My mission is to transform innovative ideas into intelligent software that improves productivity and user experience.',
  'As the founder of Zenvy Technologies, I aim to build globally recognized SaaS products powered by AI.',
  'I enjoy solving complex engineering challenges, designing scalable architectures, writing clean, maintainable code, and continuously learning new technologies.',
  'My long-term vision is to establish Zenvy Technologies as a global technology company creating innovative AI-driven software solutions.',
];

// icon keys map to react-icons components in src/utils/icons.jsx
export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['C', 'C++', 'Java','Python', 'JavaScript', 'Node Js', 'HTML', 'CSS', 'React Native', 'Rust', 'R'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'Three.js', 'React Three Fiber'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    id: 'database',
    title: 'Database',
    skills: ['MongoDB', 'Mongoose', 'SQL', 'Oracle SQL'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    skills: ['OpenAI API', 'Claude', 'Groq API'],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    skills: ['Power BI', 'Excel', 'Data Cleaning', 'Data Visualization'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Android Studio', 'Canva'],
  },
];

export const techStack = {
  Frontend: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js', 'React Three Fiber', 'Drei', 'Lenis', 'React Icons', 'Shadcn UI'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB', 'Mongoose'],
  Authentication: ['JWT '],
  AI: ['OpenAI API', 'Claude API', 'Groq API'],
  Deployment: ['Vercel (Frontend)', 'Render (Backend)', 'MongoDB Atlas'],
};

export const experience = [
  {
    role: 'MERN Stack Development Intern',
    org: 'Beetalogic Software Solutions',
    period: '03 Jun 2026 – 03 Jul 2026',
    points: [
      'Worked across the MERN stack on production feature development.',
      'Collaborated with the engineering team on real client deliverables.',
    ],
  },
  {
    role: 'MERN Stack Intern',
    org: 'Codec Technologies',
    period: '15 Dec 2025 – 15 Jan 2026',
    points: [
      'Built and shipped features using MongoDB, Express, React, and Node.js.',
      'Practiced end-to-end feature ownership from API to UI.',
    ],
  },
  {
    role: 'Web Development Intern',
    org: 'Elevate Labs',
    period: '04 Aug 2025 – 20 Sep 2025',
    points: [
      'Developed and maintained responsive web interfaces.',
      'Worked with the team on iterative feature delivery.',
    ],
  },
  {
    role: 'Full Stack Development Intern',
    org: 'Arttifai Tech',
    period: '30 Jun 2025 – 07 Jul 2025',
    points: [
      'Gained hands-on exposure to full-stack development workflows.',
      'Contributed to frontend and backend tasks under mentorship.',
    ],
  },
];

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Annamalai University — Faculty of Engineering and Technology',
    period: 'Expected Graduation 2028',
    notes: 'Current CGPA: 8.0',
  },
];

export const projects = [
  {
    id: 'zenvy-lance',
    title: 'Zenvy Lance',
    tagline: 'AI-Powered Freelance Marketplace SaaS',
    description:
      'AI-powered freelance marketplace SaaS with an AI proposal generator, AI-driven freelancer recommendations, AI-based verification, a backend trust algorithm, an AI trust score, and escrow payments.',
    stack: ['MERN Stack', 'Groq AI', 'JWT', 'MongoDB'],
    category: 'AI',
    github: 'https://github.com/Shanmugaa2007/ZenvyLance',
    demo: '#',
    image: null,
    architecture: [
      'React front end talking to an Express/Node REST API, with MongoDB/Mongoose for persistence.',
      'JWT-based authentication protecting client and freelancer routes.',
      'A backend trust algorithm scores freelancers using verification signals and platform history, surfaced to clients as an AI Trust Score.',
      'Groq AI is used server-side for the proposal generator and the recommendation engine, keeping API keys off the client.',
      'Escrow-style payment flow to hold funds until milestones are approved.',
    ],
    features: [
      'AI Proposal Generator — drafts tailored freelancer proposals from a job post',
      'AI Freelancer Recommendation — matches clients with relevant freelancers',
      'AI Verification — automated checks supporting freelancer trust signals',
      'Backend Trust Algorithm powering an AI Trust Score per freelancer',
      'Escrow payments to protect both clients and freelancers',
    ],
    challenges: [
      'Designing a trust-scoring model that combines multiple signals fairly without being easy to game.',
      'Keeping AI-generated proposals genuinely tailored to each job rather than generic boilerplate.',
      'Structuring escrow logic so funds are only released on legitimate milestone approval.',
    ],
    learnings: [
      'How to combine a rules-based trust algorithm with LLM-based verification for more reliable trust signals.',
      'Practical patterns for keeping AI API keys server-side while still delivering fast, streaming-feeling UX.',
      'Designing SaaS-style MERN architecture that can scale from prototype to real transactions.',
    ],
    screenshots: [],
  },
  {
    id: 'zenvy-technologies',
    title: 'Zenvy Technologies',
    tagline: 'Corporate Website',
    description:
      'Corporate website for Zenvy Technologies covering services, products, and company vision, built with a responsive, professional, SEO-optimized UI.',
    stack: ['React.js', 'Tailwind CSS', 'SEO'],
    category: 'Full Stack',
    github: 'https://github.com/Shanmugaa2007/zenvytechnologies',
    demo: 'https://zenvytechnologies.vercel.app/',
    image: null,
    architecture: [
      'A React + Tailwind single-page site, statically deployed on Vercel.',
      'Component-driven layout for Services, Products, and Company Vision sections.',
      'SEO fundamentals — semantic HTML, meta tags, and OpenGraph data — built in from the start.',
    ],
    features: [
      'Responsive design across mobile, tablet, and desktop',
      'Professional, brand-consistent UI for Zenvy Technologies',
      'Dedicated Services and Products sections',
      'Company Vision messaging aimed at clients and partners',
    ],
    challenges: [
      'Translating a new company\'s brand identity into a cohesive visual language with no prior design system.',
      'Balancing marketing-style content with fast load times and clean SEO.',
    ],
    learnings: [
      'How to structure a marketing site so non-technical teammates can update copy without touching layout code.',
      'SEO groundwork (meta tags, OpenGraph, semantic structure) that pays off once the site is public.',
    ],
    screenshots: [],
  },
];

export const achievements = [
  "Led Team Logic Lords as Team Leader in Auristra'26, a 48-hour national-level hackathon hosted by Takshashila University.",
];

export const certifications = [
  { name: 'Generative AI Studio', issuer: 'Google Cloud', year: '1 Jul 2025' },
  { name: 'Advanced C++', issuer: 'Simplilearn', year: '11 Jun 2025' },
  { name: 'Frontend Development', issuer: 'Simplilearn', year: '14 Sep 2025' },
  { name: 'React Live Bootcamp', issuer: 'SkillEcted', year: '21 Sep 2025' },
  { name: 'Full Stack Development', issuer: 'Simplilearn', year: '22 Sep 2025' },
  { name: 'Java', issuer: 'Mind Luster', year: '1 Nov 2025' },
  { name: 'Python', issuer: 'Udemy', year: '' },
];

export const services = [
  { title: 'Full-Stack Web Apps', desc: 'End-to-end MERN applications, from schema design to deployment.' },
  { title: 'AI Integrations', desc: 'Embedding LLM-powered features — chatbots, search, and automation — into products.' },
  { title: 'Data Analytics', desc: 'Turning raw data into dashboards and decisions with Power BI and Python.' },
];

export const testimonials = [
  // Optional — add { name, role, quote } objects here to enable the section.
];

export const blogPosts = [
  {
    slug: 'welcome',
    title: 'Welcome to my blog',
    date: '2026-01-01',
    excerpt: 'Add your first post here — this section reads Markdown files you add later.',
  },
];
