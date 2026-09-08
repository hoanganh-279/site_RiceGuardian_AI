import { useEffect } from 'react'
import { HeroSection } from '../components/landing/HeroSection'
import { ProblemSection } from '../components/landing/ProblemSection'
import { SolutionSection } from '../components/landing/SolutionSection'
import { ProductSection } from '../components/landing/ProductSection'
import { PillarsSection } from '../components/landing/PillarsSection'
import { BenefitsSection } from '../components/landing/BenefitsSection'
import { ServiceTimeline } from '../components/landing/ServiceTimeline'
import { PartnersSection } from '../components/landing/PartnersSection'
import { PricingSection } from '../components/landing/PricingSection'
import { FaqSection } from '../components/landing/FaqSection'
import { FinalCta } from '../components/landing/FinalCta'
import { SiteFooter } from '../components/chrome/SiteFooter'

export function LandingPage() {
  useEffect(() => {
    document.documentElement.classList.add('rg-landing-active')
    return () => document.documentElement.classList.remove('rg-landing-active')
  }, [])

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <PillarsSection />
      <BenefitsSection />
      <ServiceTimeline />
      <PartnersSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
    </>
  )
}
