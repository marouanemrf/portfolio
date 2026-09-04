import { useState } from "react";
import { Activity, ArrowRight, Bell, Bot, BrainCircuit, CheckCircle2, ChevronDown, Container, Database, Globe2, HardDrive, MessageSquare, Network, Server, ShieldCheck, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";

const layers = ["Frontend", "API Gateway", "Microservices", "AI / RAG Infrastructure"];
const technologies = ["React", "TypeScript", "ASP.NET Core", "Spring Boot", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "RabbitMQ", "Kimi", "vLLM", "MinIO", "Docker", "Kubernetes", "YARP", "LangChain / LangGraph", "OpenTelemetry", "Prometheus", "Grafana", "GitHub Actions"];
const services = [
  { icon: ShieldCheck, name: "Identity Service", stack: "ASP.NET Core", items: ["Authentication & JWT", "Roles and permissions", "Profiles, CVs & preferences"] },
  { icon: Globe2, name: "Job Ingestion", stack: "Spring Boot", items: ["Job source connectors", "Email and feed parsing", "Content normalization"] },
  { icon: Server, name: "Job Management", stack: "Spring Boot", items: ["Search and filters", "Job details & matching", "Application tracking"] },
  { icon: BrainCircuit, name: "AI Service", stack: "FastAPI", items: ["RAG over CV and projects", "Skill extraction & scoring", "Personalized content"] },
  { icon: Bell, name: "Notification Service", stack: "ASP.NET Core", items: ["Email and in-app alerts", "Application updates", "Scheduled reminders"] },
  { icon: Wrench, name: "Background Workers", stack: "Consumers", items: ["Scraping and parsing", "AI processing", "Scheduled tasks"] },
];
const stores = [
  { icon: Database, name: "PostgreSQL", detail: "Users, jobs, profiles and applications" },
  { icon: BrainCircuit, name: "Qdrant", detail: "CV and job vector embeddings" },
  { icon: Activity, name: "Redis", detail: "Cache, sessions and temporary data" },
  { icon: HardDrive, name: "MinIO / Local Storage", detail: "Self-hosted CV files and generated content" },
  { icon: Bot, name: "Kimi Model Gateway", detail: "Open-weight Kimi model through a local vLLM endpoint" },
];
const infrastructure = [
  { icon: Container, name: "Docker / Kubernetes", detail: "Containers, orchestration and scaling" },
  { icon: Network, name: "GitHub Actions", detail: "Build, test and deployment pipeline" },
  { icon: Activity, name: "Prometheus / Grafana", detail: "Metrics, monitoring and dashboards" },
  { icon: Globe2, name: "Nginx / Ingress", detail: "Reverse proxy and load balancing" },
];

const architectureTranslations = {
  fr: {
    Frontend: "Interface utilisateur", "API Gateway": "Passerelle API", Microservices: "Microservices", "AI / RAG Infrastructure": "Infrastructure IA / RAG",
    "Identity Service": "Service d’identité", "Authentication & JWT": "Authentification et JWT", "Roles and permissions": "Rôles et autorisations", "Profiles, CVs & preferences": "Profils, CV et préférences",
    "Job Ingestion": "Collecte des offres", "Job source connectors": "Connecteurs de sources d’offres", "Email and feed parsing": "Analyse des e-mails et flux", "Content normalization": "Normalisation du contenu",
    "Job Management": "Gestion des offres", "Search and filters": "Recherche et filtres", "Job details & matching": "Détails et correspondance", "Application tracking": "Suivi des candidatures",
    "AI Service": "Service IA", "RAG over CV and projects": "RAG sur le CV et les projets", "Skill extraction & scoring": "Extraction et évaluation des compétences", "Personalized content": "Contenu personnalisé",
    "Notification Service": "Service de notifications", "Email and in-app alerts": "Alertes par e-mail et dans l’application", "Application updates": "Mises à jour des candidatures", "Scheduled reminders": "Rappels planifiés",
    "Background Workers": "Tâches en arrière-plan", "Scraping and parsing": "Collecte et analyse", "AI processing": "Traitements IA", "Scheduled tasks": "Tâches planifiées",
    "Users, jobs, profiles and applications": "Utilisateurs, offres, profils et candidatures", "CV and job vector embeddings": "Embeddings des CV et des offres", "Cache, sessions and temporary data": "Cache, sessions et données temporaires", "Self-hosted CV files and generated content": "CV et contenus générés auto-hébergés", "Open-weight Kimi model through a local vLLM endpoint": "Modèle Kimi open-weight via un endpoint vLLM local",
    "Containers, orchestration and scaling": "Conteneurs, orchestration et mise à l’échelle", "Build, test and deployment pipeline": "Pipeline de build, test et déploiement", "Metrics, monitoring and dashboards": "Métriques, supervision et tableaux de bord", "Reverse proxy and load balancing": "Proxy inverse et répartition de charge",
    "React Web App": "Application web React", "Dashboard, job search, applications, profile and AI assistant": "Tableau de bord, recherche, candidatures, profil et assistant IA", "External Job Sources": "Sources d’offres externes", "Job boards, company websites, email, RSS feeds and manual input": "Sites d’emploi, sites d’entreprises, e-mails, flux RSS et saisie manuelle",
    "MinIO / Local Storage": "MinIO / Stockage local", "Kimi Model Gateway": "Passerelle du modèle Kimi", Consumers: "Consommateurs", "API Gateway — YARP / ASP.NET Core": "Passerelle API — YARP / ASP.NET Core",
    "System Architecture": "Architecture du système", "Routing · JWT authentication · Rate limiting · SSL/TLS": "Routage · Authentification JWT · Limitation du débit · SSL/TLS", "RabbitMQ — Event Broker": "RabbitMQ — Courtier d’événements", "Asynchronous communication · Event-driven architecture · Pub/Sub": "Communication asynchrone · Architecture événementielle · Publication/abonnement",
  },
  ar: {
    Frontend: "الواجهة الأمامية", "API Gateway": "بوابة API", Microservices: "الخدمات المصغرة", "AI / RAG Infrastructure": "بنية الذكاء الاصطناعي وRAG",
    "Identity Service": "خدمة الهوية", "Authentication & JWT": "المصادقة وJWT", "Roles and permissions": "الأدوار والصلاحيات", "Profiles, CVs & preferences": "الملفات والسير الذاتية والتفضيلات",
    "Job Ingestion": "جمع عروض العمل", "Job source connectors": "موصلات مصادر الوظائف", "Email and feed parsing": "تحليل البريد والتغذيات", "Content normalization": "توحيد المحتوى",
    "Job Management": "إدارة الوظائف", "Search and filters": "البحث والتصفية", "Job details & matching": "التفاصيل والمطابقة", "Application tracking": "تتبع طلبات التوظيف",
    "AI Service": "خدمة الذكاء الاصطناعي", "RAG over CV and projects": "RAG على السيرة والمشاريع", "Skill extraction & scoring": "استخراج المهارات وتقييمها", "Personalized content": "محتوى مخصص",
    "Notification Service": "خدمة الإشعارات", "Email and in-app alerts": "تنبيهات البريد وداخل التطبيق", "Application updates": "تحديثات طلبات التوظيف", "Scheduled reminders": "تذكيرات مجدولة",
    "Background Workers": "مهام الخلفية", "Scraping and parsing": "الجمع والتحليل", "AI processing": "معالجة الذكاء الاصطناعي", "Scheduled tasks": "المهام المجدولة",
    "Users, jobs, profiles and applications": "المستخدمون والوظائف والملفات والطلبات", "CV and job vector embeddings": "تضمينات السير الذاتية والوظائف", "Cache, sessions and temporary data": "التخزين المؤقت والجلسات والبيانات المؤقتة", "Self-hosted CV files and generated content": "ملفات السيرة والمحتوى المستضاف ذاتياً", "Open-weight Kimi model through a local vLLM endpoint": "نموذج Kimi مفتوح الأوزان عبر نقطة vLLM محلية",
    "Containers, orchestration and scaling": "الحاويات والتنسيق والتوسع", "Build, test and deployment pipeline": "مسار البناء والاختبار والنشر", "Metrics, monitoring and dashboards": "المقاييس والمراقبة ولوحات المعلومات", "Reverse proxy and load balancing": "الوكيل العكسي وتوزيع الحمل",
    "React Web App": "تطبيق ويب React", "Dashboard, job search, applications, profile and AI assistant": "لوحة المعلومات والبحث والطلبات والملف والمساعد الذكي", "External Job Sources": "مصادر الوظائف الخارجية", "Job boards, company websites, email, RSS feeds and manual input": "مواقع الوظائف والشركات والبريد وRSS والإدخال اليدوي",
    "MinIO / Local Storage": "MinIO / تخزين محلي", "Kimi Model Gateway": "بوابة نموذج Kimi", Consumers: "المستهلكون", "API Gateway — YARP / ASP.NET Core": "بوابة API — YARP / ASP.NET Core",
    "System Architecture": "بنية النظام", "Routing · JWT authentication · Rate limiting · SSL/TLS": "التوجيه · مصادقة JWT · تحديد المعدل · SSL/TLS", "RabbitMQ — Event Broker": "RabbitMQ — وسيط الأحداث", "Asynchronous communication · Event-driven architecture · Pub/Sub": "اتصال غير متزامن · بنية موجهة بالأحداث · نشر/اشتراك",
  },
};

const copy = {
  en: { eyebrow: "Currently building", title: "AI Job Intelligence Platform", badge: "Open-source & self-hosted", status: "In Progress — No paid AI API required", description: "A self-hosted platform in active development to improve the job search. It collects job listings, analyzes their requirements and compares them with a user's CV using RAG and an open-weight Kimi model, without requiring a paid LLM subscription.", architectureTitle: "Self-hosted microservices architecture", capabilitiesTitle: "Planned capabilities", capabilities: ["Analyze listings and extract required skills", "Calculate a match score and identify matched or missing skills", "Retrieve relevant CV projects with RAG and explain the match", "Recommend whether to apply", "Generate tailored outreach, applications and follow-ups", "Track applications"], stackTitle: "Free and open-source stack", button: "Explore Project Architecture", hideButton: "Hide Project Architecture", journey: "Collect → Analyze → Match → Generate → Apply → Track", services: "Business microservices", data: "Self-hosted data & Kimi AI", infrastructure: "Infrastructure & DevOps" },
  fr: { eyebrow: "Projet en cours", title: "AI Job Intelligence Platform", badge: "Open source et auto-hébergé", status: "En cours — aucune API IA payante requise", description: "Une plateforme auto-hébergée en cours de développement pour améliorer la recherche d’emploi. Elle collecte les offres, analyse leurs exigences et les compare au CV avec le RAG et un modèle Kimi open-weight, sans abonnement LLM payant obligatoire.", architectureTitle: "Architecture microservices auto-hébergée", capabilitiesTitle: "Fonctionnalités prévues", capabilities: ["Analyser les offres et extraire les compétences demandées", "Calculer un score et identifier les compétences présentes ou manquantes", "Retrouver les projets pertinents du CV avec le RAG et expliquer la correspondance", "Recommander si l'utilisateur devrait postuler", "Générer des prises de contact, candidatures et relances personnalisées", "Suivre les candidatures"], stackTitle: "Stack gratuite et open source", button: "Explorer l’architecture du projet", hideButton: "Masquer l’architecture du projet", journey: "Collecter → Analyser → Comparer → Générer → Postuler → Suivre", services: "Microservices métier", data: "Données auto-hébergées et IA Kimi", infrastructure: "Infrastructure et DevOps" },
  ar: { eyebrow: "المشروع الحالي", title: "AI Job Intelligence Platform", badge: "مفتوح المصدر ومستضاف ذاتياً", status: "قيد الإنجاز — لا يتطلب API مدفوعاً للذكاء الاصطناعي", description: "منصة مستضافة ذاتياً قيد التطوير لتحسين البحث عن عمل. تجمع عروض الوظائف وتحلل متطلباتها وتقارنها بالسيرة الذاتية باستخدام RAG ونموذج Kimi مفتوح الأوزان، دون اشتراك LLM مدفوع إلزامي.", architectureTitle: "بنية خدمات مصغرة مستضافة ذاتياً", capabilitiesTitle: "الوظائف المخطط لها", capabilities: ["تحليل عروض العمل واستخراج المهارات المطلوبة", "حساب درجة التطابق وتحديد المهارات المتوفرة والناقصة", "استرجاع مشاريع السيرة الذاتية المناسبة عبر RAG وشرح التطابق", "تقديم توصية بشأن الترشح", "إنشاء رسائل التقديم والمتابعة المخصصة", "تتبع طلبات التوظيف"], stackTitle: "تقنيات مجانية ومفتوحة المصدر", button: "استكشاف بنية المشروع", hideButton: "إخفاء بنية المشروع", journey: "جمع ← تحليل ← مطابقة ← إنشاء ← تقديم ← تتبع", services: "الخدمات المصغرة", data: "بيانات مستضافة ذاتياً وذكاء Kimi", infrastructure: "البنية التحتية وDevOps" },
};

function ArchitectureCard({ item, translate }) {
  const Icon = item.icon;
  return <article className="system-card">
    <div className="system-card-title"><Icon size={19} /><div><strong>{translate(item.name)}</strong>{item.stack && <small>{translate(item.stack)}</small>}</div></div>
    {item.items ? <ul>{item.items.map((entry) => <li key={entry}>{translate(entry)}</li>)}</ul> : <p>{translate(item.detail)}</p>}
  </article>;
}

export default function CurrentProject() {
  const { language } = usePreferences();
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const project = copy[language];
  const translate = (text) => architectureTranslations[language]?.[text] ?? text;
  return <section id="current-project" className="section current-project-section section-anchor">
    <div className="shell">
      <SectionTitle eyebrow={project.eyebrow} title={project.title} />
      <article className="current-project panel reveal">
        <div className="current-project-intro">
          <span className="development-badge"><Wrench size={15} /> {project.badge}</span>
          <p>{project.description}</p><div className="project-status">{project.status}</div>
        </div>
        <div className="architecture-flow" aria-label={project.architectureTitle}>{layers.map((layer, index) => <div className="architecture-step" key={layer}>
          <span>{index === 3 ? <Bot size={20} /> : <Network size={20} />}</span><strong>{translate(layer)}</strong>{index < layers.length - 1 && <ArrowRight className="flow-arrow" size={19} />}
        </div>)}</div>
        <div className="current-project-grid">
          <div><h3>{project.capabilitiesTitle}</h3><ul className="capability-list">{project.capabilities.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul></div>
          <div><h3>{project.stackTitle}</h3><div className="tag-list">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        </div>
        <button className="button button-ghost architecture-button" type="button" aria-expanded={architectureOpen} aria-controls="project-architecture" onClick={() => setArchitectureOpen((open) => !open)}>{architectureOpen ? project.hideButton : project.button}<ChevronDown className={architectureOpen ? "rotated" : ""} size={17} /></button>
        {architectureOpen && <div id="project-architecture" className="system-architecture">
          <header className="system-architecture-header"><div><span>{translate("System Architecture")}</span><h3>{project.architectureTitle}</h3></div><p>{project.journey}</p></header>
          <div className="architecture-client-row"><ArchitectureCard translate={translate} item={{ icon: MessageSquare, name: "React Web App", detail: "Dashboard, job search, applications, profile and AI assistant" }} /><ArrowRight size={22} /><ArchitectureCard translate={translate} item={{ icon: Globe2, name: "External Job Sources", detail: "Job boards, company websites, email, RSS feeds and manual input" }} /></div>
          <div className="architecture-bus gateway"><Network size={20} /><div><strong>{translate("API Gateway — YARP / ASP.NET Core")}</strong><small>{translate("Routing · JWT authentication · Rate limiting · SSL/TLS")}</small></div></div>
          <div className="architecture-group"><h4>{project.services}</h4><div className="service-grid">{services.map((service) => <ArchitectureCard translate={translate} item={service} key={service.name} />)}</div></div>
          <div className="architecture-bus event-bus"><MessageSquare size={20} /><div><strong>{translate("RabbitMQ — Event Broker")}</strong><small>{translate("Asynchronous communication · Event-driven architecture · Pub/Sub")}</small></div></div>
          <div className="architecture-group"><h4>{project.data}</h4><div className="data-grid">{stores.map((store) => <ArchitectureCard translate={translate} item={store} key={store.name} />)}</div></div>
          <div className="architecture-group infrastructure-group"><h4>{project.infrastructure}</h4><div className="infrastructure-grid">{infrastructure.map((item) => <ArchitectureCard translate={translate} item={item} key={item.name} />)}</div></div>
        </div>}
      </article>
    </div>
  </section>;
}
