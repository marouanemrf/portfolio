import { BrainCircuit } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";

const interests = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Object Detection", "Large Language Models", "RAG", "AI Agents", "Edge AI", "Intelligent Systems", "IoT + AI"];

export default function ResearchInterests({ t }) {
  const { language } = usePreferences();
  const labels = { en: ["Research interests", "Areas I am exploring and developing."], fr: ["Intérêts de recherche", "Domaines que j’explore et développe."], ar: ["اهتمامات البحث", "مجالات أستكشفها وأطور خبرتي فيها."] }[language];
  return <section className="section section-muted"><div className="shell">
    <SectionTitle eyebrow={labels[0]} title={labels[1]} />
    <div className="interest-grid reveal">{interests.map((interest) => <div className="panel interest-card" key={interest}><BrainCircuit size={19} /><span>{interest}</span></div>)}</div>
  </div></section>;
}
