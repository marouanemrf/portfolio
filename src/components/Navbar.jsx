import { useState } from "react";
import { Github, Languages, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { usePreferences } from "../context/PreferencesContext";
import { contactInfo } from "../data/content";
import CVDownload from "./CVDownload";

export default function Navbar({ t }) {
  const { language, setLanguage, theme, toggleTheme } = usePreferences();
  const [open, setOpen] = useState(false);

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
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={close} aria-label="Marouane Morfi home">
          MM<span>.</span>
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
          <div className="language-switcher" title="Language">
            <Languages size={17} />
            <select
              aria-label="Choose language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>

          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
