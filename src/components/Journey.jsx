import { useGsap } from '../hooks/useGsap';
import './Journey.css';

const JOURNEY_ITEMS = [
  {
    year: '2025',
    title: 'Final Year — B.Tech CSE',
    org: 'University',
    description:
      'Capstone project development, advanced coursework in ML/AI, and preparing for industry roles. Active in open-source contributions.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Full-Stack Developer Intern',
    org: 'Tech Company',
    description:
      'Built production-ready web applications using React and Node.js. Collaborated with cross-functional teams on client projects.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Launched Drishti Setu',
    org: 'Content Creation',
    description:
      'Started a content creation initiative bridging technology and community. Created educational content reaching thousands of viewers.',
    type: 'milestone',
  },
  {
    year: '2022',
    title: 'Started B.Tech in CSE',
    org: 'University',
    description:
      'Began the engineering journey. Dove deep into data structures, algorithms, and web development fundamentals.',
    type: 'education',
  },
];

export default function Journey() {
  const sectionRef = useGsap(({ el, gsap, ScrollTrigger, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    // Animate the timeline line
    const line = el.querySelector('.journey__line-fill');
    if (line) {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: el.querySelector('.journey__timeline'),
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
      });
    }

    // Animate each entry
    const entries = el.querySelectorAll('.journey__entry');
    entries.forEach((entry, i) => {
      gsap.from(entry, {
        x: i % 2 === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: entry,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  });

  return (
    <section className="journey section" id="journey" ref={sectionRef}>
      <div className="container">
        <span className="section__label">Journey</span>
        <h2 className="section__title">The path so far</h2>

        <div className="journey__timeline">
          <div className="journey__line">
            <div className="journey__line-fill" />
          </div>

          {JOURNEY_ITEMS.map((item, i) => (
            <div
              className={`journey__entry journey__entry--${i % 2 === 0 ? 'left' : 'right'}`}
              key={item.year + item.title}
            >
              <div className="journey__dot" />
              <div className="journey__card">
                <span className="journey__year">{item.year}</span>
                <h3 className="journey__title">{item.title}</h3>
                <span className="journey__org">{item.org}</span>
                <p className="journey__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
