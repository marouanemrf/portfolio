import { ArrowRight, Bot, CheckCircle2, Network, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";

const layers = ["Frontend", "API Gateway", "Microservices", "AI / RAG Infrastructure"];
const technologies = ["React / Blazor", "ASP.NET Core", "Spring Boot", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "RabbitMQ", "Ollama", "Local / Open-Source LLMs", "Docker", "Kubernetes", "YARP", "LangChain / LangGraph", "sentence-transformers", "OpenTelemetry", "Prometheus", "Grafana", "GitHub Actions"];
const copy = {
  en: { eyebrow: "Currently building", title: "AI Job Intelligence Platform", badge: "Currently in Development", status: "In Progress — Architecture & Development", description: "A personal platform in active development to improve the job search. It is designed to collect job listings, analyze their requirements and compare them with a user's CV and profile using RAG and local LLMs.", architectureTitle: "Planned microservices architecture", capabilitiesTitle: "Planned capabilities", capabilities: ["Analyze listings and extract required skills", "Calculate a match score and identify matched or missing skills", "Retrieve relevant CV projects with RAG and explain the match", "Recommend whether to apply", "Generate tailored outreach, applications and follow-ups", "Track applications"], stackTitle: "Planned technology stack", button: "View Project Architecture", linkPending: "Repository or documentation link coming soon" },
  fr: { eyebrow: "Projet en cours", title: "AI Job Intelligence Platform", badge: "Actuellement en développement", status: "En cours — Architecture & développement", description: "Une plateforme personnelle en cours de développement pour améliorer la recherche d'emploi. Elle est conçue pour collecter des offres, analyser leurs exigences et les comparer au CV et au profil utilisateur grâce au RAG et à des LLM locaux.", architectureTitle: "Architecture microservices prévue", capabilitiesTitle: "Fonctionnalités prévues", capabilities: ["Analyser les offres et extraire les compétences demandées", "Calculer un score et identifier les compétences présentes ou manquantes", "Retrouver les projets pertinents du CV avec le RAG et expliquer la correspondance", "Recommander si l'utilisateur devrait postuler", "Générer des prises de contact, candidatures et relances personnalisées", "Suivre les candidatures"], stackTitle: "Stack technologique prévue", button: "Voir l'architecture du projet", linkPending: "Lien vers le dépôt ou la documentation bientôt disponible" },
  ar: { eyebrow: "المشروع الحالي", title: "AI Job Intelligence Platform", badge: "قيد التطوير حالياً", status: "قيد الإنجاز — الهندسة والتطوير", description: "منصة شخصية قيد التطوير لتحسين البحث عن عمل. صُممت لجمع عروض الوظائف وتحليل متطلباتها ومقارنتها بالسيرة الذاتية وملف المستخدم باستخدام RAG ونماذج LLM محلية.", architectureTitle: "بنية الخدمات المصغرة المخطط لها", capabilitiesTitle: "الوظائف المخطط لها", capabilities: ["تحليل عروض العمل واستخراج المهارات المطلوبة", "حساب درجة التطابق وتحديد المهارات المتوفرة والناقصة", "استرجاع مشاريع السيرة الذاتية المناسبة عبر RAG وشرح التطابق", "تقديم توصية بشأن الترشح", "إنشاء رسائل التقديم والمتابعة المخصصة", "تتبع طلبات التوظيف"], stackTitle: "التقنيات المخطط لها", button: "عرض بنية المشروع", linkPending: "رابط المستودع أو التوثيق سيتوفر قريباً" }
};

export default function CurrentProject({ t }) {
  const { language } = usePreferences();
  const project = copy[language];
  return (
    <section id="current-project" className="section current-project-section section-anchor">
      <div className="shell">
        <SectionTitle eyebrow={project.eyebrow} title={project.title} />
        <article className="current-project panel reveal">
          <div className="current-project-intro">
            <span className="development-badge"><Wrench size={15} /> {project.badge}</span>
            <p>{project.description}</p>
            <div className="project-status"><span /> {project.status}</div>
          </div>
          <div className="architecture-flow" aria-label={project.architectureTitle}>
            {layers.map((layer, index) => (
              <div className="architecture-step" key={layer}>
                <span>{index === 3 ? <Bot size={20} /> : <Network size={20} />}</span><strong>{layer}</strong>
                {index < layers.length - 1 && <ArrowRight className="flow-arrow" size={19} />}
              </div>
            ))}
          </div>
          <div className="current-project-grid">
            <div><h3>{project.capabilitiesTitle}</h3><ul className="capability-list">{project.capabilities.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul></div>
            <div><h3>{project.stackTitle}</h3><div className="tag-list">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          </div>
          <button className="button button-ghost architecture-button" type="button" disabled title={project.linkPending}>{project.button}</button>
        </article>
      </div>
    </section>
  );
}
