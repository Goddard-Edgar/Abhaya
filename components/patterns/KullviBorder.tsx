interface KullviBorderProps {
  className?: string
  color?: string
}

export function KullviBorder({ className = '', color = '#00B4D8' }: KullviBorderProps) {
  const unit = 20
  const count = 40

  return (
    <svg
      width="100%"
      height={unit * 3}
      viewBox={`0 0 ${unit * count} ${unit * 3}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top line */}
      <line x1="0" y1="2" x2={unit * count} y2="2" stroke={color} strokeWidth="0.8" opacity="0.4" />
      {/* Bottom line */}
      <line x1="0" y1={unit * 3 - 2} x2={unit * count} y2={unit * 3 - 2} stroke={color} strokeWidth="0.8" opacity="0.4" />

      {/* Repeating pattern: triangle up → diamond → triangle down */}
      {Array.from({ length: count }).map((_, i) => {
        const x = i * unit
        const cy = unit * 1.5
        const pattern = i % 3

        if (pattern === 0) {
          // Triangle pointing up
          return (
            <polygon
              key={i}
              points={`${x + unit / 2},${cy - unit * 0.6} ${x + unit},${cy + unit * 0.4} ${x},${cy + unit * 0.4}`}
              stroke={color}
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
          )
        }
        if (pattern === 1) {
          // Diamond
          return (
            <polygon
              key={i}
              points={`${x + unit / 2},${cy - unit * 0.7} ${x + unit},${cy} ${x + unit / 2},${cy + unit * 0.7} ${x},${cy}`}
              stroke={color}
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
          )
        }
        // Triangle pointing down
        return (
          <polygon
            key={i}
            points={`${x},${cy - unit * 0.4} ${x + unit},${cy - unit * 0.4} ${x + unit / 2},${cy + unit * 0.6}`}
            stroke={color}
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
        )
      })}
    </svg>
  )
}
