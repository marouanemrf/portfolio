import { ArrowRight, BrainCircuit, CheckCircle2, Crop, FileText, Hand, Radio, RefreshCw, ScanSearch, Video } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { usePreferences } from "../context/PreferencesContext";

const interests = {
  en: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Object Detection", "Large Language Models", "RAG", "AI Agents", "Edge AI", "Intelligent Systems", "IoT + AI"],
  fr: ["Intelligence artificielle", "Apprentissage automatique", "Apprentissage profond", "Vision par ordinateur", "Détection d’objets", "Grands modèles de langage", "RAG", "Agents IA", "IA en périphérie", "Systèmes intelligents", "IoT + IA"],
  ar: ["الذكاء الاصطناعي", "التعلم الآلي", "التعلم العميق", "الرؤية الحاسوبية", "كشف الأجسام", "نماذج اللغة الكبيرة", "RAG", "وكلاء الذكاء الاصطناعي", "ذكاء الحافة", "الأنظمة الذكية", "إنترنت الأشياء والذكاء الاصطناعي"],
};

const stepIcons = [ScanSearch, Crop, Hand, Video];
const researchTags = ["PyTorch", "OpenCV", "CenterNet", "U-Net", "Heatmap regression", "Soft-argmax", "Wing loss", "Focal loss", "EPE / PCK", "mAP@0.5"];

