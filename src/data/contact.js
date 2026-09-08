/** Liên hệ công khai — placeholder đến khi có email/hotline chính thức */
export const contact = {
  publicEmail: 'TODO_PUBLIC_EMAIL',
  hotline: 'TODO_HOTLINE',
  address: 'Trường Đại học Nông Lâm TP.HCM (địa điểm triển khai dự kiến)',
  note: 'Email và hotline công khai sẽ được cập nhật. Hiện form Liên hệ dùng mailto khi đã cấu hình email.',
}

export function isPlaceholderContact(value) {
  return !value || String(value).startsWith('TODO_')
}
