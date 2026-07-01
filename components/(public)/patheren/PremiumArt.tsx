/**
 * PremiumArt — visuels dégradés sur-mesure (SVG inline) dans la palette Lunion Lab.
 *
 * Créations 100% originales, libres de tout droit tiers, nettes à toute résolution
 * et légères (aucune requête réseau, parfait pour le SSG / SEO / perf).
 * Palette : primaire #704a9b, indigo #3b57d0, bleu #1f4bd8, violets clairs.
 *
 * Chaque pièce remplit son conteneur (h-full w-full) : à placer dans un parent
 * `overflow-hidden rounded-...`. `preserveAspectRatio="xMidYMid slice"` = couvre
 * comme un `object-cover`.
 */

type ArtProps = { className?: string };

const cover = "xMidYMid slice";

/* Palettes du mesh (base + blobs) */
const meshPalettes = {
  violet: { base: "#241640", blobs: ["#6d3bd0", "#8a4fd8", "#a06be0", "#4f5fd0", "#5a3b7d"] },
  indigo: { base: "#1a1c46", blobs: ["#3b57d0", "#5a6fe0", "#704a9b", "#2f6fe0", "#8a4fd8"] },
  aurora: { base: "#1e1840", blobs: ["#704a9b", "#3b57d0", "#b794e6", "#4f7ce0", "#8a4fd8"] },
  dusk: { base: "#2a1836", blobs: ["#8a4fd8", "#704a9b", "#c37ad0", "#5a3b7d", "#4f5fd0"] },
} as const;

export type MeshVariant = keyof typeof meshPalettes;

/** Dégradé mesh fluide (façon aurore) — le visuel premium passe-partout. */
export function MeshAurora({
  className = "h-full w-full",
  variant = "violet",
}: ArtProps & { variant?: MeshVariant }) {
  const p = meshPalettes[variant];
  const pos = [
    { cx: 150, cy: 130, r: 240 },
    { cx: 640, cy: 170, r: 250 },
    { cx: 400, cy: 500, r: 280 },
    { cx: 720, cy: 520, r: 210 },
    { cx: 110, cy: 520, r: 200 },
  ];
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio={cover}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="pa-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="72" />
        </filter>
        <linearGradient id="pa-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.22" />
        </linearGradient>
        <filter id="pa-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.06" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="800" height="600" fill={p.base} />
      <g filter="url(#pa-soft)">
        {pos.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={p.blobs[i % p.blobs.length]} />
        ))}
      </g>
      <rect width="800" height="600" fill="url(#pa-sheen)" />
      <rect width="800" height="600" filter="url(#pa-grain)" opacity="0.5" />
    </svg>
  );
}

/** Sphère de verre 3D avec reflets — accent produit / techno. */
export function GlassOrb({ className = "h-full w-full" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio={cover}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="go-bg" cx="30%" cy="25%" r="90%">
          <stop offset="0" stopColor="#3a2a63" />
          <stop offset="1" stopColor="#160e2c" />
        </radialGradient>
        <radialGradient id="go-orb" cx="38%" cy="32%" r="72%">
          <stop offset="0" stopColor="#f0e6ff" />
          <stop offset="0.28" stopColor="#b794e6" />
          <stop offset="0.6" stopColor="#704a9b" />
          <stop offset="1" stopColor="#3b2a6b" />
        </radialGradient>
        <radialGradient id="go-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0.5" stopColor="#8a5fe0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8a5fe0" stopOpacity="0" />
        </radialGradient>
        <filter id="go-blur"><feGaussianBlur stdDeviation="26" /></filter>
      </defs>
      <rect width="800" height="600" fill="url(#go-bg)" />
      <circle cx="400" cy="300" r="260" fill="url(#go-halo)" filter="url(#go-blur)" />
      <circle cx="400" cy="300" r="180" fill="url(#go-orb)" />
      <ellipse cx="345" cy="238" rx="70" ry="44" fill="#ffffff" opacity="0.5" filter="url(#go-blur)" />
      <circle cx="400" cy="300" r="180" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="150" cy="480" r="10" fill="#b794e6" opacity="0.8" />
      <circle cx="650" cy="140" r="7" fill="#7fa0ff" opacity="0.8" />
      <circle cx="680" cy="470" r="5" fill="#e6d6ff" opacity="0.7" />
    </svg>
  );
}

