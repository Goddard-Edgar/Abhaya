/**
 * Hand-authored vector renderings of the motifs each ABHAYA tee carries —
 * stylised, line-based interpretations true to Madhubani and Kullvi visual
 * grammar (not photographs of any specific artwork). Each motif fills a
 * 0–100 viewBox cell and is recolourable via `color`.
 */

type MotifProps = { color: string; opacity?: number }

function Machli({ color, opacity = 1 }: MotifProps) {
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.6} fill="none">
      <path d="M22 50 Q42 30 70 50 Q42 70 22 50 Z" />
      <path d="M70 50 L86 41 L86 59 Z" />
      <circle cx="31" cy="47" r="1.6" fill={color} />
      <path d="M34 50 Q46 44 58 50" />
      <path d="M34 50 Q46 56 58 50" />
      <path d="M40 50 Q50 46 60 50" />
    </g>
  )
}

function Mayur({ color, opacity = 1 }: MotifProps) {
  const arcs = [12, 18, 24, 30, 36]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      {arcs.map((r) => (
        <path key={r} d={`M ${50 - r} 62 A ${r} ${r} 0 0 1 ${50 + r} 62`} />
      ))}
      <circle cx="50" cy="68" r="7" fill={color} fillOpacity={0.18} />
      <circle cx="50" cy="68" r="7" />
      <path d="M50 61 L46 50 M50 61 L50 48 M50 61 L54 50" />
    </g>
  )
}

function Kamal({ color, opacity = 1 }: MotifProps) {
  const petals = [0, 60, 120, 180, 240, 300]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      {petals.map((a) => (
        <ellipse key={a} cx="50" cy="36" rx="6.5" ry="15" transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="5" fill={color} fillOpacity={0.25} />
      <circle cx="50" cy="50" r="5" />
    </g>
  )
}

function SuryaChandra({ color, opacity = 1 }: MotifProps) {
  const rays = Array.from({ length: 10 }, (_, i) => (i * 360) / 10)
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      <circle cx="34" cy="50" r="9" />
      {rays.map((a) => {
        const r1 = 12, r2 = 17
        const rad = (a * Math.PI) / 180
        return (
          <line
            key={a}
            x1={34 + Math.cos(rad) * r1} y1={50 + Math.sin(rad) * r1}
            x2={34 + Math.cos(rad) * r2} y2={50 + Math.sin(rad) * r2}
          />
        )
      })}
      <path d="M 64 38 A 12 12 0 1 0 64 62 A 9 9 0 1 1 64 38 Z" fill={color} fillOpacity={0.18} />
    </g>
  )
}

function Kalpavriksha({ color, opacity = 1 }: MotifProps) {
  const branches = [
    [50, 58, 34, 42], [50, 58, 66, 42],
    [50, 50, 28, 32], [50, 50, 72, 32],
    [50, 42, 40, 26], [50, 42, 60, 26],
  ]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.5} fill="none">
      <line x1="50" y1="76" x2="50" y2="50" strokeWidth={2} />
      {branches.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
      {branches.map(([, , x2, y2], i) => (
        <circle key={i} cx={x2} cy={y2} r="2" fill={color} />
      ))}
      <circle cx="50" cy="22" r="2.4" fill={color} />
    </g>
  )
}

function Bharni({ color, opacity = 1 }: MotifProps) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <g opacity={opacity}>
      {petals.map((a) => (
        <ellipse key={a} cx="50" cy="38" rx="8" ry="13" transform={`rotate(${a} 50 50)`} fill={color} fillOpacity={0.55} stroke={color} strokeWidth={1} />
      ))}
      <circle cx="50" cy="50" r="6" fill={color} />
    </g>
  )
}

function Kachni({ color, opacity = 1 }: MotifProps) {
  const lines = Array.from({ length: 7 }, (_, i) => 24 + i * 8.5)
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1} fill="none">
      {lines.map((p) => (
        <line key={`a${p}`} x1={p} y1="22" x2={p - 18} y2="78" />
      ))}
      {lines.map((p) => (
        <line key={`b${p}`} x1={p - 36} y1="22" x2={p - 18} y2="78" />
      ))}
    </g>
  )
}

