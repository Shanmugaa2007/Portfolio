import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './Blog.css';

const blogPosts = [
  {
    slug: 'building-modern-mern-apps',
    category: 'MERN Stack',
    title: 'Building Modern MERN Stack Applications',
    excerpt:
      'How I build full-stack web apps using MongoDB, Express.js, React, and Node.js with clean structure and scalable logic.',
    content:
      'As a MERN Stack Developer, I focus on building clean, scalable, and user-friendly applications. My workflow starts with planning the database structure in MongoDB, creating secure APIs with Express.js and Node.js, and building responsive frontend interfaces using React. I also focus on reusable components, proper folder structure, authentication, API integration, and performance optimization.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    slug: 'ai-powered-web-solutions',
    category: 'AI Engineer',
    title: 'AI-Powered Web Solutions',
    excerpt:
      'Exploring how AI can be integrated into web applications for chatbots, automation, smart search, and user-friendly experiences.',
    content:
      'As an AI Engineer, I like integrating intelligent features into modern applications. AI can improve user experience through chatbots, recommendation systems, automation tools, smart search, and content generation. My goal is to combine web development and AI to create useful digital products that solve real-world problems.',
    tags: ['AI', 'Automation', 'Chatbot', 'API'],
  },
  {
    slug: 'devops-deployment-workflow',
    category: 'DevOps Engineer',
    title: 'My DevOps & Deployment Workflow',
    excerpt:
      'A simple look at how I deploy applications, manage hosting, handle GitHub workflows, and keep projects production-ready.',
    content:
      'As a DevOps Engineer, I focus on making applications reliable and production-ready. I use GitHub for version control, deployment platforms like Vercel or Render, environment variables for security, and proper build workflows. DevOps helps me deliver projects faster, maintain uptime, and improve the development process.',
    tags: ['GitHub', 'Vercel', 'Render', 'Deployment'],
  },
  {
    slug: 'data-analytics-insights',
    category: 'Data Analyst',
    title: 'Turning Data into Useful Insights',
    excerpt:
      'How I use data analysis to understand trends, create reports, and make better decisions through visual insights.',
    content:
      'As a Data Analyst, I work with data to find patterns, trends, and useful insights. Data analytics helps businesses understand performance, customer behavior, and growth opportunities. I focus on cleaning data, visualizing results, and presenting insights in a simple and understandable way.',
    tags: ['Data', 'Analytics', 'Reports', 'Insights'],
  },
  {
    slug: 'founding-zenvy-technologies',
    category: 'Founder Journey',
    title: 'Founder of Zenvy Technologies',
    excerpt:
      'My journey of building Zenvy Technologies — a vision focused on modern software, AI solutions, and digital innovation.',
    content:
      'As the founder of Zenvy Technologies, my vision is to build modern digital solutions using software engineering, AI, cloud, and data. Zenvy Technologies focuses on creating useful products, helping businesses go digital, and delivering clean technology solutions with innovation and quality.',
    tags: ['Zenvy Technologies', 'Founder', 'Startup', 'Innovation'],
  },
];

export default function Blog() {
  const [ref, visible] = useScrollReveal();
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mb-3">Blog</p>
        <h2 className="section-title">Ideas, Builds & Insights</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          I write about MERN stack development, AI engineering, DevOps workflows,
          data analytics, and my journey as the founder of Zenvy Technologies.
        </p>
      </div>

      <div ref={ref} className="space-y-4">
        {blogPosts.map((post, i) => (
          <motion.button
            type="button"
            key={post.slug}
            onClick={() => setSelectedPost(post)}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card group flex w-full items-center justify-between gap-6 p-6 text-left"
          >
            <div>
              <p className="font-mono text-xs text-accent-cyan">{post.category}</p>
              <h3 className="mt-1 font-display font-semibold text-white">{post.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{post.excerpt}</p>
            </div>

            <FiArrowUpRight className="flex-none text-lg text-slate-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-purple" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="blog-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="blog-modal-close"
                onClick={() => setSelectedPost(null)}
                aria-label="Close blog popup"
              >
                <FiX />
              </button>

              <p className="font-mono text-xs text-accent-cyan">{selectedPost.category}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {selectedPost.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {selectedPost.content}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}