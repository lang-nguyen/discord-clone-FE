# Hướng Dẫn

## Tổng Quan Dự Án
Dự án này là bộ khung front-end (FE) cho một ứng dụng clone Discord, sử dụng **React**, **Redux Toolkit**, và **Tailwind CSS**, chạy trên **Vite**. 

### Hướng dẫn chạy dự án
1. Cài đặt dependencies:
   ```bash
   npm install
   ```
2. Chạy dev server:
   ```bash
   npm run dev
   ```

### Yêu cầu môi trường
- **Node.js**: v18 hoặc cao hơn.

## Cấu Trúc Thư Mục

### Thư mục gốc: `discord-clone-FE`
**Mục đích**: Chứa toàn bộ mã nguồn và cấu hình dự án.

**Nội dung chính**:
- **`public/`**: Chứa tệp tĩnh 
- **`src/`**: Mã nguồn React chính.
- **`tailwind.config.js`**: Cấu hình Tailwind CSS 
- **`postcss.config.js`**: Cấu hình PostCSS với `@tailwindcss/postcss` và `autoprefixer`.
- **`vite.config.js`**: Cấu hình Vite 
- **`package.json`**: Quản lý dependencies và scripts.
- **`.gitignore`**: Loại bỏ các tệp không cần thiết khỏi Git.

**Lưu ý**:
- Kiểm tra `package.json` nếu cần thêm dependencies.

---

### Thư mục: `public`
**Mục đích**: Chứa các tệp tĩnh được phục vụ trực tiếp bởi Vite, không qua xử lý build.

**Nội dung**:
- Thêm tài nguyên tĩnh (hình ảnh, font) vào đây nếu cần.

---

### Thư mục: `src`
**Mục đích**: Chứa toàn bộ mã nguồn React của ứng dụng.

**Nội dung**:
- **`components/`**: Component tái sử dụng (e.g., `ChannelList`, `MessageList`).
- **`features/`**: Logic Redux (store và slices).
- **`pages/`**: Component cấp trang (e.g., `HomePage`).
- **`styles/`**: Tệp CSS (Tailwind và global styles).
- **`App.jsx`**: Component chính, quản lý routing.
- **`main.jsx`**: Điểm vào React, render ứng dụng vào `#root`.
- **`index.css`**: Tệp CSS chính, nhập Tailwind.

