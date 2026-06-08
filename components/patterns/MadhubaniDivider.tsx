interface MadhubaniDividerProps {
  className?: string
  color?: string
}

const rnd = (n: number) => Math.round(n * 1e4) / 1e4

export function MadhubaniDivider({ className = '', color = '#C4956A' }: MadhubaniDividerProps) {
  const opacity = 0.7

  return (
    <svg
      width="100%"
      height="60"
      viewBox="0 0 800 60"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="divider-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke={color} strokeWidth="0.5" opacity="0.4" />
        </pattern>
      </defs>

      {/* Horizontal center line */}
      <line x1="0" y1="30" x2="800" y2="30" stroke={color} strokeWidth="0.5" opacity="0.3" />

      {/* Fish 1 */}
      <g transform="translate(80, 30)">
        <ellipse cx="0" cy="0" rx="18" ry="9" stroke={color} strokeWidth="1" fill="none" opacity={opacity} />
        <path d="M -18 0 L -26 -8 L -26 8 Z" stroke={color} strokeWidth="0.8" fill="none" opacity={opacity} />
        <circle cx="10" cy="-2" r="2" fill={color} opacity={opacity} />
        <line x1="-15" y1="-5" x2="12" y2="-5" stroke={color} strokeWidth="0.4" opacity="0.4" />
        <line x1="-15" y1="0" x2="14" y2="0" stroke={color} strokeWidth="0.4" opacity="0.4" />
        <line x1="-15" y1="5" x2="12" y2="5" stroke={color} strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Lotus 1 */}
      <g transform="translate(200, 30)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          return (
            <ellipse
              key={angle}
              cx={rnd(Math.cos(rad) * 14)}
              cy={rnd(Math.sin(rad) * 14)}
              rx={10}
              ry={4}
              transform={`rotate(${angle}, ${rnd(Math.cos(rad) * 14)}, ${rnd(Math.sin(rad) * 14)})`}
              stroke={color}
              strokeWidth="0.8"
              fill="none"
              opacity={opacity}
            />
          )
        })}
        <circle cx="0" cy="0" r="4" stroke={color} strokeWidth="0.8" fill="none" opacity={opacity} />
        <circle cx="0" cy="0" r="1.5" fill={color} opacity={opacity} />
      </g>

      {/* Geometric diamond */}
      <g transform="translate(320, 30)">
        <polygon points="0,-14 14,0 0,14 -14,0" stroke={color} strokeWidth="1" fill="none" opacity={opacity} />
        <polygon points="0,-8 8,0 0,8 -8,0" stroke={color} strokeWidth="0.6" fill="none" opacity="0.5" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke={color} strokeWidth="0.4" opacity="0.4" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke={color} strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Fish 2 (mirrored) */}
      <g transform="translate(440, 30) scale(-1, 1)">
        <ellipse cx="0" cy="0" rx="18" ry="9" stroke={color} strokeWidth="1" fill="none" opacity={opacity} />
        <path d="M -18 0 L -26 -8 L -26 8 Z" stroke={color} strokeWidth="0.8" fill="none" opacity={opacity} />
        <circle cx="10" cy="-2" r="2" fill={color} opacity={opacity} />
        <line x1="-15" y1="-5" x2="12" y2="-5" stroke={color} strokeWidth="0.4" opacity="0.4" />
        <line x1="-15" y1="0" x2="14" y2="0" stroke={color} strokeWidth="0.4" opacity="0.4" />
        <line x1="-15" y1="5" x2="12" y2="5" stroke={color} strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Lotus 2 */}
      <g transform="translate(560, 30)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          return (
            <ellipse
              key={angle}
              cx={rnd(Math.cos(rad) * 14)}
              cy={rnd(Math.sin(rad) * 14)}
              rx={10}
              ry={4}
              transform={`rotate(${angle}, ${rnd(Math.cos(rad) * 14)}, ${rnd(Math.sin(rad) * 14)})`}
              stroke={color}
              strokeWidth="0.8"
              fill="none"
              opacity={opacity}
            />
          )
        })}
        <circle cx="0" cy="0" r="4" stroke={color} strokeWidth="0.8" fill="none" opacity={opacity} />
        <circle cx="0" cy="0" r="1.5" fill={color} opacity={opacity} />
      </g>

      {/* Geometric diamond 2 */}
      <g transform="translate(680, 30)">
        <polygon points="0,-14 14,0 0,14 -14,0" stroke={color} strokeWidth="1" fill="none" opacity={opacity} />
        <polygon points="0,-8 8,0 0,8 -8,0" stroke={color} strokeWidth="0.6" fill="none" opacity="0.5" />
        <line x1="-14" y1="0" x2="14" y2="0" stroke={color} strokeWidth="0.4" opacity="0.4" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke={color} strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Border lines top and bottom */}
      <line x1="0" y1="2" x2="800" y2="2" stroke={color} strokeWidth="0.5" opacity="0.2" />
      <line x1="0" y1="58" x2="800" y2="58" stroke={color} strokeWidth="0.5" opacity="0.2" />
    </svg>
  )
}
