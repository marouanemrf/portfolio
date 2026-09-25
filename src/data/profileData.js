export const profileData = {
  en: {
    hero: { title: "Computer Engineer | AI & Machine Learning | .NET & Java Developer", description: "Computer Engineer passionate about Artificial Intelligence, Machine Learning and Software Engineering, with hands-on experience building backend systems, AI applications and modern web solutions using .NET, Java, Python and modern frontend technologies.", graduation: "Computer Engineering — 2026" },
    about: { title: "Engineering software with AI at the center.", paragraphs: ["Computer Engineer with practical software engineering experience across backend systems, enterprise interfaces, databases and modern web applications. My core stack includes .NET/C#, ASP.NET Core, Java/Spring Boot and Python.", "My work and research interests focus on AI/ML, deep learning, computer vision and real-world AI-powered systems. React, React Native and Blazor complement my backend expertise and allow me to contribute across the product stack."], cards: [{ value: "2026", label: "Computer Engineering graduation" }, { value: ".NET + Java", label: "Backend engineering focus" }, { value: "AI / ML", label: "Research and applied systems" }] },
    skills: [
      { name: "Artificial Intelligence & Machine Learning", items: ["Python", "PyTorch", "TensorFlow", "Machine Learning", "Deep Learning", "Computer Vision", "YOLO", "RAG", "LLMs", "AI Agents", "LangChain", "LangGraph", "Sentence Transformers"] },
      { name: "Backend & Software Engineering", items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "Java", "Spring Boot", "REST APIs", "Microservices", "API Gateway", "RabbitMQ"] },
      { name: "Frontend", items: ["React.js", "Next.js", "React Native", "Blazor", "MudBlazor", "JavaScript", "HTML5", "CSS3"] },
      { name: "Databases", items: ["SQL Server", "PostgreSQL", "SQL", "Entity Framework Core", "Spring Data JPA"] },
      { name: "DevOps & Infrastructure", items: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Redis", "OpenTelemetry", "Prometheus", "Grafana"] },
      { name: "IoT & Communication", items: ["MQTT", "CoAP", "LoRa", "ZigBee"] },
    ],
    experience: { role: "Software Engineering / PFE Internship", location: "Morocco", description: "Modernization and development work for the SIGMA enterprise information system, covering application interfaces and backend/database interactions.", achievements: ["Developed and modernized enterprise interfaces with Blazor and MudBlazor, including Gestion des rejets and Suivi des rejets.", "Implemented DataGrid workflows with filtering, sorting and validation.", "Integrated .NET/C# and ASP.NET Core application layers with Entity Framework Core and SQL Server.", "Investigated debugging and performance issues across UI, backend and database interactions."], tech: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "Blazor", "MudBlazor", "SQL Server", "SIGMA"] },
    projectsTitle: "Real software, AI and engineering work.", status: { completed: "Completed", research: "Research", development: "Currently in Development", academic: "Academic Project", professional: "Professional Work" },
    projects: [
      { title: "Tomato Leaf Disease Detection", category: "Computer Vision", status: "research", description: "Research work focused on detecting tomato leaf diseases under real-world open-field and greenhouse conditions.", features: ["Manually annotated imagery", "Object-detection benchmark", "Accuracy and deployment evaluation"], tech: ["Python", "PyTorch", "YOLO", "Computer Vision"], research: true },
      { title: "Air Canvas", category: "Computer Vision + Web", status: "development", description: "Gesture-controlled drawing app in active development: a React canvas editor paired with a hand-tracking system built from scratch in PyTorch (hand detector + 21-keypoint estimation), without MediaPipe.", features: ["Canvas editor with draw, shapes, images, undo/redo and local/file save", "CenterNet-style anchor-free hand detector", "Mini U-Net heatmap keypoint model with soft-argmax (21 points)", "Real-time webcam tracking with exponential smoothing"], tech: ["React", "Vite", "Tailwind CSS", "Python", "PyTorch", "OpenCV", "Computer Vision"] },
      { title: "FaceSmart", category: "Computer Vision", status: "academic", description: "Desktop face-recognition application using Python and computer vision.", features: ["Face-recognition workflow", "Desktop application", "Python-based processing"], tech: ["Python", "Computer Vision", "Face Recognition", "Desktop Application"] },
      { title: "Smart Irrigation / IoT", category: "IoT + AI", status: "academic", description: "Academic system in which soil and environmental sensor data is analyzed to estimate irrigation needs and support real-time alerts.", features: ["Soil moisture monitoring", "Sensor data analysis", "Irrigation-need estimation", "Real-time monitoring"], tech: ["IoT Sensors", "Python", "AI / Machine Learning"] },
      { title: "Real-Time Mobile Chat Application", category: "Mobile / Backend", status: "academic", description: "Real-time mobile chat application developed in Java with Android Studio and a Spring Boot backend. It supports live conversations through WebSockets, email management via SMTP and MySQL data storage hosted on Aiven.", features: ["Real-time conversations with WebSockets", "Email management with SMTP", "MySQL database hosted on Aiven", "MVC architecture and DTO-based API communication"], tech: ["Java", "Android Studio", "Spring Boot", "WebSockets", "SMTP", "MySQL", "Aiven", "MVC", "DTO"] },
      { title: "Database Web Interface", category: "Web + Data", status: "academic", description: "Web interface for accessing, presenting and managing database-backed information.", features: ["CRUD operations", "Database interaction", "Backend integration"], tech: ["SQL", "Web Interface", "Database"] },
    ],
    education: { degree: "Engineering Degree — Computer Engineering", school: "EMSI", date: "Graduation: 2026" },
    contact: { title: "Let's build something meaningful together.", description: "Open to conversations about software engineering, backend systems and applied AI opportunities.", name: "Name", email: "Email", message: "Message", send: "Send message", location: "Location" },
  },
};

