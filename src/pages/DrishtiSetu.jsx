import { useGsap, useScrollReveal } from '../hooks/useGsap';
import { Link } from 'react-router-dom';
import './DrishtiSetu.css';

const CONTENT_PILLARS = [
  {
    icon: '📡',
    title: 'Tech Insights',
    description: 'Breaking down complex technology topics into digestible, actionable content for learners and enthusiasts.',
  },
  {
    icon: '🎓',
    title: 'Student Life & Growth',
    description: 'Sharing the engineering student journey — from exam strategies to career planning and personal development.',
  },
  {
    icon: '💡',
    title: 'Project Showcases',
    description: 'Behind-the-scenes looks at projects, coding walkthroughs, and the creative process behind building software.',
  },
  {
    icon: '🌐',
    title: 'Community & Collaboration',
    description: 'Connecting like-minded individuals, fostering discussions, and building a community around shared learning.',
  },
];

const SOCIAL_LINKS = [
  { platform: 'YouTube', handle: '@DrishtiSetu', url: '#', color: '#ff4444' },
  { platform: 'Instagram', handle: '@drishti.setu', url: '#', color: '#e1306c' },
  { platform: 'LinkedIn', handle: 'Raghav Uparkar', url: '#', color: '#0a66c2' },
  { platform: 'Twitter / X', handle: '@DrishtiSetu', url: '#', color: '#ededed' },
];

export default function DrishtiSetu() {
  const heroRef = useGsap(({ el, gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(el.querySelector('.ds-hero__badge'), {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    })
    .from(el.querySelector('.ds-hero__title'), {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    }, '-=0.2')
    .from(el.querySelector('.ds-hero__subtitle'), {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.5')
    .from(el.querySelector('.ds-hero__tagline'), {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3');
  });

  const pillarsRef = useScrollReveal({
    y: 50,
    stagger: 0.12,
    childSelector: '.ds-pillar',
  });

  const socialRef = useScrollReveal({
    y: 30,
    stagger: 0.1,
    childSelector: '.ds-social__item',
  });

  const ctaRef = useScrollReveal({ y: 40 });

  return (
    <main className="drishti-setu">
      {/* Hero */}
      <section className="ds-hero" ref={heroRef}>
        <div className="container ds-hero__container">
          <span className="ds-hero__badge">Content &middot; Community &middot; Connection</span>
          <h1 className="ds-hero__title">
            Drishti<br />
            <span className="ds-hero__title--accent">Setu</span>
          </h1>
          <p className="ds-hero__subtitle">
            A bridge between vision and expression.
          </p>
          <p className="ds-hero__tagline">
            Where technology meets storytelling — sharing ideas, building community,
            and creating content that matters.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* What is Drishti Setu */}
      <section className="ds-about section">
        <div className="container">
          <div className="ds-about__grid" ref={pillarsRef}>
            <div className="ds-about__intro">
              <span className="section__label">The Vision</span>
              <h2 className="section__title">
                More than content —<br />
                <span style={{ color: 'var(--color-accent)' }}>a movement.</span>
              </h2>
              <p className="ds-about__text">
                <em>Drishti Setu</em> (दृष्टि सेतु) — literally "Bridge of Vision" — is my
                content creation initiative. It's a space where I share my perspective
                on technology, engineering, and the student journey. Every piece of
                content is designed to inform, inspire, and connect.
              </p>
            </div>

            <div className="ds-pillars">
              {CONTENT_PILLARS.map((pillar) => (
                <div className="ds-pillar" key={pillar.title}>
                  <span className="ds-pillar__icon" aria-hidden="true">{pillar.icon}</span>
                  <div>
                    <h3 className="ds-pillar__title">{pillar.title}</h3>
                    <p className="ds-pillar__desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Social Links */}
      <section className="ds-social section" ref={socialRef}>
        <div className="container">
          <span className="section__label">Connect</span>
          <h2 className="section__title">Find Drishti Setu</h2>

          <div className="ds-social__grid">
            {SOCIAL_LINKS.map((social) => (
              <a
                href={social.url}
                className="ds-social__item"
                key={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--platform-color': social.color }}
                id={`ds-social-${social.platform.toLowerCase().replace(/[\s\/]/g, '-')}`}
              >
                <span className="ds-social__platform">{social.platform}</span>
                <span className="ds-social__handle">{social.handle}</span>
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CTA */}
      <section className="ds-cta section" ref={ctaRef}>
        <div className="container ds-cta__container">
          <h2 className="ds-cta__title">
            Like what you see?
          </h2>
          <p className="ds-cta__text">
            Check out my engineering work, projects, and the tech behind the creativity.
          </p>
          <Link to="/" className="ds-cta__button">
            View Portfolio
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
