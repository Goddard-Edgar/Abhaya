import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Cursor } from '@/components/ui/Cursor'
import { PageTransition } from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'ABHAYA — Fearless Indian Streetwear',
  description: 'Where Madhubani meets Kullvi. Plains meets mountains. Earth meets sky. Changing time, friendship, and the mixing of cultures.',
  openGraph: {
    title: 'ABHAYA',
    description: 'Fearless Indian Streetwear rooted in Madhubani and Kullvi craft traditions',
    siteName: 'ABHAYA',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain-overlay ambient-glow">
        <Cursor />
        <Nav />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
