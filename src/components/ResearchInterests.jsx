import { ArrowRight, BarChart3, CheckCircle2, Crop, Database, FileText, FlaskConical, Hand, Lightbulb, Microscope, Radio, RefreshCw, ScanSearch, Sigma, Target, Video, Workflow } from "lucide-react";
import { usePreferences } from "../context/PreferencesContext";

const interests = {
  en: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Object Detection", "Large Language Models", "RAG", "AI Agents", "Edge AI", "Intelligent Systems", "IoT + AI"],
  fr: ["Intelligence artificielle", "Apprentissage automatique", "Apprentissage profond", "Vision par ordinateur", "Détection d’objets", "Grands modèles de langage", "RAG", "Agents IA", "IA en périphérie", "Systèmes intelligents", "IoT + IA"],
  ar: ["الذكاء الاصطناعي", "التعلم الآلي", "التعلم العميق", "الرؤية الحاسوبية", "كشف الأجسام", "نماذج اللغة الكبيرة", "RAG", "وكلاء الذكاء الاصطناعي", "ذكاء الحافة", "الأنظمة الذكية", "إنترنت الأشياء والذكاء الاصطناعي"],
};

const stepIcons = [ScanSearch, Crop, Hand, Video];
const researchTags = ["PyTorch", "OpenCV", "CenterNet", "U-Net", "Heatmap regression", "Soft-argmax", "Wing loss", "Focal loss", "EPE / PCK", "mAP@0.5", "Human-in-the-loop"];

// Validation error per keypoint (px, 256×256 crop), read from the journal's per-keypoint chart.
const keypointEpe = [9.2, 11.2, 13.1, 12.5, 18.6, 13.6, 12.3, 14.5, 17.6, 11.4, 12.2, 14.5, 16.0, 11.6, 13.5, 16.1, 16.9, 14.0, 16.3, 18.8, 24.8];

const formulas = [
  ["Crop", "p′ = s · R(θ) · (p − c) + 128"],
  ["Heatmap", "H(x, y) = exp(−[(x − u)² + (y − v)²] / 2σ²)"],
  ["Detector", "L = focal + 0.1 · L1(size) + L1(offset)"],
  ["Keypoints", "L = MSE + 0.1 · wing + 0.05 · bone"],
  ["Soft-argmax", "u = Σ x · softmax(β · H)"],
  ["Webcam", "p̄ₜ = 0.5 · pₜ + 0.5 · p̄ₜ₋₁"],
];

