import { Hero } from '@/components/home/Hero'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'
import { CollectionPreview } from '@/components/home/CollectionPreview'
import { CultureTeaser } from '@/components/home/CultureTeaser'
import { LookbookTeaser } from '@/components/home/LookbookTeaser'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <MarqueeStrip color="sky" text="MADHUBANI · KULLVI · CONFLUENCE · अभय · EARTH × SKY · " className="border-t-0" />
      <CollectionPreview />
      <div className="px-6 max-w-7xl mx-auto opacity-20">
        <MadhubaniDivider />
      </div>
      <CultureTeaser />
      <LookbookTeaser />
    </main>
  )
}
