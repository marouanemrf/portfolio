import { Activity, ArrowUpRight, BarChart3, Database, Microscope, ScanSearch } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { researchBenchmark } from "../data/research";
import { usePreferences } from "../context/PreferencesContext";

export default function Research({ t }) {
  const { language } = usePreferences();
  const publicationCopy = {
    en: { view: "View on IEEE Xplore", abstract: "Abstract", highlights: "Research highlights", text: "Tomato (Solanum lycopersicum L.) production is threatened by foliar diseases that can cause severe yield and quality losses if not detected early. To support practical monitoring, this paper compares six YOLO small variants for real-world tomato disease detection using a manually annotated bounding-box dataset collected in open fields and greenhouses. Under a unified training/evaluation protocol, YOLOv5s, YOLOv8s, YOLOv9s, YOLOv10s, YOLOv11s, and YOLOv12s are benchmarked using mAP@0.5, mAP@0.5:0.95, precision, recall, and F1-score, alongside deployability indicators (speed, model size, FLOPs). The results highlight clear accuracy–efficiency trade-offs and provide guidance for selecting models for mobile/edge tomato disease monitoring." },
    fr: { view: "Voir sur IEEE Xplore", abstract: "Résumé", highlights: "Points clés de la recherche", text: "La production de tomate est menacée par des maladies foliaires pouvant causer de graves pertes de rendement et de qualité sans détection précoce. Cette étude compare six petites variantes YOLO sur un jeu de données annoté manuellement, collecté en plein champ et sous serre. Un protocole unifié évalue YOLOv5s à YOLOv12s selon la précision, le rappel, le F1-score, les mAP, la vitesse, la taille et les FLOPs afin d'éclairer le choix de modèles pour un déploiement mobile ou edge." },
    ar: { view: "عرض على IEEE Xplore", abstract: "الملخص", highlights: "أبرز نقاط البحث", text: "تهدد أمراض الأوراق إنتاج الطماطم وجودة المحصول إذا لم تُكتشف مبكراً. تقارن الدراسة ستة نماذج صغيرة من YOLO على بيانات مشروحة يدوياً جُمعت من الحقول والبيوت الزجاجية. ويقيّم بروتوكول موحد النماذج من YOLOv5s إلى YOLOv12s وفق الدقة والاستدعاء وF1-score وmAP والسرعة والحجم وFLOPs لتوجيه اختيار النماذج المناسبة للنشر على الهاتف أو الحافة." }
  }[language];
  const findingsCopy = {
    en: ["Key Findings", "Detailed model rankings and numerical findings are not shown because they could not be verified from the available publication metadata. Consult the official paper for validated results."],
    fr: ["Résultats clés", "Les classements détaillés et résultats chiffrés ne sont pas affichés, car ils n’ont pas pu être vérifiés dans les métadonnées disponibles. Consultez l’article officiel pour les résultats validés."],
    ar: ["النتائج الرئيسية", "لا تُعرض التصنيفات التفصيلية والنتائج الرقمية لعدم توفرها بشكل موثّق في بيانات النشر المتاحة. يُرجى الرجوع إلى الورقة الرسمية للنتائج المعتمدة."],
  }[language];
  const hasResults = researchBenchmark.results.length > 0;

  return (
    <section id="research" className="section research-section section-anchor">
      <div className="shell">
        <SectionTitle eyebrow={t.research.eyebrow} title={t.research.title} />

        <div className="research-hero panel reveal">
          <div>
            <span className="research-label"><Microscope size={16} /> {t.research.label}</span>
            <h3>{researchBenchmark.title}</h3>
          </div>
          <div className="publication-actions">
            <div className="research-badge">IEEE Publication</div>
            <a className="button button-primary" href={researchBenchmark.url} target="_blank" rel="noreferrer">
              {publicationCopy.view} <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <article className="panel abstract-card reveal">
          <span>{publicationCopy.abstract}</span>
          <p>{publicationCopy.text}</p>
        </article>

        <div className="research-grid">
          <article className="panel research-card reveal">
            <ScanSearch size={22} />
            <h4>{t.research.objectiveTitle}</h4>
            <p>{t.research.objective}</p>
          </article>

          <article className="panel research-card reveal">
            <Database size={22} />
            <h4>{t.research.datasetTitle}</h4>
            <p>{t.research.dataset}</p>
          </article>
        </div>

        <div className="panel model-strip reveal">
          <div className="research-subhead">
            <Activity size={20} />
            <h4>{t.research.modelsTitle}</h4>
          </div>
          <div className="model-list">
            {researchBenchmark.models.map((model) => <span key={model}>{model}</span>)}
          </div>
        </div>

        <div className="research-grid research-grid-results">
          <article className="panel research-card reveal">
            <BarChart3 size={22} />
            <h4>{t.research.metricsTitle}</h4>
            <p>{t.research.metricsText}</p>
            <div className="metric-cloud">
              {researchBenchmark.metrics.map((metric) => <span key={metric}>{metric}</span>)}
            </div>
          </article>

          <article className="panel benchmark-card reveal">
            <div className="research-subhead">
              <BarChart3 size={20} />
              <h4>{t.research.resultsTitle}</h4>
            </div>

            {hasResults ? (
              <div className="benchmark-table-wrap">
                <table className="benchmark-table">
                  <thead>
                    <tr>
                      <th>Model</th>
                      {researchBenchmark.metrics.map((metric) => <th key={metric}>{metric}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {researchBenchmark.results.map((row) => (
                      <tr key={row.model}>
                        <td>{row.model}</td>
                        {researchBenchmark.metrics.map((metric) => (
                          <td key={metric}>{row[metric] ?? "—"}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="missing-results">
                <div className="chart-placeholder">
                  {researchBenchmark.models.map((model, index) => (
                    <div className="placeholder-row" key={model}>
                      <span>{model}</span>
                      <div className="placeholder-bar" style={{ "--width": `${42 + index * 5}%` }} />
                      <small>—</small>
                    </div>
                  ))}
                </div>
                <p>{t.research.resultsMissing}</p>
              </div>
            )}
          </article>
        </div>

        <article className="panel conclusion-card reveal">
          <h4>{findingsCopy[0]}</h4>
          <p>{findingsCopy[1]}</p>
        </article>

        <div className="research-highlights reveal" aria-label={publicationCopy.highlights}>
          <strong>{publicationCopy.highlights}</strong>
          <div className="tag-list">
            {researchBenchmark.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