const localize = (en, overrides) => ({ ...en, ...overrides });

profileData.fr = localize(profileData.en, {
  hero: { title: "Ingénieur Informatique | IA & Machine Learning | Développeur .NET & Java", description: "Ingénieur informatique passionné par l’intelligence artificielle, le Machine Learning et le Software Engineering, avec une expérience pratique dans la création de systèmes backend, d’applications IA et de solutions web modernes avec .NET, Java, Python et les technologies frontend actuelles.", graduation: "Ingénierie informatique — 2026" },
  about: { title: "Concevoir des logiciels avec l’IA au cœur.", paragraphs: ["Ingénieur informatique disposant d’une expérience pratique en ingénierie logicielle, systèmes backend, interfaces d’entreprise, bases de données et applications web modernes. Ma stack principale comprend .NET/C#, ASP.NET Core, Java/Spring Boot et Python.", "Mes travaux et intérêts de recherche portent sur l’IA/ML, le Deep Learning, la vision par ordinateur et les systèmes intelligents appliqués. React, React Native et Blazor complètent mon expertise backend."], cards: [{ value: "Sept. 2026", label: "Diplôme d’ingénieur informatique" }, { value: ".NET + Java", label: "Spécialisation backend" }, { value: "IA / ML", label: "Recherche et systèmes appliqués" }] },
  projectsTitle: "Des réalisations concrètes en logiciel, IA et ingénierie.",
  contact: { title: "Construisons ensemble quelque chose d’utile.", description: "Disponible pour échanger autour d’opportunités en ingénierie logicielle, systèmes backend et IA appliquée.", name: "Nom", email: "Email", message: "Message", send: "Envoyer", location: "Localisation" },
  education: { degree: "Diplôme d’ingénieur — Ingénierie informatique", school: "EMSI", date: "Diplôme prévu : 2026" },
});

