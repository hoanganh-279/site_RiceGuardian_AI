import chuong from '../assets/team/chuong.png'
import hoangAnh from '../assets/team/hoang-anh.png'
import quynhAnh from '../assets/team/quynh-anh.png'
import tuongVy from '../assets/team/tuong-vy.png'
import mentorKiet from '../assets/team/mentor-kiet.png'
import mentorNam from '../assets/team/mentor-nam.png'

export const teamMembers = [
  {
    id: 'chuong',
    name: 'Trương Quang Chương',
    role: 'Trưởng nhóm',
    major: 'Công nghệ thông tin',
    school: 'Đại học Thủ Dầu Một',
    bio: 'Là trưởng nhóm RiceGuardian AI, Chương phụ trách hướng kỹ thuật cốt lõi của dự án. Có nền tảng IoT (lắp ráp, kết nối thiết bị) và AI để hỗ trợ nghiên cứu, xây dựng sản phẩm. Đã tham gia các cuộc thi/học thuật công nghệ trong và ngoài trường; trong dự án đảm nhiệm thiết kế trạm quan trắc vi khí hậu và huấn luyện mô hình phân tích ảnh bệnh lúa / dữ liệu môi trường.',
    quote:
      'Ước mơ lớn nhất của mình là có đủ sức khỏe và sự kiên trì để tiếp tục theo đuổi ngành Công nghệ thông tin — và góp một phần công sức thật sự cho lĩnh vực AI & IoT.',
    tags: ['IoT', 'AI', 'Phần cứng', 'Trưởng nhóm'],
    photo: chuong,
  },
  {
    id: 'hoang-anh',
    name: 'Tân Hoàng Anh',
    role: 'Thành viên',
    major: 'Công nghệ thông tin',
    school: 'Đại học Thủ Dầu Một',
    bio: 'Hoàng Anh phụ trách phát triển phần mềm và trải nghiệm người dùng theo hướng lấy người dùng làm trung tâm. Chú trọng giao diện mượt, trực quan và mã nguồn rõ ràng, dễ bảo trì. Trong dự án đảm nhiệm ứng dụng di động cho nông dân, trang quản trị cho hợp tác xã, cùng tích hợp cảnh báo và nhật ký đồng ruộng số.',
    quote:
      'Cái hay của nghề không nằm ở công nghệ thời thượng, mà ở cảm giác khi sản phẩm giúp công việc của ai đó trở nên nhẹ nhàng hơn.',
    tags: ['Web', 'UX/UI', 'Phần mềm', 'Kiến trúc'],
    photo: hoangAnh,
  },
  {
    id: 'quynh-anh',
    name: 'Phạm Quỳnh Anh',
    role: 'Thành viên',
    major: 'Giáo dục Tiểu học',
    school: 'Đại học Thủ Dầu Một',
    bio: 'Quỳnh Anh mang nền tảng Giáo dục Tiểu học vào dự án: hiểu tâm lý, nhận thức và nhu cầu người học/người dùng. Có kinh nghiệm xây dựng nội dung, giao tiếp và làm việc nhóm qua các cuộc thi, dự án. Trong RiceGuardian AI phụ trách tài liệu tập huấn, tối ưu trải nghiệm cho nông dân (kể cả người lớn tuổi), truyền thông giải pháp và chăm sóc đối tác hợp tác xã.',
    quote:
      'Muốn kiến thức học được không chỉ nằm trên giấy — mà được áp dụng thực tế và tạo giá trị tích cực cho cộng đồng.',
    tags: ['Nội dung', 'UX nông dân', 'Truyền thông', 'Tập huấn'],
    photo: quynhAnh,
  },
  {
    id: 'tuong-vy',
    name: 'Huỳnh Khải Tường Vy',
    role: 'Thành viên',
    major: 'Logistics và Quản lý chuỗi cung ứng',
    school: 'Đại học Thủ Dầu Một',
    bio: 'Tường Vy phụ trách góc nhìn vận hành và chuỗi giá trị: phân tích chi phí, kiểm soát quy trình, khảo sát thực địa. Kết hợp tư duy số liệu với tính cẩn trọng khi triển khai thiết bị và làm việc với đối tác. Trong dự án quản lý quy trình lắp đặt trạm IoT, vật tư thực địa và điều phối các bên (doanh nghiệp lúa gạo, dịch vụ UAV, đơn vị nông nghiệp địa phương).',
    quote:
      'Ý tưởng mang đến cuộc thi không phải thứ quá vĩ mô — mà là bước thử nghiệm để học cách giải quyết bài toán vận hành thật trên thực địa.',
    tags: ['Vận hành', 'Chuỗi cung ứng', 'Chi phí', 'Thị trường'],
    photo: tuongVy,
  },
]

export const mentors = [
  {
    id: 'mentor-kiet',
    name: 'ThS. Nguyễn Trung Kiệt',
    role: 'Giảng viên Đại học Thủ Dầu Một',
    major: 'Giảng viên ĐH Thủ Dầu Một — cố vấn kiến trúc phần mềm',
    bio: 'Kiến thức phát triển phần mềm, thiết kế hệ thống và triển khai giải pháp công nghệ; tư vấn kiến trúc và ứng dụng công nghệ vào bài toán thực tiễn.',
    quote: 'Ứng dụng công nghệ phải giải được bài toán thực tiễn — không chỉ chạy được trên demo.',
    tags: ['Kiến trúc phần mềm', 'Hệ thống', 'Mentor'],
    photo: mentorKiet,
  },
  {
    id: 'mentor-nam',
    name: 'ThS. Trần Nhật Nam',
    role: 'Giảng viên Đại học Thủ Dầu Một',
    major: 'Giảng viên ĐH Thủ Dầu Một — cố vấn AI & IoT',
    bio: 'Chuyên sâu CNTT, đặc biệt AI và IoT; hỗ trợ phát triển sản phẩm và đánh giá tính khả thi giải pháp công nghệ của nhóm.',
    quote: 'Giải pháp AI–IoT chỉ có giá trị khi khả thi để triển khai và vận hành ngoài đồng.',
    tags: ['AI', 'IoT', 'Mentor'],
    photo: mentorNam,
  },
]
