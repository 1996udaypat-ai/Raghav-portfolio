import { useScrollReveal } from '../hooks/useGsap';
import './About.css';

export default function About() {
  const sectionRef = useScrollReveal({ y: 50, stagger: 0.15, childSelector: '.about__reveal' });

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="section__label about__reveal">About</span>
            <h2 className="section__title about__reveal">
              Driven by curiosity,<br />
              <span className="about__highlight">shaped by code.</span>
            </h2>
          </div>

          <div className="about__right">
            <p className="about__text about__reveal">
              I'm Raghav Uparkar, a B.Tech Computer Science and Engineering student
              with a deep passion for building meaningful software. I believe
              in crafting digital experiences that are not just functional but
              genuinely thoughtful — where every interaction feels intentional.
            </p>
            <p className="about__text about__reveal">
              From full-stack web development to exploring machine learning and
              cloud technologies, I'm constantly pushing my boundaries. When I'm
              not coding, you'll find me creating content under <em>Drishti Setu</em>,
              connecting ideas and communities through digital storytelling.
            </p>
            <div className="about__stats about__reveal">
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Projects Built</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">5+</span>
                <span className="about__stat-label">Certifications</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">∞</span>
                <span className="about__stat-label">Curiosity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
