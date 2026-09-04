export const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      research: "Research",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      badge: "Open to Software Engineering opportunities",
      greeting: "Hello, I'm",
      name: "Marouane Morfi",
      title: "Computer Engineer / Software Developer & AI Enthusiast",
      description:
        "5th-year MIAGE engineering student focused on Full Stack development, with professional experience across React, React Native, Node.js, .NET/C#, Blazor, Java and Python. I enjoy building maintainable software and exploring AI, machine learning and computer vision.",
      projects: "View Projects",
      cv: "Download CV",
      contact: "Contact Me",
      location: "Marrakech, Morocco",
    },
    about: {
      eyebrow: "About me",
      title: "Software engineering foundations, with a growing AI focus.",
      p1:
        "I am a 5th-year MIAGE engineering student at EMSI Marrakech. My background combines software engineering, full-stack application development, databases and collaborative Agile delivery.",
      p2:
        "My professional goal is to contribute to robust software products while continuing to develop expertise in AI and machine learning. I am particularly interested in backend/frontend systems, clean architecture, data-intensive applications and applied computer vision.",
      cards: [
        { value: "3", label: "Professional internships" },
        { value: "Full Stack", label: "Frontend + backend experience" },
        { value: "AI / ML", label: "NLP, PyTorch & YOLO interests" },
      ],
    },
    skills: {
      eyebrow: "Technical skills",
      title: "A versatile stack for software, data and AI.",
      groups: [
        {
          name: "Programming",
          items: ["Python", "Java", "JavaScript", "C#", "SQL", "PL/SQL", "T-SQL"],
        },
        {
          name: "Frontend",
          items: ["React", "React Native", "HTML", "CSS", "Blazor", "Electron"],
        },
        {
          name: "Backend",
          items: ["Node.js", ".NET / C#", "Spring Boot", "FastAPI", "Flask"],
        },
        {
          name: "Databases",
          items: ["MongoDB", "SQL Server", "MySQL", "Oracle Database", "SQLAlchemy"],
        },
        {
          name: "AI / Machine Learning",
          items: ["PyTorch", "NLP", "YOLO", "Machine Learning", "Computer Vision", "Apache Spark"],
        },
        {
          name: "DevOps / Methods",
          items: ["Git", "GitHub", "Docker", "Azure DevOps", "Scrum", "GitHub Copilot", "Clean Architecture", "DDD"],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional experience across modernization, AI and full-stack delivery.",
      items: [
        {
          company: "CGI",
          role: "Final-Year Internship — Application modernization",
          period: "2026",
          description:
            "Migration of COBOL/EGL applications to .NET and Blazor in a large Agile/Scrum development environment.",
          achievements: [
            "Developed and migrated features with .NET/C# and Blazor from legacy COBOL and EGL code.",
            "Applied Clean Architecture and Domain-Driven Design principles.",
            "Managed and queried application data with Microsoft SQL Server.",
            "Used prompt engineering and AI-assisted development tools for code understanding, development and documentation.",
          ],
          tech: [".NET", "C#", "Blazor", "SQL Server", "DDD", "Clean Architecture", "Scrum"],
        },
        {
          company: "UXV Center",
          role: "4th-Year Internship — AI Chatbot Full Stack Development",
          period: "2025",
          description:
            "Full-stack development of an AI-based chatbot across web, mobile and backend microservices.",
          achievements: [
            "Built the web interface with React and the mobile application with React Native.",
            "Implemented backend microservices with FastAPI and Spring.",
            "Worked with MongoDB for application data storage and manipulation.",
            "Preprocessed data with Python and used NLP techniques.",
            "Collaborated and tracked delivery through Azure DevOps using Scrum.",
          ],
          tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP", "Azure DevOps"],
        },
        {
          company: "OCP",
          role: "3rd-Year Internship — Access Control System",
          period: "2024",
          description:
            "Development of an access control application integrating a Python face-recognition capability.",
          achievements: [
            "Developed the application frontend with Electron and backend with Flask.",
            "Used SQLAlchemy for database access and GitHub for version control.",
            "Integrated a face-recognition feature developed in Python.",
          ],
          tech: ["Electron", "Flask", "Python", "Face Recognition", "SQLAlchemy", "GitHub"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected engineering and AI projects.",
      note:
        "Project links are shown only when a verified repository or demo is available.",
      items: [
        {
          title: "Face Recognition Access Control",
          category: "Computer Vision",
          description:
            "Access-control system integrating a Python-based face recognition capability, developed during the OCP internship.",
          features: ["Face recognition integration", "Desktop interface", "Backend services", "Database access"],
          tech: ["Python", "Electron", "Flask", "SQLAlchemy"],
        },
        {
          title: "AI Chatbot — Web & Mobile",
          category: "AI / Full Stack",
          description:
            "AI-based chatbot delivered across a React web interface and React Native mobile application, backed by FastAPI and Spring services.",
          features: ["Web interface", "Mobile application", "Backend microservices", "NLP data preprocessing"],
          tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP"],
        },
        {
          title: "COBOL/EGL to .NET & Blazor Modernization",
          category: "Software Engineering",
          description:
            "Legacy application modernization work focused on migrating functionality to .NET/C# and Blazor with maintainable architecture.",
          features: ["Legacy code migration", "Blazor UI", "SQL Server integration", "Clean Architecture / DDD"],
          tech: [".NET", "C#", "Blazor", "SQL Server", "DDD"],
        },
        {
          title: "Pothole Detection",
          category: "Computer Vision",
          description:
            "Computer-vision project focused on detecting potholes in road imagery using object-detection techniques.",
          features: ["Image-based detection", "Object detection workflow", "Model evaluation"],
          tech: ["Python", "Computer Vision", "Deep Learning"],
        },
        {
          title: "IoT Smart Irrigation",
          category: "IoT",
          description:
            "IoT-oriented irrigation project designed around monitoring and supporting smarter irrigation decisions.",
          features: ["Sensor-oriented workflow", "Irrigation monitoring", "Connected-system architecture"],
          tech: ["IoT", "Embedded / Sensors", "Data Monitoring"],
        },
        {
          title: "Database Web Interface",
          category: "Data / Web",
          description:
            "Web interface project centered on accessing, presenting and managing database-backed information.",
          features: ["Database interaction", "Web interface", "Structured data management"],
          tech: ["Web", "SQL", "Database"],
        },
      ],
    },
    research: {
      eyebrow: "Research",
      title: "Benchmarking modern YOLO generations in real-world plant disease detection.",
      label: "Research / Comparative Benchmark",
      objectiveTitle: "Research objective",
      objective:
        "Compare multiple generations of YOLO, from YOLOv5 through YOLOv12, for detecting tomato leaves and identifying their health or disease state under real-world conditions.",
      datasetTitle: "Dataset",
      dataset:
        "The supplied CV does not specify the dataset size, class distribution or acquisition protocol. This area is ready for the exact information from the research paper or experiment logs.",
      modelsTitle: "Models compared",
      metricsTitle: "Evaluation metrics",
      metricsText:
        "The benchmark panel is prepared for precision, recall, F1-score, mAP@50, mAP@50:95 and inference time. Numerical values are intentionally not invented.",
      resultsTitle: "Benchmark results",
      resultsMissing:
        "Numerical benchmark results were not included in the supplied CV. Add the validated experiment values in src/data/research.js to automatically replace this message with the real comparison.",
      conclusionTitle: "Conclusions & observations",
      conclusion:
        "This section is structured to present the best accuracy/speed trade-off, model robustness and practical deployment observations once the validated research results are provided.",
    },
    education: {
      eyebrow: "Education & certifications",
      title: "Academic path and continuous learning.",
      schools: [
        {
          school: "École Marocaine des Sciences de l’Ingénieur (EMSI), Marrakech",
          degree: "5th Year MIAGE — Applied Computer Methods for Business Management",
          period: "2025–2026",
        },
        {
          school: "Université Chouaïb Doukkali, El Jadida",
          degree: "Bachelor's Degree in Physics — Fundamentals of Networks and Telecommunications",
          period: "2019–2023",
        },
      ],
      certTitle: "Certifications",
      certifications: [
        "GitHub Copilot — May 2026",
        "React Fundamentals — Coursera, November 2024",
        "Introduction to Machine Learning — Coursera, December 2025",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build reliable software and useful AI products.",
      description:
        "I am interested in junior software engineering, full-stack, backend and AI-oriented opportunities.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Phone",
    },
    footer: "Built with React — Software Engineering & AI portfolio.",
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      research: "Recherche",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      badge: "Ouvert aux opportunités en Software Engineering",
      greeting: "Bonjour, je suis",
      name: "Marouane Morfi",
      title: "Computer Engineer / Software Developer & AI Enthusiast",
      description:
        "Étudiant ingénieur en 5e année MIAGE, orienté développement Full Stack, avec des expériences professionnelles en React, React Native, Node.js, .NET/C#, Blazor, Java et Python. J'aime construire des logiciels maintenables et approfondir l'IA, le Machine Learning et la vision par ordinateur.",
      projects: "Voir les projets",
      cv: "Télécharger le CV",
      contact: "Me contacter",
      location: "Marrakech, Maroc",
    },
    about: {
      eyebrow: "À propos",
      title: "Des bases solides en software engineering, avec une orientation croissante vers l'IA.",
      p1:
        "Je suis étudiant ingénieur en 5e année MIAGE à l'EMSI Marrakech. Mon parcours combine ingénierie logicielle, développement Full Stack, bases de données et travail collaboratif en Agile.",
      p2:
        "Mon objectif est de contribuer à des produits logiciels robustes tout en développant mon expertise en IA et Machine Learning. Je m'intéresse particulièrement aux systèmes backend/frontend, à la Clean Architecture, aux applications data et à la vision par ordinateur.",
      cards: [
        { value: "3", label: "Stages professionnels" },
        { value: "Full Stack", label: "Expérience frontend + backend" },
        { value: "AI / ML", label: "NLP, PyTorch & YOLO" },
      ],
    },
    skills: {
      eyebrow: "Compétences techniques",
      title: "Une stack polyvalente pour le logiciel, la data et l'IA.",
      groups: [
        {
          name: "Programmation",
          items: ["Python", "Java", "JavaScript", "C#", "SQL", "PL/SQL", "T-SQL"],
        },
        {
          name: "Frontend",
          items: ["React", "React Native", "HTML", "CSS", "Blazor", "Electron"],
        },
        {
          name: "Backend",
          items: ["Node.js", ".NET / C#", "Spring Boot", "FastAPI", "Flask"],
        },
        {
          name: "Bases de données",
          items: ["MongoDB", "SQL Server", "MySQL", "Oracle Database", "SQLAlchemy"],
        },
        {
          name: "IA / Machine Learning",
          items: ["PyTorch", "NLP", "YOLO", "Machine Learning", "Computer Vision", "Apache Spark"],
        },
        {
          name: "DevOps / Méthodes",
          items: ["Git", "GitHub", "Docker", "Azure DevOps", "Scrum", "GitHub Copilot", "Clean Architecture", "DDD"],
        },
      ],
    },
    experience: {
      eyebrow: "Expériences",
      title: "Des expériences en modernisation, IA et développement Full Stack.",
      items: [
        {
          company: "CGI",
          role: "Stage PFE — Modernisation d'applications",
          period: "2026",
          description:
            "Migration d'applications COBOL/EGL vers .NET et Blazor au sein d'une grande équipe Agile/Scrum.",
          achievements: [
            "Développement et migration de fonctionnalités avec .NET/C# et Blazor à partir de code legacy COBOL et EGL.",
            "Application de Clean Architecture et Domain-Driven Design.",
            "Gestion et interrogation des données applicatives avec Microsoft SQL Server.",
            "Utilisation du prompt engineering et d'outils IA pour la compréhension, le développement et la documentation du code.",
          ],
          tech: [".NET", "C#", "Blazor", "SQL Server", "DDD", "Clean Architecture", "Scrum"],
        },
        {
          company: "UXV Center",
          role: "Stage de 4e année — Chatbot IA Full Stack",
          period: "2025",
          description:
            "Développement Full Stack d'un chatbot basé sur l'IA, couvrant web, mobile et microservices backend.",
          achievements: [
            "Développement de l'interface web avec React et de l'application mobile avec React Native.",
            "Mise en place de microservices backend avec FastAPI et Spring.",
            "Stockage et manipulation des données avec MongoDB.",
            "Prétraitement des données avec Python et utilisation de techniques NLP.",
            "Collaboration via Azure DevOps selon la méthodologie Scrum.",
          ],
          tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP", "Azure DevOps"],
        },
        {
          company: "OCP",
          role: "Stage de 3e année — Système de contrôle d'accès",
          period: "2024",
          description:
            "Développement d'une application de contrôle d'accès intégrant une fonctionnalité de reconnaissance faciale en Python.",
          achievements: [
            "Développement du frontend avec Electron et du backend avec Flask.",
            "Utilisation de SQLAlchemy pour l'accès aux données et de GitHub pour le versioning.",
            "Intégration d'une fonctionnalité de reconnaissance faciale développée en Python.",
          ],
          tech: ["Electron", "Flask", "Python", "Face Recognition", "SQLAlchemy", "GitHub"],
        },
      ],
    },
    projects: {
      eyebrow: "Projets",
      title: "Une sélection de projets Software Engineering et IA.",
      note:
        "Les liens GitHub/Demo sont affichés uniquement lorsqu'un dépôt ou une démo vérifiés sont disponibles.",
      items: [
        {
          title: "Face Recognition Access Control",
          category: "Computer Vision",
          description:
            "Système de contrôle d'accès intégrant une fonctionnalité de reconnaissance faciale en Python, développé lors du stage OCP.",
          features: ["Reconnaissance faciale", "Interface desktop", "Services backend", "Accès aux données"],
          tech: ["Python", "Electron", "Flask", "SQLAlchemy"],
        },
        {
          title: "AI Chatbot — Web & Mobile",
          category: "IA / Full Stack",
          description:
            "Chatbot basé sur l'IA avec interface web React, application React Native et services backend FastAPI/Spring.",
          features: ["Interface web", "Application mobile", "Microservices backend", "Prétraitement NLP"],
          tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP"],
        },
        {
          title: "Modernisation COBOL/EGL vers .NET & Blazor",
          category: "Software Engineering",
          description:
            "Travail de modernisation d'applications legacy vers .NET/C# et Blazor avec une architecture orientée maintenabilité.",
          features: ["Migration legacy", "Interface Blazor", "Intégration SQL Server", "Clean Architecture / DDD"],
          tech: [".NET", "C#", "Blazor", "SQL Server", "DDD"],
        },
        {
          title: "Pothole Detection",
          category: "Computer Vision",
          description:
            "Projet de vision par ordinateur centré sur la détection de nids-de-poule dans des images routières à l'aide de techniques de détection d'objets.",
          features: ["Détection sur image", "Object detection", "Évaluation de modèle"],
          tech: ["Python", "Computer Vision", "Deep Learning"],
        },
        {
          title: "IoT Smart Irrigation",
          category: "IoT",
          description:
            "Projet d'irrigation connecté orienté supervision et aide à une gestion plus intelligente de l'irrigation.",
          features: ["Workflow capteurs", "Suivi de l'irrigation", "Architecture connectée"],
          tech: ["IoT", "Embedded / Sensors", "Data Monitoring"],
        },
        {
          title: "Database Web Interface",
          category: "Data / Web",
          description:
            "Interface web centrée sur l'accès, l'affichage et la gestion d'informations stockées en base de données.",
          features: ["Interaction base de données", "Interface web", "Gestion de données structurées"],
          tech: ["Web", "SQL", "Database"],
        },
      ],
    },
    research: {
      eyebrow: "Recherche",
      title: "Benchmark des générations YOLO pour la détection de maladies foliaires en conditions réelles.",
      label: "Travail de recherche / Benchmark comparatif",
      objectiveTitle: "Objectif de la recherche",
      objective:
        "Comparer plusieurs générations de YOLO, de YOLOv5 à YOLOv12, pour détecter les feuilles de tomates et identifier leur état de santé ou leurs maladies dans des conditions réelles.",
      datasetTitle: "Dataset",
      dataset:
        "Le CV fourni ne précise pas la taille du dataset, la répartition des classes ni le protocole d'acquisition. Cette zone est prête à recevoir les informations exactes de l'article ou des logs d'expérimentation.",
      modelsTitle: "Modèles comparés",
      metricsTitle: "Métriques d'évaluation",
      metricsText:
        "Le benchmark est préparé pour Precision, Recall, F1-score, mAP@50, mAP@50:95 et temps d'inférence. Les valeurs numériques ne sont volontairement pas inventées.",
      resultsTitle: "Résultats du benchmark",
      resultsMissing:
        "Les résultats numériques du benchmark ne figurent pas dans le CV fourni. Ajoute les valeurs validées dans src/data/research.js pour remplacer automatiquement ce message par la comparaison réelle.",
      conclusionTitle: "Conclusions et observations",
      conclusion:
        "Cette partie est prête à présenter le meilleur compromis précision/vitesse, la robustesse des modèles et les observations liées au déploiement dès que les résultats validés seront disponibles.",
    },
    education: {
      eyebrow: "Formation & certifications",
      title: "Parcours académique et apprentissage continu.",
      schools: [
        {
          school: "École Marocaine des Sciences de l’Ingénieur (EMSI), Marrakech",
          degree: "5e année MIAGE — Méthodes Informatiques Appliquées à la Gestion des Entreprises",
          period: "2025–2026",
        },
        {
          school: "Université Chouaïb Doukkali, El Jadida",
          degree: "Licence en Physique — Fondamentaux des Réseaux et Télécommunications",
          period: "2019–2023",
        },
      ],
      certTitle: "Certifications",
      certifications: [
        "GitHub Copilot — Mai 2026",
        "Fondamentaux de React — Coursera, Novembre 2024",
        "Introduction au Machine Learning — Coursera, Décembre 2025",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Construisons des logiciels fiables et des produits IA utiles.",
      description:
        "Je suis intéressé par les opportunités junior en Software Engineering, Full Stack, backend et projets orientés IA.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Téléphone",
    },
    footer: "Conçu avec React — Portfolio Software Engineering & AI.",
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      research: "البحث",
      education: "التكوين",
      contact: "تواصل",
    },
    hero: {
      badge: "متاح لفرص Software Engineering",
      greeting: "مرحباً، أنا",
      name: "Marouane Morfi",
      title: "مهندس حاسوب / مطور برمجيات ومهتم بالذكاء الاصطناعي",
      description:
        "طالب هندسة في السنة الخامسة MIAGE، متخصص في تطوير Full Stack، ولدي تجارب مهنية باستخدام React وReact Native وNode.js و.NET/C# وBlazor وJava وPython. أهتم ببناء برمجيات قابلة للصيانة وتطوير خبرتي في الذكاء الاصطناعي والتعلم الآلي والرؤية الحاسوبية.",
      projects: "عرض المشاريع",
      cv: "تحميل السيرة الذاتية",
      contact: "تواصل معي",
      location: "مراكش، المغرب",
    },
    about: {
      eyebrow: "نبذة عني",
      title: "أساس قوي في هندسة البرمجيات مع توجه متزايد نحو الذكاء الاصطناعي.",
      p1:
        "أنا طالب هندسة في السنة الخامسة MIAGE في EMSI بمراكش. يجمع مساري بين هندسة البرمجيات وتطوير Full Stack وقواعد البيانات والعمل التعاوني بمنهجية Agile.",
      p2:
        "هدفي المهني هو المساهمة في تطوير منتجات برمجية قوية مع تعميق خبرتي في الذكاء الاصطناعي والتعلم الآلي. أهتم خصوصاً بأنظمة Backend وFrontend وClean Architecture وتطبيقات البيانات والرؤية الحاسوبية.",
      cards: [
        { value: "3", label: "تدريبات مهنية" },
        { value: "Full Stack", label: "خبرة Frontend + Backend" },
        { value: "AI / ML", label: "اهتمام بـ NLP وPyTorch وYOLO" },
      ],
    },
    skills: {
      eyebrow: "المهارات التقنية",
      title: "تقنيات متنوعة للبرمجيات والبيانات والذكاء الاصطناعي.",
      groups: [
        { name: "لغات البرمجة", items: ["Python", "Java", "JavaScript", "C#", "SQL", "PL/SQL", "T-SQL"] },
        { name: "Frontend", items: ["React", "React Native", "HTML", "CSS", "Blazor", "Electron"] },
        { name: "Backend", items: ["Node.js", ".NET / C#", "Spring Boot", "FastAPI", "Flask"] },
        { name: "قواعد البيانات", items: ["MongoDB", "SQL Server", "MySQL", "Oracle Database", "SQLAlchemy"] },
        { name: "الذكاء الاصطناعي", items: ["PyTorch", "NLP", "YOLO", "Machine Learning", "Computer Vision", "Apache Spark"] },
        { name: "DevOps والمنهجيات", items: ["Git", "GitHub", "Docker", "Azure DevOps", "Scrum", "GitHub Copilot", "Clean Architecture", "DDD"] },
      ],
    },
    experience: {
      eyebrow: "الخبرات",
      title: "تجارب مهنية في تحديث الأنظمة والذكاء الاصطناعي وFull Stack.",
      items: [
        {
          company: "CGI",
          role: "تدريب مشروع التخرج — تحديث التطبيقات",
          period: "2026",
          description:
            "ترحيل تطبيقات COBOL/EGL إلى .NET وBlazor ضمن فريق تطوير كبير يعمل بمنهجية Agile/Scrum.",
          achievements: [
            "تطوير وترحيل وظائف باستخدام .NET/C# وBlazor انطلاقاً من كود COBOL وEGL قديم.",
            "تطبيق Clean Architecture وDomain-Driven Design.",
            "إدارة واستعلام بيانات التطبيق باستخدام Microsoft SQL Server.",
            "استخدام Prompt Engineering وأدوات الذكاء الاصطناعي لفهم الكود وتطويره وتوثيقه.",
          ],
          tech: [".NET", "C#", "Blazor", "SQL Server", "DDD", "Clean Architecture", "Scrum"],
        },
        {
          company: "UXV Center",
          role: "تدريب السنة الرابعة — تطوير Chatbot بالذكاء الاصطناعي",
          period: "2025",
          description:
            "تطوير Full Stack لروبوت محادثة يعتمد على الذكاء الاصطناعي عبر الويب والموبايل وخدمات Backend.",
          achievements: [
            "تطوير واجهة الويب باستخدام React وتطبيق الموبايل باستخدام React Native.",
            "إنشاء خدمات Backend باستخدام FastAPI وSpring.",
            "استخدام MongoDB لتخزين ومعالجة بيانات التطبيق.",
            "معالجة البيانات مسبقاً باستخدام Python وتقنيات NLP.",
            "التعاون وتتبع التطوير عبر Azure DevOps وفق Scrum.",
          ],
          tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP", "Azure DevOps"],
        },
        {
          company: "OCP",
          role: "تدريب السنة الثالثة — نظام التحكم في الولوج",
          period: "2024",
          description:
            "تطوير تطبيق للتحكم في الولوج يدمج ميزة التعرف على الوجه مطورة بلغة Python.",
          achievements: [
            "تطوير الواجهة باستخدام Electron والـBackend باستخدام Flask.",
            "استخدام SQLAlchemy للوصول إلى البيانات وGitHub لإدارة الإصدارات.",
            "دمج وظيفة التعرف على الوجه المطورة باستخدام Python.",
          ],
          tech: ["Electron", "Flask", "Python", "Face Recognition", "SQLAlchemy", "GitHub"],
        },
      ],
    },
    projects: {
      eyebrow: "المشاريع",
      title: "مجموعة مختارة من مشاريع هندسة البرمجيات والذكاء الاصطناعي.",
      note: "تظهر روابط GitHub أو Demo فقط عند توفر رابط موثّق.",
      items: [
        {
          title: "Face Recognition Access Control",
          category: "Computer Vision",
          description: "نظام للتحكم في الولوج يدمج التعرف على الوجه باستخدام Python، تم تطويره خلال تدريب OCP.",
          features: ["التعرف على الوجه", "واجهة Desktop", "خدمات Backend", "الوصول إلى البيانات"],
          tech: ["Python", "Electron", "Flask", "SQLAlchemy"],
        },
        {
          title: "AI Chatbot — Web & Mobile",
          category: "AI / Full Stack",
          description: "روبوت محادثة بالذكاء الاصطناعي بواجهة React للويب وتطبيق React Native وخدمات FastAPI/Spring.",
          features: ["واجهة ويب", "تطبيق موبايل", "خدمات Backend", "معالجة NLP"],
          tech: ["React", "React Native", "FastAPI", "Spring", "MongoDB", "Python", "NLP"],
        },
        {
          title: "COBOL/EGL to .NET & Blazor Modernization",
          category: "Software Engineering",
          description: "تحديث تطبيقات Legacy إلى .NET/C# وBlazor مع التركيز على قابلية الصيانة.",
          features: ["ترحيل Legacy", "واجهة Blazor", "SQL Server", "Clean Architecture / DDD"],
          tech: [".NET", "C#", "Blazor", "SQL Server", "DDD"],
        },
        {
          title: "Pothole Detection",
          category: "Computer Vision",
          description: "مشروع رؤية حاسوبية يركز على اكتشاف الحفر في صور الطرق باستخدام تقنيات Object Detection.",
          features: ["اكتشاف من الصور", "Object Detection", "تقييم النموذج"],
          tech: ["Python", "Computer Vision", "Deep Learning"],
        },
        {
          title: "IoT Smart Irrigation",
          category: "IoT",
          description: "مشروع ري ذكي متصل يركز على المراقبة ودعم قرارات أفضل لإدارة الري.",
          features: ["حساسات", "مراقبة الري", "نظام متصل"],
          tech: ["IoT", "Embedded / Sensors", "Data Monitoring"],
        },
        {
          title: "Database Web Interface",
          category: "Data / Web",
          description: "واجهة ويب للوصول إلى البيانات المخزنة في قواعد البيانات وعرضها وإدارتها.",
          features: ["التفاعل مع قاعدة البيانات", "واجهة ويب", "إدارة بيانات منظمة"],
          tech: ["Web", "SQL", "Database"],
        },
      ],
    },
    research: {
      eyebrow: "البحث",
      title: "مقارنة أجيال YOLO لاكتشاف أمراض أوراق الطماطم في ظروف واقعية.",
      label: "بحث / Benchmark مقارن",
      objectiveTitle: "هدف البحث",
      objective:
        "مقارنة عدة أجيال من YOLO، من YOLOv5 إلى YOLOv12، لاكتشاف أوراق الطماطم وتحديد حالتها الصحية أو المرضية في ظروف واقعية.",
      datasetTitle: "البيانات",
      dataset:
        "السيرة الذاتية المرفقة لا تحدد حجم مجموعة البيانات أو توزيع الفئات أو بروتوكول جمع الصور. هذا الجزء جاهز لإضافة المعلومات الدقيقة من ورقة البحث أو سجلات التجارب.",
      modelsTitle: "النماذج المقارنة",
      metricsTitle: "مقاييس التقييم",
      metricsText:
        "تم تجهيز قسم المقارنة لعرض Precision وRecall وF1-score وmAP@50 وmAP@50:95 وزمن الاستدلال. لم يتم اختراع أي قيم رقمية.",
      resultsTitle: "نتائج المقارنة",
      resultsMissing:
        "النتائج الرقمية غير موجودة في السيرة الذاتية المرفقة. أضف القيم الموثقة في src/data/research.js ليتم عرض المقارنة الحقيقية تلقائياً.",
      conclusionTitle: "الخلاصة والملاحظات",
      conclusion:
        "هذا القسم جاهز لعرض أفضل توازن بين الدقة والسرعة ومتانة النماذج وملاحظات النشر العملي بعد توفير النتائج الموثقة.",
    },
    education: {
      eyebrow: "التكوين والشهادات",
      title: "المسار الأكاديمي والتعلم المستمر.",
      schools: [
        {
          school: "المدرسة المغربية لعلوم المهندس (EMSI)، مراكش",
          degree: "السنة الخامسة MIAGE — المعلوميات المطبقة على إدارة المقاولات",
          period: "2025–2026",
        },
        {
          school: "جامعة شعيب الدكالي، الجديدة",
          degree: "إجازة في الفيزياء — أساسيات الشبكات والاتصالات",
          period: "2019–2023",
        },
      ],
      certTitle: "الشهادات",
      certifications: [
        "GitHub Copilot — مايو 2026",
        "أساسيات React — Coursera، نوفمبر 2024",
        "مقدمة في Machine Learning — Coursera، ديسمبر 2025",
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "لنبنِ برمجيات موثوقة ومنتجات ذكاء اصطناعي مفيدة.",
      description:
        "مهتم بفرص Junior في Software Engineering وFull Stack وBackend والمشاريع المرتبطة بالذكاء الاصطناعي.",
      email: "البريد الإلكتروني",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "الهاتف",
    },
    footer: "تم تطويره بـ React — Portfolio Software Engineering & AI.",
  },
};

export const contactInfo = {
  email: "marouanemorfi@gmail.com",
  phone: "+212 620 550 787",
  linkedin: "https://www.linkedin.com/in/marouane-morfi-3a5a08294/",
  github: "https://github.com/marouanemrf",
  location: "Marrakech, Morocco",
};
