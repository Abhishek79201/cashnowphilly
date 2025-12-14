import type { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ThreeStepsSection from '@/components/ThreeStepsSection'
import WantToHelpSection from '@/components/WantToHelpSection'
import FiveReasonsSection from '@/components/FiveReasonsSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sell Your Home Fast | Cash Now Philly',
  description: 'Need to sell your home fast? Get a fair cash offer in 24 hours. No repairs, no fees, no commissions. We buy houses in any condition in Philadelphia.',
  openGraph: {
    title: 'Sell Your Home Fast | Cash Now Philly',
    description: 'Get a fair cash offer in 24 hours. No repairs, no fees, no commissions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cash Now Philly - We Buy Houses',
      },
    ],
    siteName: 'Cash Now Philly',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ThreeStepsSection />
      <WantToHelpSection />
      <FiveReasonsSection />
      <Footer />
    </main>
  )
}

