import { ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>© 2026 Marouane Morfi. {t.footer}</p>
        <a href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}
