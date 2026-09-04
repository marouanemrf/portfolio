import { ArrowDownRight, BookOpen, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../data/content";
import { usePreferences } from "../context/PreferencesContext";
import { profileData } from "../data/profileData";
import profilePhoto from "../../img/1779977584952.jpg";
import CVDownload from "./CVDownload";

export default function Hero({ t }) {
  const { language } = usePreferences();
  const profile = profileData[language];
  return (
    <section id="home" className="hero section-anchor">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <div className="availability">
            {t.hero.badge}
          </div>

          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1>{t.hero.name}</h1>
          <h2>{profile.hero.title}</h2>
          <p className="hero-description">{profile.hero.description}</p>
          <p className="graduation-note">{profile.hero.graduation}</p>

          <div className="hero-cta">
            <a className="button button-primary" href="#projects">
              {t.hero.projects}
              <ArrowDownRight size={18} />
            </a>
            <a className="button button-ghost" href="#research">
              <BookOpen size={18} />
              {{ en: "View Research", fr: "Voir la recherche", ar: "عرض البحث" }[language]}
            </a>
            <CVDownload />
            <a className="button button-ghost" href="#contact">
              <Mail size={18} />
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={16} />
              {t.hero.location}
            </span>
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-frame"><img src={profilePhoto} alt="Marouane Morfi" width="400" height="400" fetchpriority="high" /></div>
          <div className="float-chip chip-react">React</div>
          <div className="float-chip chip-dotnet">.NET</div>
          <div className="float-chip chip-yolo">YOLO</div>
          <div className="float-chip chip-python">Python</div>
        </div>
      </div>
    </section>
  );
}
