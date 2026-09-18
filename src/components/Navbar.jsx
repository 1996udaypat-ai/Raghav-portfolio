import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGsap } from '../hooks/useGsap';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navRef = useGsap(({ el, gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;
    gsap.from(el, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power3.out',
    });
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    if (!isHome) return; // Let Link handle navigation
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setMenuOpen(false);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      id="main-nav"
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="Go to homepage">
          RU<span className="navbar__logo-dot">.</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {isHome ? (
            NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))
          ) : (
            <Link to="/" className="navbar__link">
              Portfolio
            </Link>
          )}

          {isHome ? (
            <Link to="/drishti-setu" className="navbar__link navbar__link--accent">
              Drishti Setu
            </Link>
          ) : (
            <Link to="/" className="navbar__link navbar__link--accent">
              Back to Portfolio
            </Link>
          )}
        </div>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
