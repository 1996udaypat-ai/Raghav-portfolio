import { useScrollReveal } from '../hooks/useGsap';
import './Projects.css';

const PROJECTS = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with real-time inventory management, payment integration, and an admin dashboard. Built for scalability and performance.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 'project-2',
    title: 'AI Study Assistant',
    description:
      'An intelligent study companion that uses NLP to summarize notes, generate flashcards, and create practice questions from uploaded documents.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    link: '#',
    github: '#',
  },
  {
    id: 'project-3',
    title: 'Real-Time Chat Application',
    description:
      'A modern messaging platform with WebSocket-based real-time communication, message encryption, file sharing, and group chat capabilities.',
    tech: ['React', 'Socket.io', 'Express', 'Firebase'],
    link: '#',
    github: '#',
  },
  {
    id: 'project-4',
    title: 'Portfolio Analytics Dashboard',
    description:
      'A data visualization dashboard that tracks and analyzes stock portfolio performance with interactive charts and automated reporting.',
    tech: ['Next.js', 'D3.js', 'Python', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const sectionRef = useScrollReveal({
    y: 60,
    stagger: 0.15,
    childSelector: '.projects__reveal',
  });

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <span className="section__label projects__reveal">Projects</span>
        <h2 className="section__title projects__reveal">Selected work</h2>
        <p className="section__description projects__reveal">
          A curated selection of projects that represent my technical depth
          and problem-solving approach.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <article className="projects__item projects__reveal" key={project.id} id={project.id}>
              <div className="projects__number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__desc">{project.description}</p>
              <div className="projects__tech">
                {project.tech.map((t) => (
                  <span className="projects__tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="projects__links">
                <a href={project.link} className="projects__link" target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href={project.github} className="projects__link" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
