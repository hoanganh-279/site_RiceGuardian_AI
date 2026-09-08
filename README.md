# RiceGuardian AI — Website giới thiệu sản phẩm

Đọc file này **trước** khi thêm hoặc sửa bất kỳ chức năng / giao diện nào trong `site/`. Rule Cursor tương ứng: `.cursor/rules/site.mdc` (áp dụng khi làm việc trong `site/**`).

Đây là website **marketing / giới thiệu sản phẩm** cho khách hàng và đối tác — **không** phải Website quản trị (`web/`), **không** phải App nông dân (`app/`).

Workspace: `site/` — React (Vite) + React Router + **Bootstrap 5** (marketing) + CSS brand `rg-*`. Tách codebase với `web/`; không dùng chung UI, auth, layout, hay `api.js` của admin.

---

## 1. Vai trò trong monorepo

| Thành phần | Vai trò | Thư mục |
|---|---|---|
| Website giới thiệu | Landing + trang nội dung công khai | `site/` |
| Website quản trị | Dashboard Admin / Manager / KTV | `web/` |
| App nông dân | Flutter | `app/` |
| Backend API | Flask — dùng chung Web admin + App | `backend/` |

Ràng buộc:

- `site/` và `web/` **không** import chéo component/service.
- Không nhét trang marketing vào `web/`, không nhét dashboard vào `site/`.
- MVP `site/` **không** phụ thuộc Flask/Supabase trừ khi user đã duyệt contract API rõ ràng.

---

## 2. Stack lock (không tự chuyển)

- React + Vite + React Router.
- **Bootstrap 5** cho grid / nav / form utilities — **không** copy UI dashboard (sidebar, bảng mật) từ `web/`.
- CSS / biến brand riêng (`rg-*`) trong `src/styles/`. Typography: **Roboto** (`--rg-font-body` / `--rg-font-display`).
- Không Next.js / Vue / Angular / Tailwind trừ khi được yêu cầu rõ.
- Không tự thêm CMS, Redux/Zustand, hay client SDK Supabase cho site marketing (auth Google thật / gửi mail backend = roadmap).
- Brand palette:

| Token | Màu |
|---|---|
| Primary | `#2E7D32` |
| Secondary | `#F9A825` |
| Danger | `#C62828` |

Assets brand (trong `src/assets/`, copy từ `app/img/` — không import runtime từ `app/`):

| Asset | Vai trò |
|---|---|
| `logo_launcher_foreground.png` | Logo shield |
| `splash_branding.png` | Wordmark tên dự án |
| `login_background.jpg` | Hero Landing (cánh đồng) |
| `monitoring_station.png` | Ảnh sản phẩm HW |

Không đổi palette / theme / nav / layout lớn ngoài phạm vi task — nếu cần: mô tả và **chờ xác nhận**.

---

## 3. Desktop + Mobile (bắt buộc)

`site/` là **một codebase** responsive — phải luôn dùng được trên **desktop và mobile**:

| Nền tảng | Yêu cầu tối thiểu |
|---|---|
| Desktop (≥992px) | Nav ngang đủ mục; pricing / lưới ổn; footer 4 cột |
| Mobile (≤767px) | Nav collapse + `aria-label`; section 1 cột; footer xếp chồng; vùng bấm ≥44px; không overflow ngang |

Hero Landing: ảnh full-bleed + overlay đủ tối để **chữ / wordmark đọc rõ**. Kiểm tra ~375px và ~1280px trước khi coi xong UI.

---

## 4. Information architecture (đã chốt)

```
/                    → Landing (một trang dài, bao quát sản phẩm)
  CTA “Khám phá ngay” / “Đi đến trang chủ”
        ↓
/trang-chu           → Trang chủ site (nav đầy đủ)
/gioi-thieu          → Đội ngũ / giới thiệu dự án
/dich-vu             → Dịch vụ
/giai-phap           → Giải pháp
/chinh-sach          → Chính sách & quyền lợi
/san-pham            → Sản phẩm phần cứng + phần mềm
/tin-tuc             → Danh sách tin
/tin-tuc/:slug       → Chi tiết tin
/lien-he             → Liên hệ (mailto / tel)
/tai-khoan           → Stub tài khoản (auth mock)
```

Layouts:

- `LandingLayout` — header tối giản trên Landing.
- `SiteLayout` — nav 8 mục + footer 4 cột cho các trang sau Landing.

Pricing trên Landing mang tính **giới thiệu gói** — không cổng thanh toán thật.

