import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/chrome/SiteHeader'
import { SiteFooter } from '../components/chrome/SiteFooter'

export function SiteLayout() {
  return (
    <div className="rg-page">
      <SiteHeader />
      <main className="rg-page-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
