export default function BrandLogo({ compact = false }) {
  return (
    <svg className={`brand-logo${compact ? " brand-logo-compact" : ""}`} viewBox="0 0 260 96" role="img" aria-label="MRF — Marouane Morfi">
      <path className="brand-signature" d="M8 35 C34 12 58 8 53 29 C49 46 25 65 14 84 C7 96 18 55 45 25 C72 -5 89 9 79 44 C72 68 55 91 51 86 C46 80 66 43 91 19 C117 -6 109 54 108 68 C106 88 116 92 137 92 C176 93 221 80 246 54 C265 34 242 30 207 39" />
      <path className="brand-letters" d="M122 62 V42 L132 58 L142 42 V62 M151 62 V42 H164 C173 42 173 52 164 52 H151 M163 52 L174 62 M183 62 V42 H204 M183 51 H199" />
    </svg>
  );
}
