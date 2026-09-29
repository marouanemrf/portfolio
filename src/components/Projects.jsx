import { ArrowUpRight, Braces } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";
import { profileData } from "../data/profileData";

export default function Projects({ t }) {
  const { language } = usePreferences();
  const profile = profileData[language];
  return (
    <section id="projects" className="section section-muted section-anchor">
      <div className="shell">
        <SectionTitle eyebrow={t.projects.eyebrow} title={profile.projectsTitle}>
        </SectionTitle>

        <div className="project-grid">
          {profile.projects.map((project, index) => (
            <article className={`panel project-card reveal ${index === 0 ? "featured-project" : ""}`} key={project.title}>
              <div className="project-header">
                <div className="project-icon"><Braces size={21} /></div>
                <span>{project.category}</span>
                <span className={`status-badge status-${project.status}`}>{profile.status[project.status]}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-features">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>

              <div className="tag-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              {project.research && <a className="project-link" href="#research">{language === "fr" ? "Voir la publication" : language === "ar" ? "عرض البحث" : "View research"}<ArrowUpRight size={15} /></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
