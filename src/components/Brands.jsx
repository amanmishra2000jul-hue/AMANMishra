import { motion } from "framer-motion";

const brands = [
  {
    name: "KPMG",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor">
        <rect x="5" y="10" width="30" height="20" rx="2" fill="rgba(255,255,255,0.05)" />
        <text x="12" y="27" fontFamily="monospace" fontWeight="900" fontSize="18" letterSpacing="0.1em" fill="var(--ink)">KPMG</text>
      </svg>
    )
  },
  {
    name: "Decathlon",
    svg: (
      <svg viewBox="0 0 160 40" fill="currentColor">
        <rect x="5" y="8" width="135" height="24" rx="2" fill="#0072BC" />
        <text x="12" y="25" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="#FFFFFF" letterSpacing="0.02em">DECATHLON</text>
      </svg>
    )
  },
  {
    name: "Augrey",
    svg: (
      <svg viewBox="0 0 140 40" fill="currentColor">
        <circle cx="20" cy="20" r="8" stroke="var(--ink)" strokeWidth="2.5" fill="none" />
        <circle cx="30" cy="20" r="8" stroke="var(--ink)" strokeWidth="2.5" fill="none" />
        <text x="48" y="26" fontFamily="var(--f-body)" fontWeight="700" fontSize="18">Augrey</text>
      </svg>
    )
  },
  {
    name: "Unibic",
    svg: (
      <svg viewBox="0 0 130 40" fill="currentColor">
        <rect x="5" y="8" width="95" height="24" rx="4" fill="#E2261C" />
        <text x="14" y="25" fontFamily="sans-serif" fontWeight="900" fontSize="15" fill="#FFFFFF" letterSpacing="0.05em">UNIBIC</text>
      </svg>
    )
  },
  {
    name: "Printo",
    svg: (
      <svg viewBox="0 0 130 40" fill="currentColor">
        <circle cx="15" cy="20" r="8" fill="#F59E0B" />
        <text x="32" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="20" fill="var(--ink)" letterSpacing="-0.02em">printo</text>
      </svg>
    )
  },
  {
    name: "LSSM",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor">
        <path d="M10,12 L10,28 M15,10 L15,30 M20,12 L20,28" stroke="var(--ink)" strokeWidth="2" />
        <text x="32" y="26" fontFamily="var(--f-body)" fontWeight="700" fontSize="18" letterSpacing="0.05em">LSSM</text>
      </svg>
    )
  },
  {
    name: "PluginHive",
    svg: (
      <svg viewBox="0 0 160 40" fill="currentColor">
        <path d="M10,14 L20,10 L30,14 L30,26 L20,30 L10,26 Z" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="var(--ink)" />
        <text x="38" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="16">PluginHive</text>
      </svg>
    )
  },
  {
    name: "Sunburn",
    svg: (
      <svg viewBox="0 0 150 40" fill="currentColor">
        <circle cx="20" cy="20" r="8" stroke="var(--ink)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
        <circle cx="20" cy="20" r="4" fill="var(--ink)" />
        <text x="36" y="26" fontFamily="sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.05em">SUNBURN</text>
      </svg>
    )
  },
  {
    name: "YLG Salon",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="27" fontFamily="var(--f-body)" fontWeight="900" fontSize="22" fill="#EC4899" letterSpacing="0.05em">YLG</text>
        <text x="58" y="27" fontFamily="sans-serif" fontWeight="500" fontSize="13" fill="var(--ink)" letterSpacing="0.1em">SALON</text>
      </svg>
    )
  },
  {
    name: "Samskruthi",
    svg: (
      <svg viewBox="0 0 160 40" fill="currentColor">
        <path d="M8,15 Q20,5 32,15 T56,15" fill="none" stroke="#10B981" strokeWidth="2.5" />
        <text x="12" y="32" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="var(--ink)" letterSpacing="0.05em">SAMSKRUTHI</text>
      </svg>
    )
  },
  {
    name: "Vemana IT",
    svg: (
      <svg viewBox="0 0 165 40" fill="currentColor">
        <polygon points="10,10 30,10 20,30" fill="none" stroke="#D97706" strokeWidth="2.5" />
        <text x="38" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="15" fill="var(--ink)" letterSpacing="0.02em">VEMANA IT</text>
      </svg>
    )
  },
  {
    name: "Moxx",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="27" fontFamily="var(--f-display)" fontWeight="900" fontSize="24" letterSpacing="0.05em" fill="var(--ink)">MOXX</text>
      </svg>
    )
  }
];

export default function Brands() {
  return (
    <section className="brands-ticker">
      <div className="ticker-wrap">
        <div className="ticker-track">
          {/* Render first iteration */}
          {brands.map((b, idx) => (
            <div key={`brand-a-${idx}`} className="ticker-item" aria-label={b.name}>
              {b.svg}
            </div>
          ))}
          {/* Duplicate list for seamless infinite looping */}
          {brands.map((b, idx) => (
            <div key={`brand-b-${idx}`} className="ticker-item" aria-label={b.name}>
              {b.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
