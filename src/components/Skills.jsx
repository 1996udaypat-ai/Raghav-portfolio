import { useScrollReveal } from '../hooks/useGsap';
import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'GSAP', 'Figma'],
  },
  {
    category: 'Backend & Cloud',
    items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS', 'Docker'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Agile', 'CI/CD'],
  },
];

export default function Skills() {
  const sectionRef = useScrollReveal({
    y: 40,
    stagger: 0.08,
    childSelector: '.skills__reveal',
  });

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <span className="section__label skills__reveal">Skills</span>
        <h2 className="section__title skills__reveal">
          Tools of the trade
        </h2>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skills__group skills__reveal" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__items">
                {group.items.map((item) => (
                  <span className="skills__pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
