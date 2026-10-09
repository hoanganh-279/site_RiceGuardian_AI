import { HomeHero } from '../components/landing/HomeHero'
import { HomeAbout } from '../components/landing/HomeAbout'
import { HomeTechGrid } from '../components/landing/HomeTechGrid'
import { HomeProcessTabs } from '../components/landing/HomeProcessTabs'
import { HomeProducts } from '../components/landing/HomeProducts'
import { HomeCtaBand, HomeSupport } from '../components/landing/HomeSupport'
import { HomeNews } from '../components/landing/HomeNews'

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeTechGrid />
      <HomeProcessTabs />
      <HomeCtaBand />
      <HomeProducts />
      <HomeSupport />
      <HomeNews />
    </>
  )
}
