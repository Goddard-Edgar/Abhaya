interface PatternBackgroundProps {
  variant?: 'madhubani' | 'kullvi'
  opacity?: number
  className?: string
}

export function PatternBackground({ variant = 'madhubani', opacity = 0.06, className = '' }: PatternBackgroundProps) {
  if (variant === 'kullvi') {
    return (
      <svg
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern id="kullvi-bg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="20,2 38,20 20,38 2,20" stroke="#00B4D8" strokeWidth="0.8" fill="none" />
            <polygon points="20,10 30,20 20,30 10,20" stroke="#00B4D8" strokeWidth="0.5" fill="none" />
            <line x1="2" y1="2" x2="38" y2="38" stroke="#00B4D8" strokeWidth="0.3" />
            <line x1="38" y1="2" x2="2" y2="38" stroke="#00B4D8" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kullvi-bg)" />
      </svg>
    )
  }

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="madhubani-bg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <ellipse cx="30" cy="30" rx="18" ry="9" stroke="#C4956A" strokeWidth="0.6" fill="none" />
          <path d="M 12 30 L 4 22 L 4 38 Z" stroke="#C4956A" strokeWidth="0.5" fill="none" />
          <circle cx="38" cy="28" r="2" fill="#C4956A" opacity="0.5" />
          <line x1="14" y1="26" x2="42" y2="26" stroke="#C4956A" strokeWidth="0.3" />
          <line x1="14" y1="30" x2="44" y2="30" stroke="#C4956A" strokeWidth="0.3" />
          <line x1="14" y1="34" x2="42" y2="34" stroke="#C4956A" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#madhubani-bg)" />
    </svg>
  )
}
