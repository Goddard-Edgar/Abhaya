interface MadhubaniCornerProps {
  rotate?: 0 | 90 | 180 | 270
  size?: number
  className?: string
}

const rnd = (n: number) => Math.round(n * 1e4) / 1e4

export function MadhubaniCorner({ rotate = 0, size = 120, className = '' }: MadhubaniCornerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={className}
    >
      <defs>
        <pattern id={`hatch-${rotate}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#C4956A" strokeWidth="0.6" opacity="0.5" />
        </pattern>
      </defs>

      {/* Outer arc */}
      <path d="M 0 110 Q 0 0 110 0" stroke="#C4956A" strokeWidth="1.5" fill="none" />
      <path d="M 0 95 Q 0 0 95 0" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d="M 0 80 Q 0 0 80 0" stroke="#C4956A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Corner lotus petals radiating from (0,0) */}
      {[0, 15, 30, 45, 60, 75, 90].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = rnd(Math.cos(rad) * 18)
        const y1 = rnd(Math.sin(rad) * 18)
        const x2 = rnd(Math.cos(rad) * 38)
        const y2 = rnd(Math.sin(rad) * 38)
        const cx = rnd(Math.cos(rad) * 28)
        const cy = rnd(Math.sin(rad) * 28)
        return (
          <g key={angle}>
            <ellipse
              cx={cx}
              cy={cy}
              rx={8}
              ry={3}
              transform={`rotate(${angle}, ${cx}, ${cy})`}
              stroke="#C4956A"
              strokeWidth="0.8"
              fill="none"
              opacity="0.7"
            />
          </g>
        )
      })}

      {/* Small dots along outer arc */}
      {[0, 15, 30, 45, 60, 75, 90].map((angle) => {
        const rad = (angle * Math.PI) / 180
        return (
          <circle
            key={`dot-${angle}`}
            cx={rnd(Math.cos(rad) * 105)}
            cy={rnd(Math.sin(rad) * 105)}
            r={2}
            fill="#C4956A"
            opacity="0.6"
          />
        )
      })}

      {/* Corner fish — small, near the corner */}
      <ellipse cx="14" cy="14" rx="8" ry="5" stroke="#C4956A" strokeWidth="0.8" fill="none" opacity="0.5" transform="rotate(45 14 14)" />
      <circle cx="18" cy="10" r="1.2" fill="#C4956A" opacity="0.6" />
    </svg>
  )
}
