export type CollectionCategory = 'madhubani' | 'kullvi' | 'fusion'

export type Collection = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  category: CollectionCategory
  items: number
  featured?: boolean
}
