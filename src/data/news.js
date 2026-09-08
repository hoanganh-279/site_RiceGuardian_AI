/** Tin mẫu — nhãn "Tin mẫu"; nội dung lấy ý từ thuyết minh, không CMS. */

export const newsArticles = [
  {
    slug: 'mvp-phong-thi-nghiem',
    title: 'Hoàn thiện MVP trong môi trường phòng thí nghiệm',
    date: '2026-08-24',
    sample: true,
    excerpt:
      'Nhóm đã thiết kế mạch vi điều khiển trạm quan trắc và xây dựng giao diện phần mềm cho sản phẩm khả dụng tối thiểu.',
    body: [
      'Theo thuyết minh dự án, RiceGuardian AI đã hoàn thiện Sản phẩm khả dụng tối thiểu (MVP) trong môi trường phòng thí nghiệm.',
      'Nhóm tự thiết kế và lập trình mạch vi điều khiển cho trạm quan trắc, đồng thời xây dựng giao diện phần mềm phục vụ nông dân và ban quản lý hợp tác xã.',
      'Lộ trình tiếp theo là triển khai thử nghiệm thực địa trên diện tích khoảng 02 đến 05 ha để kiểm tra độ bền thiết bị ngoài thiên nhiên và tối ưu mô hình AI.',
    ],
  },
  {
    slug: 'thu-nghiem-thuc-dia-2-5-ha',
    title: 'Hướng tới thử nghiệm thực địa 2–5 ha',
    date: '2026-08-24',
    sample: true,
    excerpt:
      'Mô hình đối chứng ngoài đồng giúp đánh giá độ ổn định trạm IoT và độ tin cậy cảnh báo vi khí hậu.',
    body: [
      'Kế hoạch kiểm chứng thực địa đặt mục tiêu vận hành mô hình thử nghiệm quy mô 02–05 ha.',
      'Thử nghiệm nhằm đánh giá độ bền vỏ bọc, cảm biến, khả năng chống bụi/nước ngoài trời và độ ổn định kết nối trong điều kiện thời tiết thực tế.',
      'Song song đó, nhóm tinh chỉnh ngưỡng cảnh báo và thuật toán điểm rủi ro dựa trên dữ liệu thu thập tại đồng ruộng.',
    ],
  },
  {
    slug: 'huong-toi-nong-nghiep-ben-vung',
    title: 'Hướng tới nông nghiệp bền vững và SDGs',
    date: '2026-08-24',
    sample: true,
    excerpt:
      'Dự án gắn mục tiêu cảnh báo sớm với giảm hóa chất tại vùng khoanh vùng và số hóa nhật ký đồng ruộng.',
    body: [
      'RiceGuardian AI hướng tới giá trị dài hạn cho cộng đồng: cảnh báo sớm bảo vệ năng suất, hỗ trợ giảm thuốc BVTV tại vùng được khoanh vùng (mục tiêu thử nghiệm 20%–30%), và giảm công thăm đồng cho lao động lớn tuổi.',
      'Về môi trường, khoanh vùng phun chính xác giúp hạn chế hóa chất ra tự nhiên; theo dõi chỉ số môi trường hỗ trợ điều chỉnh tưới tiêu hợp lý.',
      'Dự án liên hệ các Mục tiêu Phát triển Bền vững (SDG) 2, 3, 8, 12, 13 và 15 như mô tả trong thuyết minh — đây là định hướng đóng góp, không phải chứng nhận đã đạt.',
    ],
  },
  {
    slug: 'hai-tang-canh-bao-nguy-co',
    title: 'Vì sao cần mô hình cảnh báo hai tầng?',
    date: '2026-08-24',
    sample: true,
    excerpt:
      'Tầng vi khí hậu chủ động trước khi bệnh lộ rõ; tầng hình ảnh giúp xác minh trước khi khuyến cáo xử lý.',
    body: [
      'Tầng 1 dùng chuỗi dữ liệu môi trường tại chân ruộng để tính điểm nguy cơ trước khi vết bệnh kịp bùng phát rộng.',
      'Tầng 2 yêu cầu xác minh bằng ảnh chụp cận cảnh hoặc ảnh diện rộng từ dịch vụ UAV khi chỉ số vượt ngưỡng an toàn.',
      'Quy trình hai bước nhằm hạn chế cảnh báo sai và hỗ trợ khoanh vùng xử lý thay vì phun tràn lan.',
    ],
  },
]

export function getArticleBySlug(slug) {
  return newsArticles.find((a) => a.slug === slug) ?? null
}
