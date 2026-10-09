const LOCAL_API = 'http://localhost:5002'
const PUBLIC_API = 'https://riceguardian-site-api.onrender.com'

function isLoopbackHost(hostname) {
  return hostname === 'localhost' || hostname === '127.0.0.1'
}

function isLoopbackUrl(url) {
  try {
    return isLoopbackHost(new URL(url).hostname)
  } catch {
    return false
  }
}

function resolveApiBase() {
  const fromEnv = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '')
  const host = typeof window !== 'undefined' ? window.location.hostname : ''
  const onLocalPage = isLoopbackHost(host)

  // A production build must not call the developer's machine.
  if (fromEnv && (onLocalPage || !isLoopbackUrl(fromEnv))) return fromEnv
  if (onLocalPage) return LOCAL_API
  return PUBLIC_API
}

const API_BASE = resolveApiBase()

const SITE_GOOGLE_CLIENT_ID = '953961241555-4239gt60jg5ln954s3qd3p3dmm8ul8fj.apps.googleusercontent.com'

export function googleClientId() {
  return (import.meta.env.VITE_GOOGLE_CLIENT_ID || SITE_GOOGLE_CLIENT_ID).trim()
}

async function readError(response) {
  try {
    const data = await response.json()
    return data.error || 'Không xử lý được yêu cầu.'
  } catch {
    return 'Không xử lý được yêu cầu.'
  }
}

export async function siteRequest(path, { method = 'GET', token, body } = {}) {
  const headers = { Accept: 'application/json' }
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`

  let response
  try {
    response = await fetch(`${API_BASE}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    })
  } catch {
    throw new Error('Không kết nối được máy chủ. Thử lại sau vài giây.')
  }

  const data = response.headers.get('content-type')?.includes('application/json')
    ? await response.json()
    : null
  if (!response.ok) {
    throw new Error(data?.error || (await readError(response)))
  }
  return data
}
