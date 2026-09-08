import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { googleClientId, siteRequest } from '../services/siteApi'

const SESSION_KEY = 'rg_site_session'
const PENDING_KEY = 'rg_site_pending_email'

const AuthContext = createContext(null)

function readJson(key) {
  try {
    const raw = sessionStorage.getItem(key) || localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function loadGoogleScript() {
  if (window.google?.accounts?.oauth2) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-rg-google="1"]')
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Không tải được Google.')), { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.dataset.rgGoogle = '1'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Không tải được Google. Kiểm tra mạng.'))
    document.head.appendChild(script)
  })
}

function requestGoogleAccessToken(clientId) {
  return new Promise((resolve, reject) => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'openid email profile',
      callback: (response) => {
        if (response?.error) {
          reject(new Error('Đăng nhập Google bị hủy hoặc bị từ chối.'))
          return
        }
        if (!response?.access_token) {
          reject(new Error('Google không trả token.'))
          return
        }
        resolve(response.access_token)
      },
      error_callback: () => reject(new Error('Đăng nhập Google bị hủy.')),
    })
    client.requestAccessToken({ prompt: 'select_account' })
  })
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readJson(SESSION_KEY))
  const [pendingEmail, setPendingEmail] = useState(() => sessionStorage.getItem(PENDING_KEY) || '')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const saveSession = useCallback((next) => {
    sessionStorage.removeItem(PENDING_KEY)
    localStorage.setItem(SESSION_KEY, JSON.stringify(next))
    setPendingEmail('')
    setSession(next)
  }, [])

  const loginWithGoogle = useCallback(async () => {
    const clientId = googleClientId()
    if (!clientId) {
      throw new Error('Chưa cấu hình VITE_GOOGLE_CLIENT_ID.')
    }
    setBusy(true)
    setError('')
    try {
      await loadGoogleScript()
      const accessToken = await requestGoogleAccessToken(clientId)
      const data = await siteRequest('/api/site/auth/google', {
        method: 'POST',
        body: { accessToken },
      })
      if (data.needsVerification) {
        sessionStorage.setItem(PENDING_KEY, data.email)
        setPendingEmail(data.email)
        setSession(null)
        localStorage.removeItem(SESSION_KEY)
        return data
      }
      saveSession(data)
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setBusy(false)
    }
  }, [saveSession])

  const verifyCode = useCallback(async (code) => {
    if (!pendingEmail) throw new Error('Chưa có email đang chờ xác nhận.')
    setBusy(true)
    setError('')
    try {
      const data = await siteRequest('/api/site/auth/verify', {
        method: 'POST',
        body: { email: pendingEmail, code },
      })
      saveSession(data)
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setBusy(false)
    }
  }, [pendingEmail, saveSession])

  const resendCode = useCallback(async () => {
    if (!pendingEmail) throw new Error('Chưa có email đang chờ xác nhận.')
    setBusy(true)
    setError('')
    try {
      return await siteRequest('/api/site/auth/resend', {
        method: 'POST',
        body: { email: pendingEmail },
      })
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setBusy(false)
    }
  }, [pendingEmail])

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    localStorage.removeItem('rg_site_mock_user')
    sessionStorage.removeItem(PENDING_KEY)
    setSession(null)
    setPendingEmail('')
    setError('')
  }, [])

  const value = useMemo(
    () => ({
      user: session?.user || null,
      accessToken: session?.accessToken || '',
      isAuthenticated: Boolean(session?.accessToken && session?.user),
      pendingEmail,
      busy,
      error,
      loginWithGoogle,
      verifyCode,
      resendCode,
      logout,
      clearError: () => setError(''),
    }),
    [session, pendingEmail, busy, error, loginWithGoogle, verifyCode, resendCode, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
