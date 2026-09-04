import {
  BrainCircuit,
  CloudCog,
  CodeXml,
  Database,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";
import { profileData } from "../data/profileData";

const icons = [CodeXml, PanelsTopLeft, ServerCog, Database, BrainCircuit, CloudCog];

export default function Skills({ t }) {
  const { language } = usePreferences();
  const groups = profileData[language].skills;
  return (
    <section id="skills" className="section section-muted section-anchor">
      <div className="shell">
        <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="skill-grid">
          {groups.map((group, index) => {
            const Icon = icons[index] || CodeXml;
            return (
              <article className="panel skill-card reveal" key={group.name}>
                <div className="skill-head">
                  <span className="skill-icon"><Icon size={21} /></span>
                  <h3>{group.name}</h3>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
