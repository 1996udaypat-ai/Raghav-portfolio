import { useGsap } from '../hooks/useGsap';
import './Hero.css';

export default function Hero() {
  const heroRef = useGsap(({ el, gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ delay: 0.8 });

    tl.from(el.querySelector('.hero__label'), {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
    .from(el.querySelector('.hero__name'), {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.3')
    .from(el.querySelector('.hero__role'), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .from(el.querySelector('.hero__tagline'), {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.4')
    .from(el.querySelector('.hero__scroll'), {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.2');
  });

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__label">Portfolio &rsquo;25</span>
          <h1 className="hero__name">
            Raghav<br />
            <span className="hero__name--accent">Uparkar</span>
          </h1>
          <p className="hero__role">B.Tech CSE Engineer</p>
          <p className="hero__tagline">
            Building thoughtful digital experiences — one line of code at a time.
          </p>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
}
