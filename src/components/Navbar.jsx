import { useState } from "react";
import { Github, Languages, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { usePreferences } from "../context/PreferencesContext";
import { contactInfo } from "../data/content";
import CVDownload from "./CVDownload";
import BrandLogo from "./BrandLogo";

export default function Navbar({ t }) {
  const { language, setLanguage, theme, toggleTheme } = usePreferences();
  const [open, setOpen] = useState(false);
  const accessibility = {
    en: { navigation: "Primary navigation", home: "Marouane Morfi home", language: "Language", chooseLanguage: "Choose language", theme: "Toggle theme", menu: "Toggle navigation" },
    fr: { navigation: "Navigation principale", home: "Accueil de Marouane Morfi", language: "Langue", chooseLanguage: "Choisir la langue", theme: "Changer de thème", menu: "Afficher ou masquer la navigation" },
    ar: { navigation: "التنقل الرئيسي", home: "الصفحة الرئيسية لمروان مورفي", language: "اللغة", chooseLanguage: "اختر اللغة", theme: "تبديل المظهر", menu: "إظهار أو إخفاء التنقل" },
  }[language];

  const navItems = [
    ["home", t.nav.home],
    ["skills", t.nav.skills],
    ["experience", t.nav.experience],
    ["projects", t.nav.projects],
    ["current-project", { en: "In development", fr: "En développement", ar: "قيد التطوير" }[language]],
    ["research", t.nav.research],
    ["education", t.nav.education],
    ["contact", t.nav.contact],
  ];

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label={accessibility.navigation}>
        <a className="brand" href="#home" onClick={close} aria-label={accessibility.home}>
          <BrandLogo />
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map(([id, label]) => (
            <a href={`#${id}`} onClick={close} key={id}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-social" href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a className="nav-social" href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <CVDownload compact />
          <div className="language-switcher" title={accessibility.language}>
            <Languages size={17} />
            <select
              aria-label={accessibility.chooseLanguage}
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>

          <button className="icon-button" onClick={toggleTheme} aria-label={accessibility.theme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label={accessibility.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
