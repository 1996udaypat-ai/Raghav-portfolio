import { useScrollReveal } from '../hooks/useGsap';
import './Certifications.css';

const CERTIFICATIONS = [
  {
    id: 'cert-1',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    credential: 'Credential ID: XXXXX',
  },
  {
    id: 'cert-2',
    title: 'Google Data Analytics Professional',
    issuer: 'Google / Coursera',
    date: '2024',
    credential: 'Credential ID: XXXXX',
  },
  {
    id: 'cert-3',
    title: 'Meta Front-End Developer',
    issuer: 'Meta / Coursera',
    date: '2023',
    credential: 'Credential ID: XXXXX',
  },
  {
    id: 'cert-4',
    title: 'Python for Data Science',
    issuer: 'IBM / Coursera',
    date: '2023',
    credential: 'Credential ID: XXXXX',
  },
  {
    id: 'cert-5',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2022',
    credential: 'Verified Certificate',
  },
];

export default function Certifications() {
  const sectionRef = useScrollReveal({
    y: 30,
    stagger: 0.1,
    childSelector: '.certs__reveal',
  });

  return (
    <section className="certs section" id="certifications" ref={sectionRef}>
      <div className="container">
        <span className="section__label certs__reveal">Certifications</span>
        <h2 className="section__title certs__reveal">Validated knowledge</h2>

        <div className="certs__list">
          {CERTIFICATIONS.map((cert, i) => (
            <div className="certs__item certs__reveal" key={cert.id} id={cert.id}>
              <div className="certs__index">{String(i + 1).padStart(2, '0')}</div>
              <div className="certs__content">
                <h3 className="certs__title">{cert.title}</h3>
                <span className="certs__issuer">{cert.issuer}</span>
              </div>
              <div className="certs__meta">
                <span className="certs__date">{cert.date}</span>
                <span className="certs__credential">{cert.credential}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
