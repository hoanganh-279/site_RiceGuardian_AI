const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '')

const SITE_GOOGLE_CLIENT_ID = '431770380057-nq50vhuckunbvf5785gc488q5i5773bt.apps.googleusercontent.com'

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
    throw new Error('Không kết nối được máy chủ. Kiểm tra API đang chạy.')
  }

  const data = response.headers.get('content-type')?.includes('application/json')
    ? await response.json()
    : null
  if (!response.ok) {
    throw new Error(data?.error || (await readError(response)))
  }
  return data
}
