import { ArrowUp } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { usePreferences } from "../context/PreferencesContext";

export default function Footer() {
  const { language } = usePreferences();
  const copy = {
    en: { modified: "Last modification: 4th September 2026.", top: "Back to top" },
    fr: { modified: "Dernière modification : 4 septembre 2026.", top: "Retour en haut" },
    ar: { modified: "آخر تعديل: 4 سبتمبر 2026.", top: "العودة إلى الأعلى" },
  }[language];
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-brand"><BrandLogo compact /><p>{copy.modified}</p></div>
        <a href="#home" aria-label={copy.top}><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}
