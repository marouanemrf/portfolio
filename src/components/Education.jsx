import { Award, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";
import { profileData } from "../data/profileData";

export default function Education({ t }) {
  const { language } = usePreferences();
  const primary = profileData[language].education;
  return (
    <section id="education" className="section section-muted section-anchor">
      <div className="shell">
        <SectionTitle eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="education-grid">
          <div className="education-list">
            {[{ school: primary.school, degree: primary.degree, period: primary.date }, ...t.education.schools.slice(1)].map((item) => (
              <article className="panel education-card reveal" key={item.school}>
                <div className="education-icon"><GraduationCap size={22} /></div>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                </div>
              </article>
            ))}
          </div>

          <article className="panel certifications reveal">
            <div className="cert-title">
              <Award size={22} />
              <h3>{t.education.certTitle}</h3>
            </div>
            <ul>
              {t.education.certifications.map((cert) => <li key={cert}>{cert}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