const handResearch = {
  en: {
    label: "Research / From-scratch system",
    title: "From-Scratch Real-Time Hand Detection & 21-Keypoint Estimation",
    doneBadge: "Training complete",
    stageBadge: "Now: live learning stage",
    journal: "Read the project journal (PDF)",
    abstract: "Abstract",
    abstractText: "This project builds, entirely from scratch in PyTorch, a real-time system that detects hands and places 21 keypoints on each hand from a webcam — no pretrained weights, no Ultralytics, no MediaPipe. Following the two-stage design of MediaPipe Hands, a CenterNet-style detector finds the hands, an affine transform crops each one to 256 × 256, and a U-Net predicts 21 heatmaps that soft-argmax turns into coordinates. After 30 epochs, the detector reaches 99% precision and 98% recall, and the keypoint model reaches PCK@0.2 ≈ 95%. The system powers the Air Canvas project.",
    objectiveTitle: "Research objective",
    objective: "Enable touchless human-computer interaction from a simple webcam: gesture commands, sign-to-text for people with hearing or speech disabilities, air writing and laptop control.",
    datasetTitle: "Dataset & hardware",
    dataset: "Ultralytics hand-keypoints: 18,776 training hands and 7,992 validation hands, 68 values per hand (box + 21 × (x, y, v)). Trained on an Intel Core i7 11th Gen with an NVIDIA RTX 3060 and 16 GB RAM.",
    pipelineTitle: "Model pipeline",
    steps: [
      ["Find hands", "CenterNet · 5.96M", "384 × 384 → 96 × 96 maps"],
      ["Crop", "Affine transform M", "box × 1.25 → 256 × 256"],
      ["Place points", "U-Net · 3.49M", "21 heatmaps 64 × 64 → (x, y)"],
      ["Real time", "Tracking + smoothing", "detector runs only when the hand is lost"],
    ],
    mathTitle: "Key mathematics",
    mathText: "Both models are trained with Adam and a cosine learning rate from 1e-3 to 0. Boxes are decoded with a 3 × 3 max-pool peak search and NMS (IoU > 0.5).",
    resultsTitle: "Training results (30 epochs)",
    columns: ["Model", "Metric", "Result", "Reading"],
    results: [
      ["Detector", "Precision", "99%", "almost no false alarms"],
      ["Detector", "Recall", "98%", "misses 2 hands in 100"],
      ["Detector", "Train / val loss", "2.0 / 2.45", "small gap, no overfitting"],
      ["Keypoints", "EPE", "≈ 14.7 px (from 48)", "≈ 7% of hand size"],
      ["Keypoints", "PCK@0.2", "≈ 95% (from 61%)", "95 of 100 points within 51 px"],
    ],
    chartTitle: "Validation error per keypoint (px)",
    chartWrist: "wrist",
    chartTip: "little tip",
    chartPoint: "Keypoint",
    findingsTitle: "Key findings",
    findings: [
      "Both models converge smoothly over full-dataset epochs, and validation follows training without diverging.",
      "The error grows toward the fingertips: about 9 px at the wrist versus about 25 px at the little fingertip.",
      "The detector loss is dominated by the box-size term and the keypoint loss by the wing term, so the losses need rebalancing.",
    ],
    stageTitle: "Current stage: live learning (human-in-the-loop)",
    stage: [
      "Test the full pipeline on the live webcam and measure keypoint error on detector crops.",
      "The user corrects boxes and points live; corrected samples are collected.",
      "The models are fine-tuned on these corrections, and the cycle repeats.",
      "In parallel: soft-argmax grid fix (β = 20–50), loss rebalancing and mAP@0.5 / 0.75 evaluation.",
    ],
    highlights: "Research highlights",
  },
  fr: {
    label: "Recherche / Système from scratch",
    title: "Détection de mains et estimation de 21 points clés en temps réel, from scratch",
    doneBadge: "Entraînement terminé",
    stageBadge: "En cours : phase de live learning",
    journal: "Lire le journal du projet (PDF)",
    abstract: "Résumé",
    abstractText: "Ce projet construit, entièrement from scratch en PyTorch, un système temps réel qui détecte les mains et place 21 points clés sur chaque main à partir d’une webcam — sans poids pré-entraînés, sans Ultralytics ni MediaPipe. Sur le modèle en deux étapes de MediaPipe Hands, un détecteur de type CenterNet trouve les mains, une transformation affine découpe chacune en 256 × 256, puis un U-Net prédit 21 heatmaps que le soft-argmax convertit en coordonnées. Après 30 époques, le détecteur atteint 99 % de précision et 98 % de rappel, et le modèle de points clés un PCK@0,2 ≈ 95 %. Le système alimente le projet Air Canvas.",
    objectiveTitle: "Objectif de recherche",
    objective: "Permettre une interaction homme-machine sans contact avec une simple webcam : commandes gestuelles, traduction des signes en texte pour les personnes sourdes ou muettes, écriture dans l’air et contrôle de l’ordinateur.",
    datasetTitle: "Dataset et matériel",
    dataset: "Ultralytics hand-keypoints : 18 776 mains en entraînement et 7 992 en validation, 68 valeurs par main (boîte + 21 × (x, y, v)). Entraîné sur un Intel Core i7 11e génération avec une NVIDIA RTX 3060 et 16 Go de RAM.",
    pipelineTitle: "Pipeline du modèle",
    steps: [
      ["Trouver les mains", "CenterNet · 5,96 M", "384 × 384 → cartes 96 × 96"],
      ["Découper", "Transformation affine M", "boîte × 1,25 → 256 × 256"],
      ["Placer les points", "U-Net · 3,49 M", "21 heatmaps 64 × 64 → (x, y)"],
      ["Temps réel", "Suivi + lissage", "le détecteur ne tourne que si la main est perdue"],
    ],
    mathTitle: "Mathématiques clés",
    mathText: "Les deux modèles sont entraînés avec Adam et un taux d’apprentissage cosinus de 1e-3 à 0. Les boîtes sont décodées par recherche de pics (max-pool 3 × 3) puis NMS (IoU > 0,5).",
    resultsTitle: "Résultats d’entraînement (30 époques)",
    columns: ["Modèle", "Métrique", "Résultat", "Lecture"],
    results: [
      ["Détecteur", "Précision", "99 %", "presque aucune fausse alerte"],
      ["Détecteur", "Rappel", "98 %", "rate 2 mains sur 100"],
      ["Détecteur", "Perte train / val", "2,0 / 2,45", "faible écart, pas de surapprentissage"],
      ["Points clés", "EPE", "≈ 14,7 px (contre 48)", "≈ 7 % de la taille de la main"],
      ["Points clés", "PCK@0,2", "≈ 95 % (contre 61 %)", "95 points sur 100 à moins de 51 px"],
    ],
    chartTitle: "Erreur de validation par point clé (px)",
    chartWrist: "poignet",
    chartTip: "bout auriculaire",
    chartPoint: "Point",
    findingsTitle: "Résultats clés",
    findings: [
      "Les deux modèles convergent régulièrement sur des époques complètes, et la validation suit l’entraînement sans diverger.",
      "L’erreur augmente vers le bout des doigts : environ 9 px au poignet contre environ 25 px au bout de l’auriculaire.",
      "La perte du détecteur est dominée par le terme de taille et celle des points clés par la wing loss : les pertes doivent être rééquilibrées.",
    ],
    stageTitle: "Phase actuelle : live learning (humain dans la boucle)",
    stage: [
      "Tester le pipeline complet sur webcam en direct et mesurer l’erreur des points clés sur les découpes du détecteur.",
      "L’utilisateur corrige les boîtes et les points en direct ; les échantillons corrigés sont collectés.",
      "Les modèles sont ré-entraînés (fine-tuning) sur ces corrections, puis le cycle recommence.",
      "En parallèle : correction de la grille du soft-argmax (β = 20–50), rééquilibrage des pertes et évaluation mAP@0,5 / 0,75.",
    ],
    highlights: "Points clés de la recherche",
  },
  ar: {
    label: "بحث / نظام من الصفر",
    title: "كشف اليد وتقدير 21 نقطة مفصلية في الوقت الفعلي، من الصفر",
    doneBadge: "اكتمل التدريب",
    stageBadge: "الآن: مرحلة التعلم المباشر",
    journal: "قراءة يومية المشروع (PDF)",
    abstract: "الملخص",
    abstractText: "يبني هذا المشروع من الصفر بالكامل باستخدام PyTorch نظاماً يعمل في الوقت الفعلي يكشف اليدين ويضع 21 نقطة مفصلية على كل يد عبر الكاميرا — دون أوزان مدربة مسبقاً ودون Ultralytics أو MediaPipe. على غرار تصميم MediaPipe Hands ذي المرحلتين، يحدد كاشف من نوع CenterNet موقع اليدين، ثم يقتطع تحويل أفيني كل يد بحجم 256 × 256، ويتنبأ U-Net بـ21 خريطة حرارية يحوّلها soft-argmax إلى إحداثيات. بعد 30 حقبة، بلغ الكاشف دقة 99% واستدعاء 98%، وبلغ نموذج النقاط PCK@0.2 ≈ 95%. وهو أساس مشروع Air Canvas.",
    objectiveTitle: "هدف البحث",
    objective: "تمكين تفاعل بين الإنسان والحاسوب دون لمس باستخدام كاميرا بسيطة: أوامر بالإيماءات، وتحويل لغة الإشارة إلى نص لذوي الإعاقة السمعية أو النطقية، والكتابة في الهواء، والتحكم في الحاسوب.",
    datasetTitle: "البيانات والعتاد",
    dataset: "مجموعة Ultralytics hand-keypoints: ‏18,776 يداً للتدريب و7,992 للتحقق، 68 قيمة لكل يد (صندوق + 21 × (x, y, v)). التدريب على Intel Core i7 الجيل 11 مع NVIDIA RTX 3060 و16 GB RAM.",
    pipelineTitle: "خط معالجة النموذج",
    steps: [
      ["إيجاد اليدين", "CenterNet · 5.96M", "384 × 384 ← خرائط 96 × 96"],
      ["الاقتطاع", "تحويل أفيني M", "الصندوق × 1.25 ← 256 × 256"],
      ["وضع النقاط", "U-Net · 3.49M", "21 خريطة 64 × 64 ← (x, y)"],
      ["الوقت الفعلي", "تتبع + تنعيم", "لا يعمل الكاشف إلا عند فقدان اليد"],
    ],
    mathTitle: "الرياضيات الأساسية",
    mathText: "يُدرَّب النموذجان باستخدام Adam ومعدل تعلم جيبي من 1e-3 إلى 0. تُفك الصناديق بالبحث عن القمم (max-pool 3 × 3) ثم NMS ‏(IoU > 0.5).",
    resultsTitle: "نتائج التدريب (30 حقبة)",
    columns: ["النموذج", "المقياس", "النتيجة", "القراءة"],
    results: [
      ["الكاشف", "الدقة", "99%", "إنذارات خاطئة شبه منعدمة"],
      ["الكاشف", "الاستدعاء", "98%", "يفوّت يدين من كل 100"],
      ["الكاشف", "خسارة التدريب / التحقق", "2.0 / 2.45", "فجوة صغيرة، دون فرط تعلم"],
      ["النقاط", "EPE", "≈ 14.7 بكسل (من 48)", "≈ 7% من حجم اليد"],
      ["النقاط", "PCK@0.2", "≈ 95% (من 61%)", "95 نقطة من 100 ضمن 51 بكسل"],
    ],
    chartTitle: "خطأ التحقق لكل نقطة (بكسل)",
    chartWrist: "المعصم",
    chartTip: "طرف الخنصر",
    chartPoint: "النقطة",
    findingsTitle: "النتائج الرئيسية",
    findings: [
      "يتقارب النموذجان بسلاسة عبر حقب كاملة، ويتبع التحقق التدريب دون تباعد.",
      "يزداد الخطأ نحو أطراف الأصابع: نحو 9 بكسل عند المعصم مقابل نحو 25 بكسل عند طرف الخنصر.",
      "تهيمن حدّ الحجم على خسارة الكاشف وwing loss على خسارة النقاط، لذا يجب إعادة موازنة الخسائر.",
    ],
    stageTitle: "المرحلة الحالية: التعلم المباشر (الإنسان في الحلقة)",
    stage: [
      "اختبار خط المعالجة الكامل على الكاميرا مباشرة وقياس خطأ النقاط على مقتطعات الكاشف.",
      "يصحح المستخدم الصناديق والنقاط مباشرة، وتُجمع العينات المصححة.",
      "يُعاد ضبط النماذج على هذه التصحيحات، ثم تتكرر الدورة.",
      "بالتوازي: إصلاح شبكة soft-argmax ‏(β = 20–50)، وإعادة موازنة الخسائر، وحساب mAP@0.5 / 0.75.",
    ],
    highlights: "أبرز نقاط البحث",
  },
};

