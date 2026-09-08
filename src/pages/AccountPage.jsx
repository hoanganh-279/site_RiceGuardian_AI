import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export function AccountPage() {
  const { user, isAuthenticated, logout } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/trang-chu" replace />
  }

  return (
    <section className="rg-section">
      <div className="container">
        <div className="rg-account-stub rg-panel">
          <div className="rg-avatar rg-avatar-lg" aria-hidden="true">
            {user.name.slice(0, 1)}
          </div>
          <h1 className="rg-section-title">Tài khoản</h1>
          <p className="rg-section-lead mx-auto">
            Xin chào, <strong>{user.name}</strong> ({user.email}).
          </p>
          <p className="rg-section-lead mx-auto">
            Thông tin người dùng chi tiết sẽ được bổ sung sau. Hiện đây là phiên đăng nhập mẫu (mock)
            — chưa kết nối Google / Supabase thật.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Link to="/trang-chu" className="rg-btn rg-btn-outline">
              Về trang chủ
            </Link>
            <button type="button" className="rg-btn rg-btn-primary" onClick={logout}>
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
