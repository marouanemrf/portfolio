import { ArrowUp } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-brand"><BrandLogo compact /><p>© 2026 Marouane Morfi. {t.footer}</p></div>
        <a href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}