export default function ResearchInterests({ t }) {
  const { language } = usePreferences();
  const research = handResearch[language];
  const maxEpe = 25;

  return <section className="section section-muted research-section"><div className="shell">
    <div className="research-hero panel reveal">
      <div>
        <span className="research-label"><Microscope size={16} /> {research.label}</span>
        <h3>{research.title}</h3>
      </div>
      <div className="publication-actions">
        <span className="development-badge development-badge-done"><CheckCircle2 size={15} /> {research.doneBadge}</span>
        <span className="development-badge"><Radio size={15} /> {research.stageBadge}</span>
        <a className="button button-primary" href="/Marouane_Morfi_Journal_Summary.pdf" target="_blank" rel="noreferrer">
          <FileText size={17} /> {research.journal}
        </a>
      </div>
    </div>

    <article className="panel abstract-card reveal">
      <span>{research.abstract}</span>
      <p>{research.abstractText}</p>
    </article>

    <div className="research-grid">
      <article className="panel research-card reveal">
        <Target size={22} />
        <h4>{research.objectiveTitle}</h4>
        <p>{research.objective}</p>
      </article>
      <article className="panel research-card reveal">
        <Database size={22} />
        <h4>{research.datasetTitle}</h4>
        <p>{research.dataset}</p>
      </article>
    </div>

    <div className="panel model-strip reveal">
      <div className="research-subhead">
        <Workflow size={20} />
        <h4>{research.pipelineTitle}</h4>
      </div>
      <div className="architecture-flow">{research.steps.map(([stage, model, io], index) => {
        const Icon = stepIcons[index];
        return <div className="architecture-step" key={stage}>
          <span><Icon size={20} /></span>
          <small className="pipeline-index">{index + 1} · {stage}</small>
          <strong>{model}</strong>
          <small>{io}</small>
          {index < research.steps.length - 1 && <ArrowRight className="flow-arrow" size={19} />}
        </div>;
      })}</div>
    </div>

    <div className="research-grid research-grid-results">
      <article className="panel research-card reveal">
        <Sigma size={22} />
        <h4>{research.mathTitle}</h4>
        <p>{research.mathText}</p>
        <dl className="formula-list">
          {formulas.map(([name, formula]) => <div key={name}><dt>{name}</dt><dd>{formula}</dd></div>)}
        </dl>
      </article>

      <article className="panel benchmark-card reveal">
        <div className="research-subhead">
          <BarChart3 size={20} />
          <h4>{research.resultsTitle}</h4>
        </div>
        <div className="benchmark-table-wrap">
          <table className="benchmark-table">
            <thead><tr>{research.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
            <tbody>{research.results.map((row) => <tr key={row[1]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>

        <h5 className="keypoint-chart-title">{research.chartTitle}</h5>
        <div className="keypoint-chart" role="img" aria-label={`${research.chartTitle}: ${research.chartWrist} ≈ 9 px, ${research.chartTip} ≈ 25 px`}>
          {keypointEpe.map((value, index) => (
            <div className="keypoint-bar" key={index} style={{ "--height": `${(value / maxEpe) * 100}%` }} data-tip={`${research.chartPoint} ${index} · ≈ ${Math.round(value)} px`}>
              {index === 0 && <em>{research.chartWrist}</em>}
              {index === keypointEpe.length - 1 && <em>{research.chartTip}</em>}
            </div>
          ))}
        </div>
      </article>
    </div>

    <article className="panel conclusion-card reveal">
      <div className="research-subhead"><Lightbulb size={20} /><h4>{research.findingsTitle}</h4></div>
      <ul className="capability-list">{research.findings.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul>
    </article>

    <article className="panel conclusion-card live-stage-card reveal">
      <div className="research-subhead"><FlaskConical size={20} /><h4>{research.stageTitle}</h4></div>
      <ul className="capability-list">{research.stage.map((item) => <li key={item}><RefreshCw size={16} />{item}</li>)}</ul>
    </article>

    <div className="research-highlights reveal" aria-label={research.highlights}>
      <strong>{research.highlights}</strong>
      <div className="tag-list">{researchTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </div>
  </div></section>;
}
