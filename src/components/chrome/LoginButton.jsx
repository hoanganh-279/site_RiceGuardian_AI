import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

export function LoginButton({ ghost = false, compact = false }) {
  const { isAuthenticated, user, loginWithGoogleMock, logout } = useAuth()

  if (isAuthenticated && user) {
    return (
      <div className="rg-header-actions">
        <Link
          to="/tai-khoan"
          className={`rg-user-chip${ghost ? ' rg-user-chip-light' : ''}`}
          title="Tài khoản"
        >
          <span className="rg-avatar" aria-hidden="true">
            {user.name.slice(0, 1)}
          </span>
          <span className="d-none d-sm-inline">{user.name}</span>
        </Link>
        <button
          type="button"
          className={`rg-btn ${ghost ? 'rg-btn-ghost' : 'rg-btn-outline'}`}
          onClick={logout}
        >
          Đăng xuất
        </button>
      </div>
    )
  }

  return (
    <button type="button" className="rg-btn rg-btn-danger" onClick={loginWithGoogleMock}>
      {compact ? 'Đăng nhập' : 'Đăng nhập với Google'}
    </button>
  )
}
