/** Liên hệ công khai — email, hotline và địa chỉ trường. */
export const contact = {
  publicEmail: 'riceguardianai@gmail.com',
  hotline: '0857333457',
  address: 'Trường Đại học Thủ Dầu Một',
  note: 'Đăng nhập Google trước khi gửi. Câu hỏi được gửi tới hộp thư dự án, phản hồi về đúng Gmail đã xác nhận.',
}

export function isPlaceholderContact(value) {
  return !value || String(value).startsWith('TODO_')
}