const ongoingResearch = {
  en: {
    doneBadge: "Training complete",
    stageBadge: "Now: live learning stage",
    title: "From-Scratch Real-Time Hand Detection & 21-Keypoint Estimation",
    summary: "A two-stage hand-tracking system inspired by MediaPipe Hands, built entirely from scratch in PyTorch — no pretrained weights, no Ultralytics, no MediaPipe. A detector locates the hands, then a keypoint model places the 21 hand landmarks on each cropped hand, in real time on a webcam. It powers the Air Canvas project.",
    steps: ["Anchor-free hand detector (CenterNet)", "Affine crop 256×256 (+25%)", "U-Net → 21 heatmaps + soft-argmax", "Real-time webcam tracking + smoothing"],
    methodTitle: "Methodology",
    method: [
      "Ultralytics hand-keypoints dataset: 18,776 training hands and 7,992 validation hands, YOLO-pose format.",
      "KeypointNet: U-Net with skip connections and residual blocks (3.49M parameters), Gaussian heatmap targets (σ = 2) on a 64×64 grid.",
      "Keypoint loss: heatmap MSE + wing loss + bone-length loss.",
      "CenterNetLite detector (5.96M parameters): center heatmap, size and sub-pixel offset at stride 4, focal loss and NMS.",
      "Affine crop matrix M and its inverse M⁻¹ map predictions back to the original image.",
      "Training: 30 epochs, Adam with cosine learning rate 1e-3 → 0, on an NVIDIA RTX 3060.",
    ],
    resultsTitle: "Training results (30 epochs)",
    results: [
      "Detector: 99% precision and 98% recall, train / val loss 2.0 / 2.45 — no overfitting.",
      "Keypoints: EPE ≈ 14.7 px (down from 48), about 7% of hand size.",
      "Keypoints: PCK@0.2 ≈ 95% (up from 61%).",
      "Weak spot: fingertips — wrist ≈ 9 px error, little fingertip ≈ 25 px.",
    ],
    stageTitle: "Current stage: live learning (human-in-the-loop)",
    stage: [
      "Test the full pipeline on the live webcam and measure keypoint error on detector crops.",
      "The user corrects boxes and points live; corrected samples are collected.",
      "The models are fine-tuned on these corrections, and the cycle repeats.",
      "In parallel: soft-argmax grid fix, loss rebalancing and full-validation mAP@0.5 / 0.75.",
    ],
    note: "Detector scores come from 100 validation hands, and keypoint scores use ground-truth crops. Live webcam performance is not measured yet.",
    journal: "Read the project journal (PDF)",
  },
  fr: {
    doneBadge: "Entraînement terminé",
    stageBadge: "En cours : phase de live learning",
    title: "Détection de mains et estimation de 21 points clés en temps réel, from scratch",
    summary: "Un système de suivi de la main en deux étapes inspiré de MediaPipe Hands, entièrement construit from scratch en PyTorch — sans poids pré-entraînés, sans Ultralytics ni MediaPipe. Un détecteur localise les mains, puis un modèle de points clés place les 21 repères de chaque main découpée, en temps réel sur webcam. Il alimente le projet Air Canvas.",
    steps: ["Détecteur de mains sans ancres (CenterNet)", "Découpe affine 256×256 (+25 %)", "U-Net → 21 heatmaps + soft-argmax", "Suivi webcam temps réel + lissage"],
    methodTitle: "Méthodologie",
    method: [
      "Dataset Ultralytics hand-keypoints : 18 776 mains en entraînement et 7 992 en validation, format YOLO pose.",
      "KeypointNet : U-Net avec skip connections et blocs résiduels (3,49 M paramètres), cibles gaussiennes (σ = 2) sur une grille 64×64.",
      "Perte des points clés : MSE des heatmaps + wing loss + perte sur la longueur des os.",
      "Détecteur CenterNetLite (5,96 M paramètres) : heatmap des centres, taille et décalage sous-pixel au stride 4, focal loss et NMS.",
      "Matrice de découpe affine M et son inverse M⁻¹ pour revenir à l’image d’origine.",
      "Entraînement : 30 époques, Adam avec taux d’apprentissage cosinus 1e-3 → 0, sur NVIDIA RTX 3060.",
    ],
    resultsTitle: "Résultats d’entraînement (30 époques)",
    results: [
      "Détecteur : précision 99 % et rappel 98 %, perte train / val 2,0 / 2,45 — pas de surapprentissage.",
      "Points clés : EPE ≈ 14,7 px (contre 48 au départ), environ 7 % de la taille de la main.",
      "Points clés : PCK@0,2 ≈ 95 % (contre 61 % au départ).",
      "Point faible : le bout des doigts — erreur ≈ 9 px au poignet, ≈ 25 px au bout de l’auriculaire.",
    ],
    stageTitle: "Phase actuelle : live learning (humain dans la boucle)",
    stage: [
      "Tester le pipeline complet sur webcam en direct et mesurer l’erreur des points clés sur les découpes du détecteur.",
      "L’utilisateur corrige les boîtes et les points en direct ; les échantillons corrigés sont collectés.",
      "Les modèles sont ré-entraînés (fine-tuning) sur ces corrections, puis le cycle recommence.",
      "En parallèle : correction de la grille du soft-argmax, rééquilibrage des pertes et mAP@0,5 / 0,75 sur toute la validation.",
    ],
    note: "Les scores du détecteur portent sur 100 mains de validation et ceux des points clés utilisent les découpes réelles. La performance sur webcam en direct n’est pas encore mesurée.",
    journal: "Lire le journal du projet (PDF)",
  },
  ar: {
    doneBadge: "اكتمل التدريب",
    stageBadge: "الآن: مرحلة التعلم المباشر",
    title: "كشف اليد وتقدير 21 نقطة مفصلية في الوقت الفعلي، من الصفر",
    summary: "نظام لتتبع اليد على مرحلتين مستوحى من MediaPipe Hands، مبني بالكامل من الصفر باستخدام PyTorch — دون أوزان مدربة مسبقاً ودون Ultralytics أو MediaPipe. يحدد كاشفٌ موقع اليدين، ثم يضع نموذج النقاط المفصلية 21 نقطة على كل يد مقتطعة، في الوقت الفعلي عبر الكاميرا. وهو أساس مشروع Air Canvas.",
    steps: ["كاشف يد بدون مراسي (CenterNet)", "اقتطاع أفيني 256×256 (+25%)", "U-Net ← 21 خريطة حرارية + soft-argmax", "تتبع فوري عبر الكاميرا + تنعيم"],
    methodTitle: "المنهجية",
    method: [
      "مجموعة بيانات Ultralytics hand-keypoints: ‏18,776 يداً للتدريب و7,992 للتحقق، بصيغة YOLO pose.",
      "KeypointNet: شبكة U-Net مع وصلات تخطٍّ وكتل متبقية (3.49 مليون معامل)، وأهداف غاوسية (σ = 2) على شبكة 64×64.",
      "دالة الخسارة: MSE للخرائط الحرارية + wing loss + خسارة أطوال العظام.",
      "الكاشف CenterNetLite ‏(5.96 مليون معامل): خريطة المراكز والحجم والإزاحة دون البكسل بخطوة 4، مع focal loss وNMS.",
      "مصفوفة الاقتطاع الأفيني M ومعكوسها M⁻¹ لإعادة التنبؤات إلى الصورة الأصلية.",
      "التدريب: 30 حقبة، Adam بمعدل تعلم جيبي 1e-3 ← 0، على NVIDIA RTX 3060.",
    ],
    resultsTitle: "نتائج التدريب (30 حقبة)",
    results: [
      "الكاشف: دقة 99% واستدعاء 98%، خسارة التدريب / التحقق 2.0 / 2.45 — دون فرط تعلم.",
      "النقاط المفصلية: EPE ≈ 14.7 بكسل (بعد أن كان 48)، أي نحو 7% من حجم اليد.",
      "النقاط المفصلية: PCK@0.2 ≈ 95% (بعد أن كان 61%).",
      "نقطة الضعف: أطراف الأصابع — خطأ ≈ 9 بكسل عند المعصم و≈ 25 بكسل عند طرف الخنصر.",
    ],
    stageTitle: "المرحلة الحالية: التعلم المباشر (الإنسان في الحلقة)",
    stage: [
      "اختبار خط المعالجة الكامل على الكاميرا مباشرة وقياس خطأ النقاط على مقتطعات الكاشف.",
      "يصحح المستخدم الصناديق والنقاط مباشرة، وتُجمع العينات المصححة.",
      "يُعاد ضبط النماذج على هذه التصحيحات، ثم تتكرر الدورة.",
      "بالتوازي: إصلاح شبكة soft-argmax، وإعادة موازنة الخسائر، وحساب mAP@0.5 / 0.75 على كامل بيانات التحقق.",
    ],
    note: "نتائج الكاشف مأخوذة من 100 يد للتحقق، ونتائج النقاط تستخدم المقتطعات الحقيقية. أداء الكاميرا المباشر لم يُقَس بعد.",
    journal: "قراءة يومية المشروع (PDF)",
  },
};

