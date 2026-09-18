import { useScrollReveal } from '../hooks/useGsap';
import './Contact.css';

export default function Contact() {
  const sectionRef = useScrollReveal({
    y: 40,
    stagger: 0.12,
    childSelector: '.contact__reveal',
  });

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__layout">
          <div className="contact__left">
            <span className="section__label contact__reveal">Contact</span>
            <h2 className="contact__heading contact__reveal">
              Let's build<br />
              something <span className="contact__highlight">together.</span>
            </h2>
            <p className="contact__text contact__reveal">
              I'm always open to new opportunities, collaborations, and
              conversations. Whether you have a project idea, a question, or
              just want to connect — reach out.
            </p>
          </div>

          <div className="contact__right">
            <div className="contact__links contact__reveal">
              <a href="mailto:raghav@example.com" className="contact__link" id="contact-email">
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">raghav@example.com</span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="https://github.com/raghavy" target="_blank" rel="noopener noreferrer" className="contact__link" id="contact-github">
                <span className="contact__link-label">GitHub</span>
                <span className="contact__link-value">github.com/raghavy</span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="https://linkedin.com/in/raghavy" target="_blank" rel="noopener noreferrer" className="contact__link" id="contact-linkedin">
                <span className="contact__link-label">LinkedIn</span>
                <span className="contact__link-value">linkedin.com/in/raghavy</span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="https://twitter.com/raghavy" target="_blank" rel="noopener noreferrer" className="contact__link" id="contact-twitter">
                <span className="contact__link-label">Twitter / X</span>
                <span className="contact__link-value">@raghavy</span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
