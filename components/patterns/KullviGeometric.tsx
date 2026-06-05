interface KullviGeometricProps {
  className?: string
  color?: string
  size?: number
}

export function KullviGeometric({ className = '', color = '#00B4D8', size = 160 }: KullviGeometricProps) {
  const cols = 4
  const rows = 4
  const cellSize = size / cols
  const halfCell = cellSize / 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const cx = col * cellSize + halfCell
          const cy = row * cellSize + halfCell
          const d = halfCell * 0.8
          return (
            <g key={`${row}-${col}`}>
              {/* Outer diamond */}
              <polygon
                points={`${cx},${cy - d} ${cx + d},${cy} ${cx},${cy + d} ${cx - d},${cy}`}
                stroke={color}
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
              {/* Inner diamond */}
              <polygon
                points={`${cx},${cy - d * 0.5} ${cx + d * 0.5},${cy} ${cx},${cy + d * 0.5} ${cx - d * 0.5},${cy}`}
                stroke={color}
                strokeWidth="0.5"
                fill="none"
                opacity="0.4"
              />
              {/* Cross inside */}
              <line x1={cx - d * 0.7} y1={cy - d * 0.7} x2={cx + d * 0.7} y2={cy + d * 0.7} stroke={color} strokeWidth="0.4" opacity="0.3" />
              <line x1={cx + d * 0.7} y1={cy - d * 0.7} x2={cx - d * 0.7} y2={cy + d * 0.7} stroke={color} strokeWidth="0.4" opacity="0.3" />
            </g>
          )
        })
      )}
    </svg>
  )
}
