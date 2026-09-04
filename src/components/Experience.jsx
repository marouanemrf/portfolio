import { Building2, CalendarDays, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";
import { profileData } from "../data/profileData";

export default function Experience({ t }) {
  const { language } = usePreferences();
  const items = profileData[language].experiences;
  return (
    <section id="experience" className="section section-anchor">
      <div className="shell">
        <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="experience-list">
          {items.map((item) => (
            <article className="panel experience-card reveal" key={`${item.company}-${item.period}`}>
              <div className="experience-top">
                <div>
                  <p className="company">
                    <Building2 size={18} />
                    {item.company}{item.location ? ` · ${item.location}` : ""}
                  </p>
                  <h3>{item.role}</h3>
                </div>
                <span className="period"><CalendarDays size={16} /> {item.period}</span>
              </div>

              <p className="experience-description">{item.description}</p>

              <ul className="achievement-list">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>
                    <CheckCircle2 size={16} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="tag-list">
                {item.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
