interface MarqueeStripProps {
  text?: string
  className?: string
  speed?: number
  color?: 'earth' | 'sky'
}

const defaultText = 'FEARLESSNESS · अभय · MADHUBANI · KULLVI · PLAINS MEETS MOUNTAINS · EARTH MEETS SKY · CHANGING TIME · FRIENDSHIP · '

export function MarqueeStrip({ text = defaultText, className = '', color = 'earth' }: MarqueeStripProps) {
  const repeated = text.repeat(3)
  const textColor = color === 'earth' ? 'text-earth-warm' : 'text-sky-bright'

  return (
    <div className={`overflow-hidden bg-black-soft py-3 border-y border-earth-dark/30 ${className}`}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        <span className={`text-xs font-display tracking-[0.2em] uppercase ${textColor} font-medium`}>
          {repeated}
        </span>
        <span className={`text-xs font-display tracking-[0.2em] uppercase ${textColor} font-medium`}>
          {repeated}
        </span>
      </div>
    </div>
  )
}
