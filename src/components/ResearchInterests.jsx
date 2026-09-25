import { ArrowRight, BrainCircuit, CheckCircle2, Crop, FlaskConical, Hand, ScanSearch, Video } from "lucide-react";
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
    badge: "Research in preparation",
    title: "From-Scratch Real-Time Hand Detection & 21-Keypoint Estimation",
    summary: "A two-stage hand-tracking system inspired by MediaPipe Hands, built entirely from scratch in PyTorch — no pretrained weights, no Ultralytics, no MediaPipe. A detector locates the hands, then a keypoint model places the 21 hand landmarks on each cropped hand, in real time on a webcam. It powers the Air Canvas project.",
    steps: ["Anchor-free hand detector (CenterNet)", "Affine crop 256×256 (+25%)", "U-Net → 21 heatmaps + soft-argmax", "Real-time webcam tracking + smoothing"],
    methodTitle: "Methodology",
    method: [
      "Ultralytics hand-keypoints dataset: 18,776 training hands and 7,992 validation hands, YOLO-pose format.",
      "KeypointNet: U-Net with skip connections and residual blocks (3.49M parameters), Gaussian heatmap targets (σ = 2) on a 64×64 grid.",
      "Keypoint loss: visibility-masked heatmap MSE + wing loss + bone-length loss.",
      "CenterNetLite detector (5.96M parameters): center heatmap, size and sub-pixel offset at stride 4, focal loss and NMS.",
      "Affine crop matrix M and its inverse M⁻¹ map predictions back to the original image (0 px round-trip error).",
      "Evaluation: EPE and PCK@0.2 for keypoints, mAP@0.5 for detection.",
    ],
    statusTitle: "Current status & next steps",
    status: [
      "Full pipeline implemented and running end to end: detection → crop → keypoints → image coordinates.",
      "Short CPU test runs validated: losses decrease and metrics improve.",
      "Next: full training on GPU (Colab), then real-world webcam evaluation.",
      "Planned fixes: normalized size loss, soft-argmax calibration and temperature, tracking margin aligned with training.",
    ],
    note: "No accuracy figures are reported until full training and evaluation are complete.",
  },
  fr: {
    badge: "Recherche en préparation",
    title: "Détection de mains et estimation de 21 points clés en temps réel, from scratch",
    summary: "Un système de suivi de la main en deux étapes inspiré de MediaPipe Hands, entièrement construit from scratch en PyTorch — sans poids pré-entraînés, sans Ultralytics ni MediaPipe. Un détecteur localise les mains, puis un modèle de points clés place les 21 repères de chaque main découpée, en temps réel sur webcam. Il alimente le projet Air Canvas.",
    steps: ["Détecteur de mains sans ancres (CenterNet)", "Découpe affine 256×256 (+25 %)", "U-Net → 21 heatmaps + soft-argmax", "Suivi webcam temps réel + lissage"],
    methodTitle: "Méthodologie",
    method: [
      "Dataset Ultralytics hand-keypoints : 18 776 mains en entraînement et 7 992 en validation, format YOLO pose.",
      "KeypointNet : U-Net avec skip connections et blocs résiduels (3,49 M paramètres), cibles gaussiennes (σ = 2) sur une grille 64×64.",
      "Perte des points clés : MSE des heatmaps masquée par la visibilité + wing loss + perte sur la longueur des os.",
      "Détecteur CenterNetLite (5,96 M paramètres) : heatmap des centres, taille et décalage sous-pixel au stride 4, focal loss et NMS.",
      "Matrice de découpe affine M et son inverse M⁻¹ pour revenir à l’image d’origine (erreur aller-retour de 0 px).",
      "Évaluation : EPE et PCK@0,2 pour les points clés, mAP@0,5 pour la détection.",
    ],
    statusTitle: "État actuel et prochaines étapes",
    status: [
      "Pipeline complet implémenté et fonctionnel de bout en bout : détection → découpe → points clés → coordonnées image.",
      "Tests courts sur CPU validés : les pertes diminuent et les métriques progressent.",
      "Prochaine étape : entraînement complet sur GPU (Colab), puis évaluation webcam en conditions réelles.",
      "Corrections prévues : perte de taille normalisée, calibration et température du soft-argmax, marge de suivi alignée sur l’entraînement.",
    ],
    note: "Aucun résultat chiffré n’est publié avant la fin de l’entraînement complet et de l’évaluation.",
  },
  ar: {
    badge: "بحث قيد الإعداد",
    title: "كشف اليد وتقدير 21 نقطة مفصلية في الوقت الفعلي، من الصفر",
    summary: "نظام لتتبع اليد على مرحلتين مستوحى من MediaPipe Hands، مبني بالكامل من الصفر باستخدام PyTorch — دون أوزان مدربة مسبقاً ودون Ultralytics أو MediaPipe. يحدد كاشفٌ موقع اليدين، ثم يضع نموذج النقاط المفصلية 21 نقطة على كل يد مقتطعة، في الوقت الفعلي عبر الكاميرا. وهو أساس مشروع Air Canvas.",
    steps: ["كاشف يد بدون مراسي (CenterNet)", "اقتطاع أفيني 256×256 (+25%)", "U-Net ← 21 خريطة حرارية + soft-argmax", "تتبع فوري عبر الكاميرا + تنعيم"],
    methodTitle: "المنهجية",
    method: [
      "مجموعة بيانات Ultralytics hand-keypoints: ‏18,776 يداً للتدريب و7,992 للتحقق، بصيغة YOLO pose.",
      "KeypointNet: شبكة U-Net مع وصلات تخطٍّ وكتل متبقية (3.49 مليون معامل)، وأهداف غاوسية (σ = 2) على شبكة 64×64.",
      "دالة الخسارة: MSE للخرائط الحرارية مقنّعة حسب الرؤية + wing loss + خسارة أطوال العظام.",
      "الكاشف CenterNetLite ‏(5.96 مليون معامل): خريطة المراكز والحجم والإزاحة دون البكسل بخطوة 4، مع focal loss وNMS.",
      "مصفوفة الاقتطاع الأفيني M ومعكوسها M⁻¹ لإعادة التنبؤات إلى الصورة الأصلية (خطأ ذهاب وإياب 0 بكسل).",
      "التقييم: EPE وPCK@0.2 للنقاط المفصلية، وmAP@0.5 للكشف.",
    ],
    statusTitle: "الوضع الحالي والخطوات القادمة",
    status: [
      "خط المعالجة الكامل منفّذ ويعمل من البداية إلى النهاية: كشف ← اقتطاع ← نقاط مفصلية ← إحداثيات الصورة.",
      "تم التحقق من اختبارات قصيرة على CPU: الخسائر تنخفض والمقاييس تتحسن.",
      "الخطوة التالية: تدريب كامل على GPU ‏(Colab)، ثم تقييم عبر الكاميرا في ظروف حقيقية.",
      "تحسينات مخططة: تطبيع خسارة الحجم، ومعايرة soft-argmax ودرجة حرارته، ومواءمة هامش التتبع مع التدريب.",
    ],
    note: "لن تُنشر أي نتائج رقمية قبل اكتمال التدريب الكامل والتقييم.",
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
      <span className="development-badge"><FlaskConical size={15} /> {research.badge}</span>
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
        <div><h4>{research.statusTitle}</h4><ul className="capability-list">{research.status.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul></div>
      </div>
      <div className="tag-list">{researchTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <p className="ongoing-research-note">{research.note}</p>
    </article>
  </div></section>;
}
