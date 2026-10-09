import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ScrollToTop } from './components/chrome/ScrollToTop'
import { LandingLayout } from './layouts/LandingLayout'
import { SiteLayout } from './layouts/SiteLayout'
import { LandingPage } from './pages/LandingPage'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { PolicyPage } from './pages/PolicyPage'
import { ProductPage } from './pages/ProductPage'
import { NewsListPage } from './pages/NewsListPage'
import { NewsDetailPage } from './pages/NewsDetailPage'
import { ContactPage } from './pages/ContactPage'
import { AccountPage } from './pages/AccountPage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route element={<SiteLayout />}>
            <Route path="trang-chu" element={<HomePage />} />
            <Route path="gioi-thieu" element={<AboutPage />} />
            <Route path="dich-vu" element={<ServicesPage />} />
            <Route path="giai-phap" element={<SolutionsPage />} />
            <Route path="chinh-sach" element={<PolicyPage />} />
            <Route path="san-pham" element={<ProductPage />} />
            <Route path="tin-tuc" element={<NewsListPage />} />
            <Route path="tin-tuc/:slug" element={<NewsDetailPage />} />
            <Route path="lien-he" element={<ContactPage />} />
            <Route path="tai-khoan" element={<AccountPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
