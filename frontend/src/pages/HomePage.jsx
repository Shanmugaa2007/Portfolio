import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Skills from '../components/sections/Skills.jsx';
import TechStack from '../components/sections/TechStack.jsx';
import Experience from '../components/sections/Experience.jsx';
import Education from '../components/sections/Education.jsx';
import Projects from '../components/sections/Projects.jsx';
import Achievements from '../components/sections/Achievements.jsx';
import Certifications from '../components/sections/Certifications.jsx';
import GithubStats from '../components/sections/GithubStats.jsx';
import Services from '../components/sections/Services.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import Blog from '../components/sections/Blog.jsx';
import Contact from '../components/sections/Contact.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Certifications />
      <GithubStats />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
