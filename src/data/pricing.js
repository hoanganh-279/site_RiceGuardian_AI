/** Bảng giá từ thuyết minh mục 4.1 — đơn vị VND. Không cổng thanh toán. */

export const pricingPackages = [
  {
    id: 'basic',
    name: 'Gói Cơ bản',
    subtitle: 'Không UAV',
    featured: false,
    rows: [
      { label: 'Phí khởi tạo hệ thống', value: '10.000.000 / HTX' },
      { label: 'Thuê trạm cảm biến', value: '15.000.000 / trạm / năm' },
      { label: 'Nền tảng phần mềm', value: '250.000 / ha / vụ' },
      { label: 'Phân tích UAV', value: 'Không áp dụng' },
      { label: 'Báo cáo dữ liệu', value: 'Bao gồm trong gói' },
    ],
    note: 'Khảo sát, số hóa bản đồ vùng trồng, cấu hình tài khoản và đào tạo Ban Quản lý (thu 1 lần đầu).',
  },
  {
    id: 'advanced',
    name: 'Gói Nâng cao',
    subtitle: 'Tích hợp UAV',
    featured: true,
    rows: [
      { label: 'Phí khởi tạo hệ thống', value: '15.000.000 / HTX' },
      { label: 'Thuê trạm cảm biến', value: '15.000.000 / trạm / năm' },
      { label: 'Nền tảng phần mềm', value: '250.000 / ha / vụ' },
      { label: 'Phân tích UAV', value: '120.000 / ha / đợt bay' },
      { label: 'Báo cáo dữ liệu', value: 'Bao gồm trong gói' },
    ],
    note: 'Bổ sung thuê đối tác bay địa phương; AI xử lý ảnh và hỗ trợ bản đồ khoanh vùng xử lý.',
  },
]

export const pricingDisclaimer =
  'Bảng giá mang tính giới thiệu theo thuyết minh dự án. Chưa có cổng thanh toán trên website.'
