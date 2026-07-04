import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import CommandPalette from '../components/layout/CommandPalette.jsx';
import CursorFollower from '../components/layout/CursorFollower.jsx';
import ParticleBackground from '../components/layout/ParticleBackground.jsx';
import ScrollToTop from '../components/layout/ScrollToTop.jsx';
import AIChatbot from '../components/chatbot/AIChatbot.jsx';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <ParticleBackground />
      <CursorFollower />
      <Navbar />
      <CommandPalette />

      <main>
        <Outlet />
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
}