function Tantrik({ color, opacity = 1 }: MotifProps) {
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      <circle cx="50" cy="50" r="22" />
      <circle cx="50" cy="50" r="14" />
      <ellipse cx="50" cy="50" rx="16" ry="8" />
      <circle cx="50" cy="50" r="3" fill={color} />
      {Array.from({ length: 8 }, (_, i) => (i * 360) / 8).map((a) => {
        const rad = (a * Math.PI) / 180
        return <circle key={a} cx={50 + Math.cos(rad) * 22} cy={50 + Math.sin(rad) * 22} r="1.4" fill={color} />
      })}
    </g>
  )
}

function Godna({ color, opacity = 1 }: MotifProps) {
  // a small bird traced entirely in dots — Godna's tattoo-pointillist technique
  const dots = [
    [50, 30], [46, 34], [54, 34], [42, 40], [58, 40], [38, 48], [62, 48],
    [50, 44], [50, 52], [44, 56], [56, 56], [50, 60], [40, 64], [60, 64],
    [50, 68], [50, 74], [34, 50], [66, 50],
  ]
  return (
    <g opacity={opacity}>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.7" fill={color} />
      ))}
    </g>
  )
}

function Kohbar({ color, opacity = 1 }: MotifProps) {
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      <circle cx="42" cy="50" r="14" />
      <circle cx="58" cy="50" r="14" />
      <ellipse cx="50" cy="50" rx="6" ry="11" fill={color} fillOpacity={0.2} />
      <circle cx="50" cy="50" r="2.4" fill={color} />
    </g>
  )
}

function Chiriya({ color, opacity = 1 }: MotifProps) {
  const pos = [[28, 30], [44, 38], [60, 30], [36, 54], [52, 62], [68, 54], [28, 74], [60, 76]]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.6}>
      {pos.map(([x, y], i) => (
        <g key={i}>
          <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
          <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
        </g>
      ))}
    </g>
  )
}

function DabbidarKiru({ color, opacity = 1 }: MotifProps) {
  return (
    <g opacity={opacity}>
      <path d="M18 50 Q34 28 50 50 T82 50" stroke={color} strokeWidth={1.6} fill="none" />
      {[18, 28, 38, 48, 58, 68, 78].map((x, i) => {
        const y = 50 + Math.sin((x / 82) * Math.PI * 2.1) * -16
        return <circle key={i} cx={x} cy={y} r="1.6" fill={color} />
      })}
    </g>
  )
}

function Guddi({ color, opacity = 1 }: MotifProps) {
  const xs = [32, 50, 68]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.6} fill="none">
      {xs.map((x) => (
        <g key={x}>
          <circle cx={x} cy="34" r="4" />
          <line x1={x} y1="38" x2={x} y2="58" />
          <line x1={x} y1="44" x2={x - 9} y2="36" />
          <line x1={x} y1="44" x2={x + 9} y2="36" />
          <line x1={x} y1="58" x2={x - 6} y2="72" />
          <line x1={x} y1="58" x2={x + 6} y2="72" />
        </g>
      ))}
    </g>
  )
}

function Kanghu({ color, opacity = 1 }: MotifProps) {
  const teeth = Array.from({ length: 11 }, (_, i) => 24 + i * 5.2)
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.6}>
      <line x1="22" y1="38" x2="78" y2="38" strokeWidth={2.4} />
      {teeth.map((x) => (
        <line key={x} x1={x} y1="38" x2={x} y2="66" />
      ))}
    </g>
  )
}

