import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import ResearchInterests from "./components/ResearchInterests";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { content } from "./data/content";
import { usePreferences } from "./context/PreferencesContext";

export default function App() {
  const { language } = usePreferences();
  const t = content[language];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  return (
    <>
      <Navbar t={t} />
      <main>
        <Hero t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Research t={t} />
        <ResearchInterests t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