export default function ResearchInterests({ t }) {
  const { language } = usePreferences();
  const labels = { en: ["Research interests", "Areas I am exploring and developing."], fr: ["Intérêts de recherche", "Domaines que j’explore et développe."], ar: ["اهتمامات البحث", "مجالات أستكشفها وأطور خبرتي فيها."] }[language];
  const research = ongoingResearch[language];
  return <section className="section section-muted"><div className="shell">
    <SectionTitle eyebrow={labels[0]} title={labels[1]} />
    <div className="interest-grid reveal">{interests[language].map((interest) => <div className="panel interest-card" key={interest}><BrainCircuit size={19} /><span>{interest}</span></div>)}</div>

    <article className="panel ongoing-research reveal">
      <div className="research-badges">
        <span className="development-badge development-badge-done"><CheckCircle2 size={15} /> {research.doneBadge}</span>
        <span className="development-badge"><Radio size={15} /> {research.stageBadge}</span>
      </div>
      <h3>{research.title}</h3>
      <p className="ongoing-research-summary">{research.summary}</p>
      <div className="architecture-flow">{research.steps.map((step, index) => {
        const Icon = stepIcons[index];
        return <div className="architecture-step" key={step}>
          <span><Icon size={20} /></span><strong>{step}</strong>{index < research.steps.length - 1 && <ArrowRight className="flow-arrow" size={19} />}
        </div>;
      })}</div>
      <div className="ongoing-research-grid">
        <div><h4>{research.methodTitle}</h4><ul className="capability-list">{research.method.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul></div>
        <div><h4>{research.resultsTitle}</h4><ul className="capability-list">{research.results.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul></div>
        <div className="ongoing-research-stage"><h4>{research.stageTitle}</h4><ul className="capability-list">{research.stage.map((item) => <li key={item}><RefreshCw size={16} />{item}</li>)}</ul></div>
      </div>
      <div className="tag-list">{researchTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <p className="ongoing-research-note">{research.note}</p>
      <a className="button button-primary ongoing-research-journal" href="/Marouane_Morfi_Journal_Summary.pdf" target="_blank" rel="noreferrer">
        <FileText size={17} /> {research.journal}
      </a>
    </article>
  </div></section>;
}
