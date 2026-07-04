import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="section-eyebrow mb-3">404</p>
      <h1 className="section-title mb-4">Page not found</h1>
      <p className="mb-8 max-w-md text-slate-400">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-xl bg-aurora px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </section>
  );
}
