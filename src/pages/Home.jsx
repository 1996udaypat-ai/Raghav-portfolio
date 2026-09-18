import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <Journey />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Certifications />
      <hr className="divider" />
      <Contact />
    </main>
  );
}