function Tara({ color, opacity = 1 }: MotifProps) {
  const pos = [[34, 36, 7], [62, 32, 5], [50, 56, 9], [70, 64, 5], [30, 64, 5]]
  function star(cx: number, cy: number, r: number) {
    const pts = Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4
      const rad = i % 2 === 0 ? r : r * 0.42
      return `${cx + Math.cos(a) * rad},${cy + Math.sin(a) * rad}`
    })
    return pts.join(' ')
  }
  return (
    <g opacity={opacity}>
      {pos.map(([cx, cy, r], i) => (
        <polygon key={i} points={star(cx, cy, r)} fill={color} fillOpacity={0.7} />
      ))}
    </g>
  )
}

function Phool({ color, opacity = 1 }: MotifProps) {
  const angles = [0, 90, 180, 270]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      {angles.map((a) => (
        <polygon key={a} points="50,38 56,50 50,62 44,50" transform={`rotate(${a} 50 50)`} fill={color} fillOpacity={0.22} />
      ))}
      <circle cx="50" cy="50" r="4" fill={color} />
    </g>
  )
}

function Swastik({ color, opacity = 1 }: MotifProps) {
  return (
    <g opacity={opacity} stroke={color} strokeWidth={2.2} strokeLinecap="square" fill="none">
      <path d="M50 30 V50 H70 M50 70 V50 H30" />
      <path d="M50 30 H38 M70 50 V38 M50 70 H62 M30 50 V62" />
    </g>
  )
}

function Lattice({ color, opacity = 1 }: MotifProps) {
  const rows = [32, 50, 68]
  const cols = [32, 50, 68]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.3} fill="none">
      {rows.map((y) =>
        cols.map((x) => <polygon key={`${x}-${y}`} points={`${x},${y - 9} ${x + 9},${y} ${x},${y + 9} ${x - 9},${y}`} />)
      )}
    </g>
  )
}

function Chevron({ color, opacity = 1 }: MotifProps) {
  const rows = [34, 50, 66]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.6} fill="none">
      {rows.map((y) => (
        <path key={y} d={`M22 ${y} L34 ${y + 8} L46 ${y} L58 ${y + 8} L70 ${y} L78 ${y + 8}`} />
      ))}
    </g>
  )
}

function Mandir({ color, opacity = 1 }: MotifProps) {
  const tiers = [[50, 76], [42, 86], [34, 96], [26, 102]]
  return (
    <g opacity={opacity} stroke={color} strokeWidth={1.4} fill="none">
      {tiers.map(([w, y], i) => (
        <polygon key={i} points={`50,${30 + i * 12} ${50 - w / 4},${y - 30} ${50 + w / 4},${y - 30}`} />
      ))}
      <line x1="50" y1="20" x2="50" y2="30" strokeWidth={2} />
      <circle cx="50" cy="18" r="1.8" fill={color} />
    </g>
  )
}

const MOTIFS: Record<string, (p: MotifProps) => React.ReactElement> = {
  machli: Machli, mayur: Mayur, kamal: Kamal, 'surya-chandra': SuryaChandra, kalpavriksha: Kalpavriksha,
  bharni: Bharni, kachni: Kachni, tantrik: Tantrik, godna: Godna, kohbar: Kohbar,
  chiriya: Chiriya, 'dabbidar-kiru': DabbidarKiru, guddi: Guddi, kanghu: Kanghu, tara: Tara,
  phool: Phool, swastik: Swastik, lattice: Lattice, chevron: Chevron, mandir: Mandir,
}

/**
 * Renders a motif (or a "key1+key2" confluence pair, overlaid and recoloured
 * per side) inside whatever viewBox cell the parent provides.
 */
export function MotifPrint({ motif, color, color2 }: { motif: string; color: string; color2?: string }) {
  const keys = motif.split('+')
  const Primary = MOTIFS[keys[0]]
  const Secondary = keys[1] ? MOTIFS[keys[1]] : undefined

  if (!Primary) return null

  if (Secondary) {
    return (
      <g>
        <g transform="translate(-9 0) scale(0.72)">
          <Primary color={color} opacity={0.85} />
        </g>
        <g transform="translate(9 0) scale(0.72)">
          <Secondary color={color2 ?? color} opacity={0.85} />
        </g>
      </g>
    )
  }

  return <Primary color={color} />
}
