import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { contactInfo } from "../data/content";
import { profileData } from "../data/profileData";
import { usePreferences } from "../context/PreferencesContext";

export default function Contact({ t }) {
  const { language } = usePreferences();
  const copy = profileData[language].contact;
  const country = { en: "Morocco", fr: "Maroc", ar: "المغرب" }[language];
  const mailCopy = { en: { subject: "Portfolio contact", from: "From" }, fr: { subject: "Contact depuis le portfolio", from: "De" }, ar: { subject: "تواصل من معرض الأعمال", from: "من" } }[language];
  const items = [
    {
      label: t.contact.email,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
    {
      label: t.contact.linkedin,
      value: "marouane-morfi-3a5a08294",
      href: contactInfo.linkedin,
      icon: Linkedin,
    },
    {
      label: t.contact.github,
      value: "marouanemrf",
      href: contactInfo.github,
      icon: Github,
    },
  ];

  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${mailCopy.subject} — ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\n${mailCopy.from}: ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-anchor">
      <div className="shell">
        <div className="contact-panel panel reveal">
          <SectionTitle eyebrow={t.contact.eyebrow} title={copy.title} />
          <p className="contact-intro">{copy.description}</p>

          <div className="contact-layout"><div className="contact-grid">
            {items.map(({ label, value, href, icon: Icon }) => (
              <a
                className="contact-item"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                key={label}
              >
                <span><Icon size={19} /></span>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </a>
            ))}

            <div className="contact-item">
              <span><MapPin size={19} /></span>
              <div>
                <small>{copy.location}</small>
                <strong>{country}</strong>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <label>{copy.name}<input name="name" required autoComplete="name" /></label>
            <label>{copy.email}<input name="email" type="email" required autoComplete="email" /></label>
            <label>{copy.message}<textarea name="message" rows="5" required /></label>
            <button className="button button-primary" type="submit"><Send size={17} />{copy.send}</button>
          </form></div>
        </div>
      </div>
    </section>
  );
}
