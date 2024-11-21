import { Contact } from '@/components/sections/contact'
import { FAQ } from '@/components/sections/faq'
import { Features } from '@/components/sections/features'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Pricing } from '@/components/sections/pricing'
import { Header } from '@/components/sections/header'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background gradient effect */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/2 bg-teal-400/5 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, rgba(45, 212, 191, 0) 70%)',
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}