Auth Liên hệ: đăng nhập Google thật (client riêng, không tạo tài khoản nông dân). Lần đầu nhập mã gửi về Gmail. Form gửi qua Flask SMTP tới hộp thư dự án, `Reply-To` là Gmail khách.

---

## 5. Nội dung & nguồn dữ liệu (MVP)

- Copy và dữ liệu tĩnh trong `src/data/` (từ thuyết minh dự án).
- Tin tức (`/tin-tuc`): tóm tắt có trích nguồn từ báo và chuyên trang lúa gạo; ảnh chỉ lấy từ đúng bài gốc. Không phải CMS.
- Liên hệ: form gửi qua API sau khi đăng nhập Google; nút email/hotline công khai vẫn `mailto:` / `tel:`.
- Đội ngũ (`/gioi-thieu`): layout editorial (chân dung xen kẽ + Mentor); ảnh HD trong `src/assets/team/` (nguồn gốc `info/img/`), khung ảnh nền trắng.
- **Không ảo hóa:** không bịa giải thưởng, số liệu %, giá, SĐT, email, đối tác nếu chưa có trong data/thuyết minh.

---

## 6. Naming & cấu trúc code

- Trang: `*Page.jsx` (PascalCase).
- Layout: `LandingLayout`, `SiteLayout`.
- Class CSS: tiền tố `rg-*`.
- Data/constants: camelCase.
- Tái sử dụng component/layout trước khi tạo mới; thay đổi tối thiểu.

---

## 7. Quy trình trước khi code

1. Đọc **file này** (`site/README.md`).
2. Đọc rule `.cursor/rules/site.mdc`.
3. Đọc source / data liên quan trong `site/`.
4. Xác định: route, layout, data impact, cấp thay đổi UI; kiểm tra desktop + mobile.
5. Thay đổi **lớn** (kiến trúc, thêm/xóa route nav, CMS, gọi API backend, đổi brand, deploy model) → **mô tả và chờ xác nhận**.
6. Sau khi xong: kiểm tra route, responsive desktop/mobile, UX/UI checklist; tóm tắt file đổi + lý do.

---

## 8. UX/UI bắt buộc

### 8.1. Quy tắc cốt lõi

| Quy tắc | Yêu cầu thực tế trên site |
|---|---|
| **Consistency** | Cùng màu brand, font, spacing, kiểu nút / nav / footer. |
| **Clarity** | Nhãn tiếng Việt rõ; icon-only có `aria-label`. |
| **Visual hierarchy** | Brand / CTA chính nổi đúng mức; hero dùng wordmark tên dự án. |
| **Simplicity** | Một việc chính mỗi section. |
| **Feedback** | Hover / focus / active rõ. Form Liên hệ: lỗi và trạng thái gửi thấy được. |
| **Accessibility** | Tương phản đủ (kể cả trên ảnh hero). Focus visible. Vùng bấm đủ lớn. |

### 8.2. Bố cục

| Quy tắc | Yêu cầu |
|---|---|
| **F/Z-pattern** | CTA trên viewport; hero: brand wordmark + 1 headline + 1 câu + nhóm CTA. |
| **White space** | Không dính mép trên mobile. |
| **User control** | Logo / nav / footer quay lại được; form không bẫy. |
| **Desktop + Mobile** | Bắt buộc — xem mục 3. |

### 8.3. Marketing surface

- Landing: hero **full-bleed** cánh đồng + overlay; không badge/sticker rời trên hero.
- Không UI dashboard admin.
- Chữ trên nền ảnh phải đọc được.

---

## 9. Chạy local

```bash
cd site
npm install
npm run dev
```

- Dev server mặc định: cổng **5174** (tránh đụng `web/`).
- Build: `npm run build` — preview: `npm run preview`.

---

## 10. Không được làm

1. Trộn code / route marketing vào `web/` admin hoặc ngược lại.
2. Đổi framework, thêm CMS/API, đổi IA/nav lớn mà không hỏi trước.
3. Bịa nội dung marketing (giải thưởng, số liệu, giá, liên hệ).
4. Bỏ qua desktop/mobile hoặc mục UX/UI khi làm giao diện.
5. Refactor / đổi theme ngoài phạm vi task.
6. Commit secret (`.env`, API key, …).

---

## 11. Khi lệch tài liệu

Ưu tiên **source code và `src/data/` hiện tại**. Cập nhật README / rule khi quyết định sản phẩm đổi (sau khi user xác nhận).
