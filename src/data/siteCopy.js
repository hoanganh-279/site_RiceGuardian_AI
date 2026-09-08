/** Copy từ thuyết minh dự án RiceGuardian AI — không ảo hóa số liệu ngoài nguồn. */

export const brand = {
  name: 'RiceGuardian AI',
  tagline:
    'Nền tảng AI dự báo sớm bệnh hại và quản lý canh tác lúa thông minh',
  shortDescription:
    'Hệ sinh thái giám sát khép kín: trạm cảm biến ngoài đồng, ứng dụng nông dân và trang quản trị hợp tác xã — chuyển từ bị động dập dịch sang chủ động đánh giá nguy cơ từ sớm.',
}

export const landing = {
  heroHeadline: 'Chủ động trước dịch hại lúa',
  heroSupport:
    'Theo dõi vi khí hậu tại chân ruộng, cảnh báo sớm và xác minh bằng hình ảnh — hỗ trợ hợp tác xã và bà con tối ưu chi phí vật tư.',
  problem: {
    title: 'Điểm nghẽn của cách làm truyền thống',
    lead: 'RiceGuardian AI giải quyết ba hạn chế phổ biến trên thị trường.',
    items: [
      {
        title: 'Chẩn đoán qua ảnh bị động',
        body: 'Nhiều ứng dụng chỉ nhận diện khi đốm bệnh đã lộ trên lá — lúc đó mầm bệnh thường đã lan rộng.',
      },
      {
        title: 'Trạm thời tiết vùng rộng',
        body: 'Chỉ số chung cho cả vùng lớn khó phản ánh đúng môi trường bề mặt tán lúa và mực nước từng ô thửa.',
      },
      {
        title: 'Phần mềm trang trại cồng kềnh',
        body: 'Nhập liệu thủ công phức tạp không phù hợp thói quen nông dân ngoài đồng và ban quản lý hợp tác xã.',
      },
    ],
  },
  solution: {
    title: 'Mô hình đánh giá nguy cơ hai tầng',
    lead: 'Quy trình khép kín giúp nâng độ chính xác trước khi khuyến cáo xử lý.',
    tiers: [
      {
        title: 'Tầng 1 — Cảnh báo từ vi khí hậu',
        body: 'AI phân tích nhiệt độ, độ ẩm không khí, độ ẩm đất, mực nước kết hợp lịch sử dịch bệnh địa phương để tính điểm nguy cơ.',
      },
      {
        title: 'Tầng 2 — Xác minh hình ảnh thực địa',
        body: 'Khi vượt ngưỡng, hệ thống yêu cầu chụp ảnh khóm lúa bằng điện thoại hoặc phối hợp dịch vụ UAV địa phương để chẩn đoán chính xác hơn, hạn chế cảnh báo sai.',
      },
    ],
  },
  product: {
    title: 'Hệ sinh thái sản phẩm',
    lead: 'Phần cứng ngoài đồng đồng bộ với phần mềm cho nông dân và ban quản lý.',
    sensors: ['Nhiệt độ', 'Độ ẩm không khí', 'Độ ẩm đất', 'Mực nước'],
    hardwareNote:
      'Mạch điều khiển tự thiết kế; cụm cảm biến đo tại chân ruộng và truyền dữ liệu về trung tâm.',
    status:
      'Dự án đang ở giai đoạn MVP phòng thí nghiệm. Bước tiếp theo là thử nghiệm thực địa trên 2–5 ha để kiểm tra độ bền thiết bị và tinh chỉnh mô hình AI — chưa phải kết quả đã đo trên diện rộng.',
    items: [
      {
        title: 'Trạm cảm biến IoT',
        body: 'Trạm quan trắc tại chân ruộng: mạch điều khiển tự thiết kế, cảm biến môi trường và mực nước, truyền dữ liệu về trung tâm.',
      },
      {
        title: 'Ứng dụng di động',
        body: 'Dành cho nông dân: theo dõi môi trường, nhận cảnh báo, chụp ảnh xác minh và nhận hướng dẫn xử lý — tối giản, hỗ trợ ngoại tuyến khi mất sóng.',
      },
      {
        title: 'Trang quản trị website',
        body: 'Dành cho hợp tác xã / doanh nghiệp: giám sát vùng trồng, khoanh vùng rủi ro và số hóa nhật ký đồng ruộng phục vụ truy xuất nguồn gốc.',
      },
    ],
  },
  features: {
    title: 'Ba trụ cột công nghệ',
    items: [
      {
        title: 'Đánh giá nguy cơ hai tầng',
        body: 'Kết hợp dữ liệu vi khí hậu và hình ảnh thực địa để lọc cảnh báo sai trước khi khuyến cáo phun thuốc.',
      },
      {
        title: 'Khoanh vùng tối ưu chi phí',
        body: 'Xác định vùng rủi ro cao và khu vực đệm để xử lý tập trung, tránh phun tràn lan cả cánh đồng.',
      },
      {
        title: 'Nhật ký đồng ruộng số',
        body: 'Tự động lưu chuỗi môi trường, cảnh báo và lịch sử chăm sóc — hỗ trợ VietGAP, mã số vùng trồng và truy xuất nguồn gốc.',
      },
    ],
  },
  benefits: {
    title: 'Lợi ích hướng tới',
    lead: 'Các mục tiêu dưới đây lấy từ kế hoạch thử nghiệm thực địa trong thuyết minh — chưa phải kết quả đã đo trên diện rộng.',
    figure: '20%–30%',
    figureNote:
      'Mục tiêu kiểm chứng tại lô thử nghiệm 2–5 ha — chưa phải kết quả đã đo trên diện rộng.',
    items: [
      {
        title: 'Giảm thuốc BVTV tại vùng khoanh vùng',
        body: 'Thử nghiệm thực địa đặt mục tiêu giảm 20%–30% lượng thuốc bảo vệ thực vật tại khu vực được khoanh vùng so với thói quen phun diện rộng.',
      },
      {
        title: 'Tiết kiệm công thăm đồng',
        body: 'Ban quản lý theo dõi điểm cảnh báo trên web để điều phối kỹ thuật viên đúng vị trí cần kiểm tra.',
      },
      {
        title: 'Hồ sơ minh bạch',
        body: 'Dữ liệu môi trường và lịch sử chăm sóc tự động lưu trữ, hỗ trợ chứng nhận an toàn và truy xuất nguồn gốc.',
      },
    ],
  },
  howItWorks: {
    title: 'Quy trình cung cấp dịch vụ',
    steps: [
      {
        title: 'Tiếp nhận & tư vấn',
        body: 'Tiếp nhận nhu cầu hợp tác xã / doanh nghiệp, tư vấn số trạm IoT phù hợp diện tích.',
      },
      {
        title: 'Bàn giao & khởi tạo',
        body: 'Gửi trạm đã lắp ráp, hướng dẫn lắp đặt; kích hoạt tài khoản web và ứng dụng di động.',
      },
      {
        title: 'Vận hành hai tầng',
        body: 'Thu thập vi khí hậu liên tục, cảnh báo nguy cơ, xác minh bằng ảnh và lưu nhật ký canh tác.',
      },
      {
        title: 'Hỗ trợ & bảo trì',
        body: 'Hỗ trợ từ xa qua kênh chăm sóc. Bảo hành 1 đổi 1 linh kiện lỗi kỹ thuật trong 12 tháng; linh kiện thay thế gửi trong 24–48 giờ theo mô tả thuyết minh.',
      },
    ],
  },
  socialProof: {
    title: 'Đồng hành chuyên môn',
    lead: 'Không liệt kê giải thưởng chưa có. Các bên dưới là loại hình hợp tác / cố vấn nêu trong thuyết minh.',
    items: [
      {
        title: 'Mentor kỹ thuật',
        body: 'ThS. Nguyễn Trung Kiệt và ThS. Trần Nhật Nam (Đại học Thủ Dầu Một) cố vấn kiến trúc phần mềm, AI và IoT.',
      },
      {
        title: 'Tham vấn chuyên ngành',
        body: 'Cơ chế tham vấn với cán bộ kỹ thuật / chuyên gia Chi cục Trồng trọt & BVTV, khuyến nông hoặc viện/trường nghiên cứu.',
      },
      {
        title: 'Đối tác dịch vụ UAV',
        body: 'Hợp tác đội bay địa phương theo mô hình dịch vụ — không đầu tư mua sắm thiết bị bay trong giai đoạn hiện tại.',
      },
    ],
  },
  finalCta: {
    title: 'Sẵn sàng tìm hiểu giải pháp?',
    body: 'Xem trang chủ để đi sâu từng hạng mục, hoặc liên hệ nhóm dự án để trao đổi nhu cầu vùng trồng.',
  },
}

