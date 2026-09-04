export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