profileData.ar = localize(profileData.en, {
  hero: { title: "مهندس حاسوب | الذكاء الاصطناعي والتعلم الآلي | مطور .NET وJava", description: "مهندس حاسوب شغوف بالذكاء الاصطناعي والتعلم الآلي وهندسة البرمجيات، مع خبرة عملية في بناء أنظمة Backend وتطبيقات ذكية وحلول ويب حديثة باستخدام .NET وJava وPython وتقنيات الواجهات الحديثة.", graduation: "هندسة الحاسوب — 2026" },
  about: { title: "هندسة البرمجيات مع الذكاء الاصطناعي في صميمها.", paragraphs: ["مهندس حاسوب ذو خبرة عملية في هندسة البرمجيات وأنظمة Backend وواجهات المؤسسات وقواعد البيانات وتطبيقات الويب الحديثة. تشمل تقنياتي الأساسية .NET/C# وASP.NET Core وJava/Spring Boot وPython.", "تتركز اهتماماتي العملية والبحثية على الذكاء الاصطناعي والتعلم العميق والرؤية الحاسوبية والأنظمة الذكية الواقعية. وتكمل React وReact Native وBlazor خبرتي في Backend."], cards: [{ value: "2026", label: "التخرج في هندسة الحاسوب" }, { value: ".NET + Java", label: "تركيز على Backend" }, { value: "AI / ML", label: "البحث والأنظمة التطبيقية" }] },
  projectsTitle: "أعمال حقيقية في البرمجيات والذكاء الاصطناعي والهندسة.",
  contact: { title: "لنبنِ معاً شيئاً ذا معنى.", description: "متاح للنقاش حول فرص هندسة البرمجيات وأنظمة Backend والذكاء الاصطناعي التطبيقي.", name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة", send: "إرسال الرسالة", location: "الموقع" },
  education: { degree: "دبلوم مهندس — هندسة الحاسوب", school: "EMSI", date: "التخرج: 2026" },
});

profileData.fr.experience = { role: "Stage PFE — Ingénierie logicielle", location: "Maroc", description: "Modernisation et développement du système d’information d’entreprise SIGMA, couvrant les interfaces applicatives et les interactions backend/base de données.", achievements: ["Développement et modernisation d’interfaces avec Blazor et MudBlazor, notamment Gestion des rejets et Suivi des rejets.", "Création de DataGrid avec filtrage, tri et validation.", "Intégration des couches .NET/C# et ASP.NET Core avec Entity Framework Core et SQL Server.", "Analyse de problèmes de débogage et de performance entre interface, backend et base de données."], tech: profileData.en.experience.tech };
profileData.ar.experience = { role: "تدريب مشروع التخرج — هندسة البرمجيات", location: "المغرب", description: "تحديث وتطوير نظام المعلومات المؤسسي SIGMA، بما يشمل واجهات التطبيقات والتكامل بين Backend وقاعدة البيانات.", achievements: ["تطوير وتحديث واجهات مؤسسية باستخدام Blazor وMudBlazor، ومنها Gestion des rejets وSuivi des rejets.", "إنشاء DataGrid مع التصفية والترتيب والتحقق من البيانات.", "ربط طبقات .NET/C# وASP.NET Core مع Entity Framework Core وSQL Server.", "تحليل مشاكل التصحيح والأداء بين الواجهة وBackend وقاعدة البيانات."], tech: profileData.en.experience.tech };

const frProjects = [
  ["Recherche sur la détection des maladies des feuilles de tomate en conditions réelles, en plein champ et sous serre.", ["Images annotées manuellement", "Benchmark de détection d’objets", "Évaluation de la précision et du déploiement"]],
  ["Application de dessin contrôlée par les gestes, en cours de développement : un éditeur canvas React associé à un système de suivi de la main construit from scratch avec PyTorch (détection de la main + estimation de 21 points clés), sans MediaPipe.", ["Éditeur canvas : dessin, formes, images, annuler/rétablir, sauvegarde locale et fichier", "Détecteur de mains anchor-free de type CenterNet", "Modèle de points clés mini U-Net à heatmaps avec soft-argmax (21 points)", "Suivi webcam en temps réel avec lissage exponentiel"]],
  ["Application desktop de vision par ordinateur centrée sur la reconnaissance faciale.", ["Processus de reconnaissance faciale", "Application desktop", "Traitement avec Python"]],
  ["Système académique analysant les données du sol et de l’environnement afin d’estimer les besoins d’irrigation et d’émettre des alertes.", ["Suivi de l’humidité du sol", "Analyse des capteurs", "Estimation des besoins", "Suivi en temps réel"]],
  ["Application mobile de chat en temps réel développée en Java avec Android Studio et un backend Spring Boot. Elle utilise les WebSockets, SMTP et une base MySQL hébergée sur Aiven.", ["Conversations en temps réel avec WebSockets", "Gestion des emails avec SMTP", "Base MySQL hébergée sur Aiven", "Architecture MVC et communication API via DTO"]],
  ["Interface web pour consulter, afficher et gérer des informations stockées en base de données.", ["Opérations CRUD", "Interaction avec la base", "Intégration backend"]],
];
const arProjects = [
  ["عمل بحثي للكشف عن أمراض أوراق الطماطم في ظروف الحقول والبيوت الزجاجية الواقعية.", ["صور مشروحة يدوياً", "مقارنة نماذج كشف الأجسام", "تقييم الدقة وقابلية النشر"]],
  ["تطبيق رسم يُتحكم فيه بالإيماءات قيد التطوير: محرر Canvas مبني بـReact مع نظام لتتبع اليد مبني من الصفر باستخدام PyTorch (كشف اليد + تقدير 21 نقطة مفصلية) دون الاعتماد على MediaPipe.", ["محرر Canvas: رسم وأشكال وصور وتراجع/إعادة وحفظ محلي أو في ملف", "كاشف يد بدون مراسي على نمط CenterNet", "نموذج نقاط مفصلية Mini U-Net بخرائط حرارية وsoft-argmax (21 نقطة)", "تتبع فوري عبر الكاميرا مع تنعيم أُسّي"]],
  ["تطبيق حاسوبي مكتبي للرؤية الحاسوبية يركز على التعرف على الوجوه.", ["معالجة التعرف على الوجه", "تطبيق مكتبي", "معالجة باستخدام Python"]],
  ["نظام أكاديمي يحلل بيانات التربة والبيئة لتقدير احتياجات الري ودعم التنبيهات الفورية.", ["مراقبة رطوبة التربة", "تحليل بيانات الحساسات", "تقدير احتياجات الري", "مراقبة فورية"]],
  ["تطبيق محادثة فورية للهواتف طُوّر بلغة Java باستخدام Android Studio، مع Backend مبني بـSpring Boot. يستخدم WebSockets وSMTP وقاعدة MySQL مستضافة على Aiven.", ["محادثات فورية باستخدام WebSockets", "إدارة البريد الإلكتروني عبر SMTP", "قاعدة MySQL مستضافة على Aiven", "بنية MVC وتواصل API باستخدام DTO"]],
  ["واجهة ويب للوصول إلى البيانات وعرضها وإدارتها.", ["عمليات CRUD", "التفاعل مع قاعدة البيانات", "تكامل Backend"]],
];
profileData.fr.projects = profileData.en.projects.map((project, index) => ({ ...project, description: frProjects[index][0], features: frProjects[index][1] }));
profileData.ar.projects = profileData.en.projects.map((project, index) => ({ ...project, description: arProjects[index][0], features: arProjects[index][1] }));
profileData.fr.projects[4] = { ...profileData.fr.projects[4], title: "Application mobile de chat en temps réel", category: "Mobile / Backend" };
profileData.ar.projects[4] = { ...profileData.ar.projects[4], title: "تطبيق محادثة فورية للهواتف", category: "تطبيقات الهاتف / Backend" };
profileData.fr.status = { completed: "Terminé", research: "Recherche", development: "Actuellement en développement", academic: "Projet académique", professional: "Travail professionnel" };
profileData.ar.status = { completed: "مكتمل", research: "بحث", development: "قيد التطوير حالياً", academic: "مشروع أكاديمي", professional: "عمل مهني" };

profileData.fr.skills = profileData.en.skills.map((group, index) => ({
  ...group,
  name: ["Intelligence artificielle et Machine Learning", "Backend et ingénierie logicielle", "Frontend", "Bases de données", "DevOps et infrastructure", "IoT et communication"][index],
  items: group.items.map((item) => ({
    "Artificial Intelligence": "Intelligence artificielle", "Machine Learning": "Apprentissage automatique", "Deep Learning": "Apprentissage profond", "Computer Vision": "Vision par ordinateur", "AI Agents": "Agents IA", "Sentence Transformers": "Transformers de phrases", "REST APIs": "API REST",
  }[item] ?? item)),
}));
profileData.ar.skills = profileData.en.skills.map((group, index) => ({
  ...group,
  name: ["الذكاء الاصطناعي والتعلم الآلي", "Backend وهندسة البرمجيات", "الواجهة الأمامية", "قواعد البيانات", "DevOps والبنية التحتية", "إنترنت الأشياء والاتصالات"][index],
  items: group.items.map((item) => ({
    "Artificial Intelligence": "الذكاء الاصطناعي", "Machine Learning": "التعلم الآلي", "Deep Learning": "التعلم العميق", "Computer Vision": "الرؤية الحاسوبية", "AI Agents": "وكلاء الذكاء الاصطناعي", "Sentence Transformers": "محولات الجمل", "REST APIs": "واجهات REST",
  }[item] ?? item)),
}));

const frProjectIdentity = [
  ["Détection des maladies des feuilles de tomate", "Vision par ordinateur"],
  ["Air Canvas", "Vision par ordinateur + Web"],
  ["FaceSmart", "Vision par ordinateur"],
  ["Irrigation intelligente / IoT", "IoT + IA"],
  ["Application mobile de chat en temps réel", "Mobile / Backend"],
  ["Interface web de gestion de données", "Web + données"],
];
const arProjectIdentity = [
  ["اكتشاف أمراض أوراق الطماطم", "الرؤية الحاسوبية"],
  ["Air Canvas", "الرؤية الحاسوبية + الويب"],
  ["FaceSmart", "الرؤية الحاسوبية"],
  ["الري الذكي / إنترنت الأشياء", "إنترنت الأشياء + الذكاء الاصطناعي"],
  ["تطبيق محادثة فورية للهواتف", "الهاتف / Backend"],
  ["واجهة ويب لإدارة البيانات", "الويب + البيانات"],
];
const frTechTerms = { "Computer Vision": "Vision par ordinateur", "Face Recognition": "Reconnaissance faciale", "Desktop Application": "Application desktop", "IoT Sensors": "Capteurs IoT", "AI / Machine Learning": "IA / Machine Learning", "Web Interface": "Interface web", Database: "Base de données" };
const arTechTerms = { "Computer Vision": "الرؤية الحاسوبية", "Face Recognition": "التعرف على الوجه", "Desktop Application": "تطبيق مكتبي", "IoT Sensors": "حساسات إنترنت الأشياء", "AI / Machine Learning": "الذكاء الاصطناعي / التعلم الآلي", "Web Interface": "واجهة ويب", Database: "قاعدة بيانات" };
profileData.fr.projects = profileData.fr.projects.map((project, index) => ({ ...project, title: frProjectIdentity[index][0], category: frProjectIdentity[index][1], tech: project.tech.map((term) => frTechTerms[term] ?? term) }));
profileData.ar.projects = profileData.ar.projects.map((project, index) => ({ ...project, title: arProjectIdentity[index][0], category: arProjectIdentity[index][1], tech: project.tech.map((term) => arTechTerms[term] ?? term) }));

profileData.en.experiences = [
  { company: "CGI", role: ".NET / Blazor Software Engineer Intern (PFE)", period: "6 months", location: "Hybrid — Rabat, Morocco", description: "Contributed to the progressive modernization of SIGMA, a legacy enterprise information system, from COBOL/EGL and mainframe technologies to the Microsoft .NET ecosystem.", achievements: ["Migrated legacy application screens to Blazor and MudBlazor while preserving existing business behavior.", "Contributed to the modernization of COBOL/JCL batch processing with .NET.", "Worked across ASP.NET Core services, REST APIs, EF Core repositories and SQL Server data access.", "Applied Clean Architecture and Domain-Driven Design principles in an Agile/Scrum environment."], tech: ["COBOL", "EGL", "JCL", ".NET", "C#", "ASP.NET Core", "Blazor", "MudBlazor", "EF Core", "SQL Server", "Clean Architecture", "DDD"] },
  { company: "UXV Center", role: "AI Chatbot Full-Stack Developer Intern", period: "2 months", location: "Remote — Switzerland", description: "Developed an AI-powered chatbot using full-stack technologies.", achievements: ["Contributed to web, mobile and backend components of the chatbot.", "Worked with React, React Native, FastAPI, Spring, MongoDB, Python and NLP."], tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP"] },
  { company: "OCP", role: "Software Developer Intern — Access Control Application", period: "2 months", location: "On-site — Safi, Morocco", description: "Contributed to the development of an Access Control Application for managing and monitoring access.", achievements: ["Worked on the Electron interface and Flask backend.", "Integrated Python face recognition and SQLAlchemy-based data access."], tech: ["Electron", "Flask", "Python", "Face Recognition", "SQLAlchemy"] },
];
profileData.fr.experiences = [
  { ...profileData.en.experiences[0], role: "Stagiaire ingénieur logiciel .NET / Blazor (PFE)", period: "6 mois", location: "Hybride — Rabat, Maroc", description: "Contribution à la modernisation progressive de SIGMA, un système d’information d’entreprise legacy, depuis COBOL/EGL et les technologies mainframe vers l’écosystème Microsoft .NET.", achievements: ["Migration d’écrans legacy vers Blazor et MudBlazor en préservant le comportement métier existant.", "Contribution à la modernisation des traitements batch COBOL/JCL avec .NET.", "Travail sur les services ASP.NET Core, les API REST, les repositories EF Core et l’accès aux données SQL Server.", "Application des principes de Clean Architecture et de Domain-Driven Design dans un environnement Agile/Scrum."] },
  { ...profileData.en.experiences[1], role: "Stagiaire développeur Full Stack — Chatbot IA", period: "2 mois", location: "À distance — Suisse", description: "Développement d’un chatbot alimenté par l’intelligence artificielle avec des technologies Full Stack.", achievements: ["Contribution aux composants web, mobile et backend du chatbot.", "Travail avec React, React Native, FastAPI, Spring, MongoDB, Python et NLP."] },
  { ...profileData.en.experiences[2], role: "Stagiaire développeur logiciel — Application de contrôle d’accès", period: "2 mois", location: "Sur site — Safi, Maroc", description: "Contribution au développement d’une application destinée à gérer et surveiller les accès.", achievements: ["Travail sur l’interface Electron et le backend Flask.", "Intégration de la reconnaissance faciale Python et de l’accès aux données avec SQLAlchemy."] },
];
profileData.ar.experiences = [
  { ...profileData.en.experiences[0], role: "متدرب هندسة برمجيات .NET / Blazor — مشروع التخرج", period: "6 أشهر", location: "نظام هجين — الرباط، المغرب", description: "المساهمة في التحديث التدريجي لنظام المعلومات المؤسسي القديم SIGMA، من COBOL/EGL وتقنيات الحاسوب المركزي إلى منظومة Microsoft .NET.", achievements: ["ترحيل الواجهات القديمة إلى Blazor وMudBlazor مع الحفاظ على السلوك الوظيفي الحالي.", "المساهمة في تحديث المعالجات الدفعية COBOL/JCL باستخدام .NET.", "العمل على خدمات ASP.NET Core وواجهات REST ومستودعات EF Core والوصول إلى بيانات SQL Server.", "تطبيق مبادئ Clean Architecture وDomain-Driven Design ضمن بيئة Agile/Scrum."] },
  { ...profileData.en.experiences[1], role: "متدرب تطوير Full Stack — روبوت محادثة ذكي", period: "شهران", location: "عن بُعد — سويسرا", description: "تطوير روبوت محادثة مدعوم بالذكاء الاصطناعي باستخدام تقنيات Full Stack.", achievements: ["المساهمة في مكونات الويب والهاتف وBackend.", "العمل باستخدام React وReact Native وFastAPI وSpring وMongoDB وPython وNLP."] },
  { ...profileData.en.experiences[2], role: "متدرب تطوير برمجيات — تطبيق التحكم في الولوج", period: "شهران", location: "حضوري — آسفي، المغرب", description: "المساهمة في تطوير تطبيق لإدارة ومراقبة الولوج.", achievements: ["العمل على واجهة Electron وخدمة Flask الخلفية.", "دمج التعرف على الوجه باستخدام Python والوصول إلى البيانات عبر SQLAlchemy."] },
];
