'use client'

import { useState } from 'react'
import { CollectionCard } from './CollectionCard'
import type { Collection, CollectionCategory } from '@/types/collection'
import { cn } from '@/lib/cn'

const filters: { label: string; value: CollectionCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Madhubani', value: 'madhubani' },
  { label: 'Kullvi', value: 'kullvi' },
  { label: 'Fusion', value: 'fusion' },
]

export function CollectionFilter({ collections }: { collections: Collection[] }) {
  const [active, setActive] = useState<CollectionCategory | 'all'>('all')

  const filtered = active === 'all' ? collections : collections.filter((c) => c.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-4 mb-12 border-b border-earth-dark/20 pb-6">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={cn(
              'text-xs tracking-[0.2em] uppercase font-display transition-colors duration-200 pb-1',
              active === value
                ? 'text-earth-warm border-b border-earth-warm'
                : 'text-earth-light/30 hover:text-earth-light/60'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </div>
    </div>
  )
}