export const homePage = {
  title: 'Trang chủ',
  mission:
    'Mang công nghệ số sát thực tế đến chân ruộng, hỗ trợ người trồng lúa chủ động nhận biết rủi ro dịch bệnh từ sớm, tối ưu chi phí vật tư và giảm gánh nặng lao động.',
  vision:
    'Đến năm 2030, hướng tới nền tảng cảnh báo rủi ro vi khí hậu và số hóa nhật ký đồng ruộng đáng tin cậy tại ĐBSCL, từng bước nhân rộng vùng lúa trọng điểm.',
  pillars: [
    {
      title: 'Thực tế & thấu hiểu',
      body: 'Công nghệ xuất phát từ đồng ruộng; giao diện tối giản, phù hợp người dùng thực tế.',
    },
    {
      title: 'Chủ động & tin cậy',
      body: 'Cảnh báo sớm từ dữ liệu vi khí hậu thay vì chỉ ứng phó khi dịch đã bùng phát.',
    },
    {
      title: 'Bền vững & trách nhiệm',
      body: 'Hướng tới giảm tồn dư hóa chất, bảo vệ sức khỏe cộng đồng và hệ sinh thái đất, nước.',
    },
  ],
}

export const faqItems = [
  {
    q: 'Thanh toán dịch vụ như thế nào?',
    a: 'Hợp tác xã thanh toán 50% khi bàn giao thiết bị và kích hoạt tài khoản; 50% còn lại sau khi kết thúc vụ mùa (nghiệm thu). Chiết khấu 10% nếu thanh toán trọn gói 100% cho cả năm (3 vụ liên tiếp).',
  },
  {
    q: 'Bảo hành phần cứng ra sao?',
    a: 'Bảo hành 1 đổi 1 trong 12 tháng đối với linh kiện trạm IoT (mạch điều khiển, cảm biến) nếu lỗi kỹ thuật. Linh kiện thay thế gửi qua bưu điện / xe khách.',
  },
  {
    q: 'Dữ liệu thuộc về ai?',
    a: 'Dự án cam kết ký văn bản bảo mật; quyền sở hữu dữ liệu gốc thuộc về hợp tác xã / doanh nghiệp khách hàng. Không bán dữ liệu cho bên thứ ba khi chưa được đồng ý.',
  },
  {
    q: 'Gói Nâng cao khác Gói Cơ bản ở điểm nào?',
    a: 'Gói Nâng cao bổ sung dịch vụ phân tích ảnh từ thiết bị bay không người lái (theo ha/đợt bay). Gói Cơ bản không gồm UAV.',
  },
]
