import type { Product } from '@/types/product'

export const products: Product[] = [
  // ───────────────────────────── Madhubani Edit ─────────────────────────────
  // Ten T-shirts, each carrying one of Mithila's defining painting styles & motifs
  {
    slug: 'bharni-bloom-tee', collectionSlug: 'madhubani-edit', name: 'Bharni Bloom Tee', price: 2400,
    motifKey: 'bharni', fabric: '220 GSM heavyweight combed cotton', fit: 'Oversized tee, dropped shoulder',
    motif: 'Bharni — filled, vibrant folk art', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Bharni is Mithila\'s boldest voice — bright pigment filling every outline, mythic florals blooming edge to edge. This tee carries that same density of colour onto heavyweight cotton, unapologetic and alive.',
  },
  {
    slug: 'kachni-lines-tee', collectionSlug: 'madhubani-edit', name: 'Kachni Lines Tee', price: 2200,
    motifKey: 'kachni', fabric: '200 GSM combed cotton jersey', fit: 'Regular fit tee, ribbed collar',
    motif: 'Kachni — fine-line monochrome art', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Where Bharni fills, Kachni draws — disciplined black-and-red linework, cross-hatched into elaborate detail. We trace that same restraint across the chest in monochrome, letting the linework speak for itself.',
  },
  {
    slug: 'tantrik-eye-tee', collectionSlug: 'madhubani-edit', name: 'Tantrik Eye Tee', price: 2600,
    motifKey: 'tantrik', fabric: 'Brushed cotton jersey', fit: 'Boxy tee, dropped shoulder',
    motif: 'Tantrik — cosmic & spiritual symbolism', sizes: ['M', 'L', 'XL'],
    description: 'The Tantrik style draws on esoteric symbols and deity forms — cosmic eyes and sacred geometry, the unseen made visible. Centred low on a boxy tee, it sits like a quiet ward against the ordinary.',
  },
  {
    slug: 'godna-dot-tee', collectionSlug: 'madhubani-edit', name: 'Godna Dot Tee', price: 2300,
    motifKey: 'godna', fabric: '100% organic cotton', fit: 'Regular fit tee',
    motif: 'Godna — tattoo-inspired dot artistry', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Godna means tattoo — a style built entirely from dots, dashes and short strokes that resolve into birds, trees, figures. Pointillism as folk art, placed dot by dot across soft organic cotton.',
  },
  {
    slug: 'kohbar-union-tee', collectionSlug: 'madhubani-edit', name: 'Kohbar Union Tee', price: 2500,
    motifKey: 'kohbar', fabric: 'Handloom cotton blend', fit: 'Relaxed tee, side slits',
    motif: 'Kohbar — wedding symbol of union', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Painted for centuries on the walls of bridal chambers, Kohbar binds lotus, fish and bamboo into a single symbol of fertility and union. Worn here as a quiet promise — that two can become something larger.',
  },
  {
    slug: 'machli-fish-tee', collectionSlug: 'madhubani-edit', name: 'Machli Fish Tee', price: 2200,
    motifKey: 'machli', fabric: '100% handloom cotton', fit: 'Oversized tee, dropped shoulder',
    motif: 'Machli — fish, fortune & fertility', sizes: ['S', 'M', 'L', 'XL'],
    description: 'The fish is Mithila\'s most auspicious creature — drawn swimming across courtyard walls for generations as a wish for fortune. It crosses the chest here in fine ochre linework, carried from wall to wardrobe.',
  },
  {
    slug: 'mayur-peacock-tee', collectionSlug: 'madhubani-edit', name: 'Mayur Peacock Tee', price: 2400,
    motifKey: 'mayur', fabric: 'Combed cotton jersey', fit: 'Regular fit tee',
    motif: 'Mayur — peacock, grace in folk form', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The peacock has danced across Mithila walls since before memory — tail feathers fanned into concentric rings, a symbol of grace and the coming monsoon. Reimagined here in a single confident chest placement.',
  },
  {
    slug: 'kamal-lotus-tee', collectionSlug: 'madhubani-edit', name: 'Kamal Lotus Tee', price: 2100,
    motifKey: 'kamal', fabric: 'Lightweight cotton jersey', fit: 'Cropped tee',
    motif: 'Kamal — lotus rising from mud', sizes: ['S', 'M', 'L'],
    description: 'Concentric petals rise in rings — purity blooming out of mud, one of Mithila\'s oldest visual prayers. Cropped and clean, it lets the motif do all the talking.',
  },
  {
    slug: 'surya-chandra-tee', collectionSlug: 'madhubani-edit', name: 'Surya-Chandra Tee', price: 2500,
    motifKey: 'surya-chandra', fabric: '220 GSM heavyweight cotton', fit: 'Longline tee',
    motif: 'Surya-Chandra — sun & moon in balance', sizes: ['M', 'L', 'XL'],
    description: 'Sun and moon, day and night, drawn together in the cosmic balance Mithila artists have painted for centuries. Set across chest and hem, it frames the body the way the sky frames the earth.',
  },
  {
    slug: 'kalpavriksha-tee', collectionSlug: 'madhubani-edit', name: 'Kalpavriksha Tee', price: 2600,
    motifKey: 'kalpavriksha', fabric: 'Brushed organic cotton', fit: 'Oversized tee, dropped shoulder',
    motif: 'Kalpavriksha — the wishing tree of life', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The tree that connects root to wish, earth to sky — Kalpavriksha\'s branches stretch shoulder to shoulder in fine linework, a tradition of abundance carried forward in cotton.',
  },

  // ───────────────────────────── Kullvi Edit ─────────────────────────────
  // Ten T-shirts, each carrying one of Kullu's signature woven motifs
  {
    slug: 'chiriya-flight-tee', collectionSlug: 'kullvi-edit', name: 'Chiriya Flight Tee', price: 2300,
    motifKey: 'chiriya', fabric: 'Brushed flannel-weight cotton jersey', fit: 'Regular fit tee',
    motif: 'Chiriya — flock of birds in flight', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Small crosses arranged on the diagonal, repeating like a flock crossing a mountain sky — Chiriya is one of Kullu\'s oldest woven motifs, migrating here from shawl border to chest print, indigo on grey.',
  },
  {
    slug: 'dabbidar-kiru-tee', collectionSlug: 'kullvi-edit', name: 'Dabbidar Kiru Tee', price: 2400,
    motifKey: 'dabbidar-kiru', fabric: '100% combed cotton', fit: 'Boxy tee',
    motif: 'Dabbidar Kiru — the spotted serpent', sizes: ['M', 'L', 'XL'],
    description: 'A spotted serpent winding through geometric repeats — Dabbidar Kiru turns a mountain creature into pure pattern. Bold and looping across a boxy silhouette, slightly uncanny, entirely Kullu.',
  },
  {
    slug: 'guddi-doll-tee', collectionSlug: 'kullvi-edit', name: 'Guddi Doll Tee', price: 2200,
    motifKey: 'guddi', fabric: 'Combed cotton jersey', fit: 'Regular fit tee',
    motif: 'Guddi — the stylised doll, arms raised', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Guddi is a tiny woven figure — arms raised, instantly recognisable across generations of Kullu shawls. Repeated in a grid across the chest, it reads like a quiet chorus of small celebrations.',
  },
  {
    slug: 'kanghu-comb-tee', collectionSlug: 'kullvi-edit', name: 'Kanghu Comb Tee', price: 2100,
    motifKey: 'kanghu', fabric: 'Lightweight cotton jersey', fit: 'Cropped tee',
    motif: 'Kanghu — the comb, a mark of care', sizes: ['S', 'M', 'L'],
    description: 'The comb motif, Kanghu, appears in Kullvi borders as a symbol of grooming and daily ritual. Lined into a clean repeating border at the hem — understated, deliberate, easy to live in.',
  },
  {
    slug: 'tara-star-tee', collectionSlug: 'kullvi-edit', name: 'Tara Star Tee', price: 2500,
    motifKey: 'tara', fabric: '220 GSM heavyweight cotton', fit: 'Oversized tee',
    motif: 'Tara — star, a guide through the dark', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Tara — star — scatters across Kullu textiles the way they scatter across a high-altitude night sky. Placed loosely across an oversized tee, it feels like looking up from the valley floor.',
  },
  {
    slug: 'phool-bloom-tee', collectionSlug: 'kullvi-edit', name: 'Phool Bloom Tee', price: 2200,
    motifKey: 'phool', fabric: 'Organic cotton jersey', fit: 'Regular fit tee',
    motif: 'Phool — stylised mountain florals', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Phool — flower — softens Kullu\'s geometry with stylised blooms woven between diamonds and chevrons. A small bouquet at the chest, indigo-dyed, mountain-bred.',
  },
  {
    slug: 'swastik-weave-tee', collectionSlug: 'kullvi-edit', name: 'Swastik Weave Tee', price: 2300,
    motifKey: 'swastik', fabric: 'Combed cotton', fit: 'Regular fit tee',
    motif: 'Swastik — the auspicious geometric mark', sizes: ['S', 'M', 'L', 'XL'],
    description: 'An ancient symbol of wellbeing and good fortune, Swastik runs through Kullvi weaves as a quiet geometric blessing. Centred and balanced, exactly as the symbol intends.',
  },
  {
    slug: 'diamond-lattice-tee', collectionSlug: 'kullvi-edit', name: 'Diamond Lattice Tee', price: 2600,
    motifKey: 'lattice', fabric: 'Heavyweight cotton twill jersey', fit: 'Boxy tee, dropped shoulder',
    motif: 'Lattice — the diamond grid of the loom', sizes: ['M', 'L', 'XL'],
    description: 'The diamond lattice is Kullu\'s signature geometry — a precise woven grid built from the symmetry of peaks and valleys. Scaled up across a boxy tee, it becomes architecture you can wear.',
  },
  {
    slug: 'chevron-ridge-tee', collectionSlug: 'kullvi-edit', name: 'Chevron Ridge Tee', price: 2300,
    motifKey: 'chevron', fabric: 'Brushed cotton jersey', fit: 'Regular fit tee',
    motif: 'Chevron — the zigzag mountain ridge', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Bands of zigzagging chevrons run the length of every Kullu shawl — a woven echo of ridgelines against the sky. Here they trace the sleeve and hem, mountain edges drawn in thread.',
  },
  {
    slug: 'mandir-spire-tee', collectionSlug: 'kullvi-edit', name: 'Mandir Spire Tee', price: 2500,
    motifKey: 'mandir', fabric: '220 GSM heavyweight cotton', fit: 'Longline tee',
    motif: 'Mandir — temple spire geometry', sizes: ['M', 'L', 'XL'],
    description: 'Stacked, tiered geometry echoing the wooden temple spires of the Kullu valley — architecture turned into ornament. Set centrally, it rises the way a spire rises over the village square.',
  },

  // ───────────────────────────── Confluence ─────────────────────────────
  // Fusion tees — one Madhubani motif and one Kullvi motif sharing a single print
  {
    slug: 'machli-tara-tee', collectionSlug: 'confluence', name: 'Machli × Tara Tee', price: 2800,
    motifKey: 'machli+tara', fabric: 'Double-dyed heavyweight cotton, ochre-to-indigo gradient', fit: 'Oversized tee',
    motif: 'Machli meets Tara — fish swims toward starlight', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Mithila\'s fish swims toward a field of Kullu stars — earth\'s fortune reaching for mountain sky. Two motifs from two traditions, sharing one chest, exactly as ABHAYA imagines confluence.',
  },
  {
    slug: 'kohbar-chiriya-tee', collectionSlug: 'confluence', name: 'Kohbar × Chiriya Tee', price: 2700,
    motifKey: 'kohbar+chiriya', fabric: 'Handloom cotton blend', fit: 'Relaxed tee',
    motif: 'Kohbar meets Chiriya — union takes flight', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The wedding symbol of Kohbar — lotus, fish, union — sits beside a flock of Chiriya birds taking flight. A tee about two cultures choosing each other, and what grows from that choice.',
  },
  {
    slug: 'kalpavriksha-lattice-tee', collectionSlug: 'confluence', name: 'Kalpavriksha × Lattice Tee', price: 2900,
    motifKey: 'kalpavriksha+lattice', fabric: 'Brushed organic cotton', fit: 'Longline tee',
    motif: 'Kalpavriksha meets the diamond lattice', sizes: ['M', 'L', 'XL'],
    description: 'The wishing tree of Mithila grows its roots through a Kullu diamond lattice — branch and geometry intertwining into a single print. Plains and peaks, growing toward each other.',
  },
  {
    slug: 'bharni-swastik-tee', collectionSlug: 'confluence', name: 'Bharni × Swastik Tee', price: 2700,
    motifKey: 'bharni+swastik', fabric: '220 GSM heavyweight cotton', fit: 'Boxy tee',
    motif: 'Bharni colour meets Swastik geometry', sizes: ['S', 'M', 'L', 'XL'],
    description: 'Bharni\'s filled, vivid colour floods the lines of a Kullvi swastik — Bihar\'s palette inside Himachal\'s geometry. Bold, balanced, and entirely ABHAYA.',
  },
]

export function getProductsByCollection(collectionSlug: string) {
  return products.filter((p) => p.collectionSlug === collectionSlug)
}

export function getProduct(collectionSlug: string, productSlug: string) {
  return products.find((p) => p.collectionSlug === collectionSlug && p.slug === productSlug)
}
