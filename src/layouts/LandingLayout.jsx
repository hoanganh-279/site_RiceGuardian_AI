import { Outlet } from 'react-router-dom'
import { LandingHeader } from '../components/chrome/LandingHeader'

export function LandingLayout() {
  return (
    <div className="rg-page">
      <LandingHeader />
      <main className="rg-page-main">
        <Outlet />
      </main>
    </div>
  )
}