/** Anneaux concentriques — connectivité, ondes, temps réel. */
export function Rings({ className = "h-full w-full" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio={cover}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rg-bg" cx="50%" cy="50%" r="75%">
          <stop offset="0" stopColor="#31215c" />
          <stop offset="1" stopColor="#140d29" />
        </radialGradient>
        <linearGradient id="rg-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b794e6" />
          <stop offset="0.5" stopColor="#704a9b" />
          <stop offset="1" stopColor="#3b57d0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#rg-bg)" />
      <g fill="none" stroke="url(#rg-stroke)">
        {[60, 130, 205, 285, 370].map((r, i) => (
          <circle
            key={r}
            cx="400"
            cy="300"
            r={r}
            strokeWidth={2.5 - i * 0.3}
            strokeOpacity={0.85 - i * 0.14}
          />
        ))}
      </g>
      <circle cx="400" cy="300" r="16" fill="#e6d6ff" />
      <circle cx="400" cy="300" r="30" fill="#8a5fe0" opacity="0.35" />
      <circle cx="530" cy="230" r="6" fill="#7fa0ff" />
      <circle cx="270" cy="360" r="5" fill="#b794e6" />
      <circle cx="470" cy="415" r="4" fill="#e6d6ff" />
    </svg>
  );
}

/** Lignes fluides — flux de données, mouvement. */
export function FlowLines({ className = "h-full w-full" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio={cover}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a1b4d" />
          <stop offset="1" stopColor="#161033" />
        </linearGradient>
        <linearGradient id="fl-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8a5fe0" stopOpacity="0" />
          <stop offset="0.5" stopColor="#b794e6" />
          <stop offset="1" stopColor="#7fa0ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fl-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4f7ce0" stopOpacity="0" />
          <stop offset="0.5" stopColor="#6d8bff" />
          <stop offset="1" stopColor="#8a5fe0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#fl-bg)" />
      <g fill="none" strokeWidth="2.5">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const y = 90 + i * 78;
          return (
            <path
              key={i}
              d={`M-20 ${y} C 200 ${y - 70}, 320 ${y + 80}, 500 ${y}, 700 ${y - 60}, 760 ${y + 40}, 820 ${y}`}
              stroke={i % 2 === 0 ? "url(#fl-a)" : "url(#fl-b)"}
              strokeOpacity={0.9 - i * 0.09}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Éclats de verre — facettes prismatiques, effet 3D léger. */
export function PrismCluster({ className = "h-full w-full" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio={cover}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#241a44" />
          <stop offset="1" stopColor="#171034" />
        </linearGradient>
        <linearGradient id="pc-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b794e6" />
          <stop offset="1" stopColor="#5a3b7d" />
        </linearGradient>
        <linearGradient id="pc-g2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4f7ce0" />
          <stop offset="1" stopColor="#8a4fd8" />
        </linearGradient>
        <linearGradient id="pc-g3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6d6ff" />
          <stop offset="1" stopColor="#8a5fe0" />
        </linearGradient>
        <filter id="pc-blur"><feGaussianBlur stdDeviation="46" /></filter>
      </defs>
      <rect width="800" height="600" fill="url(#pc-bg)" />
      <circle cx="560" cy="180" r="200" fill="#6d3bd0" opacity="0.5" filter="url(#pc-blur)" />
      <circle cx="220" cy="440" r="180" fill="#3b57d0" opacity="0.5" filter="url(#pc-blur)" />
      <g opacity="0.95">
        <polygon points="300,120 470,200 360,360 210,270" fill="url(#pc-g1)" opacity="0.9" />
        <polygon points="470,300 640,340 560,480 430,440" fill="url(#pc-g2)" opacity="0.9" />
        <polygon points="150,300 300,340 250,460 120,420" fill="url(#pc-g3)" opacity="0.85" />
      </g>
      <g stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" fill="none">
        <polygon points="300,120 470,200 360,360 210,270" />
        <polygon points="470,300 640,340 560,480 430,440" />
      </g>
    </svg>
  );
}

/** Sélecteur indexé pour varier les pièces d'art sur une même grille. */
export const premiumArt = [
  (c?: string) => <MeshAurora variant="violet" className={c} />,
  (c?: string) => <GlassOrb className={c} />,
  (c?: string) => <MeshAurora variant="indigo" className={c} />,
  (c?: string) => <Rings className={c} />,
  (c?: string) => <MeshAurora variant="aurora" className={c} />,
  (c?: string) => <PrismCluster className={c} />,
  (c?: string) => <MeshAurora variant="dusk" className={c} />,
  (c?: string) => <FlowLines className={c} />,
];
