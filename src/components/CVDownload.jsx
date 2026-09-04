import { Download } from "lucide-react";
import { usePreferences } from "../context/PreferencesContext";

const labels = {
  en: { button: "Download CV", choose: "Choose CV language" },
  fr: { button: "Télécharger le CV", choose: "Choisir la langue du CV" },
  ar: { button: "تحميل السيرة الذاتية", choose: "اختر لغة السيرة الذاتية" },
};

const versions = [
  { code: "ENG", name: "English", file: "/Marouane_Morfi_CV_ENG.pdf" },
  { code: "FR", name: "Français", file: "/Marouane_Morfi_CV_FR.pdf" },
  { code: "AR", name: "العربية", file: "/Marouane_Morfi_CV_AR.pdf" },
];

export default function CVDownload({ compact = false }) {
  const { language } = usePreferences();
  const copy = labels[language];

  return (
    <details className={`cv-download ${compact ? "cv-download-compact" : ""}`}>
      <summary className={compact ? "nav-cv" : "button button-ghost"} aria-label={copy.choose}>
        <Download size={compact ? 15 : 18} />
        <span>{compact ? "CV" : copy.button}</span>
      </summary>
      <div className="cv-menu" role="menu" aria-label={copy.choose}>
        {versions.map((version) => (
          <a href={version.file} download key={version.code} role="menuitem">
            <strong>{version.code}</strong><span>{version.name}</span><Download size={14} />
          </a>
        ))}
      </div>
    </details>
  );
}
