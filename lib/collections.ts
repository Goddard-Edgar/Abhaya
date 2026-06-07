import type { Collection } from '@/types/collection'

export const collections: Collection[] = [
  {
    slug: 'madhubani-edit',
    name: 'Madhubani Edit',
    tagline: 'Where earth pigments meet modern cotton',
    description: 'Rooted in the Mithila plains of Bihar, the Madhubani Edit translates centuries-old folk painting into wearable form. Each piece carries the iconic fish, lotus, and geometric motifs hand-rendered in earthy ochres, burnt siennas, and deep blacks.',
    image: '/images/lookbook/madhubani-floral-fabric.jpg',
    category: 'madhubani',
    items: 10,
    featured: true,
  },
  {
    slug: 'kullvi-edit',
    name: 'Kullvi Edit',
    tagline: 'Mountain geometry on city streets',
    description: 'From the Beas river valley of Himachal Pradesh, the Kullvi Edit draws from the intricate woven geometry of Kullu shawls. Diamond lattices, chevron borders, and indigo-dyed threads become architectural elements on contemporary silhouettes.',
    image: '/images/lookbook/kullvi-loom-hands.jpg',
    category: 'kullvi',
    items: 10,
    featured: true,
  },
  {
    slug: 'confluence',
    name: 'Confluence',
    tagline: 'Plains meets mountains, earth meets sky',
    description: 'Confluence is the heart of ABHAYA. The collection where Madhubani\'s earth pigments dissolve into Kullvi\'s mountain indigo — where Bihar plains meet Himachal peaks. These are garments that carry two geographies, two traditions, one vision.',
    image: '/images/lookbook/madhubani-peacock.jpg',
    category: 'fusion',
    items: 4,
    featured: true,
  },
]
