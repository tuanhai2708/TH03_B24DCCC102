# Ứng Dụng Quản Lý Sản Phẩm

Ứng dụng quản lý danh sách sản phẩm với đầy đủ các tính năng CRUD (Create, Read, Update, Delete), tìm kiếm, lọc và phân trang. Xây dựng bằng React, TypeScript và State Management (useContext, useReducer).

## Tính Năng

### 1. Quản lý sản phẩm (CRUD)
- ✅ **Create**: Thêm sản phẩm mới với form validation
- ✅ **Read**: Hiển thị danh sách và chi tiết sản phẩm
- ✅ **Update**: Chỉnh sửa thông tin sản phẩm
- ✅ **Delete**: Xóa sản phẩm với xác nhận

### 2. Tìm kiếm và Lọc
- ✅ Tìm kiếm theo tên sản phẩm (real-time search)
- ✅ Lọc theo danh mục (Điện tử, Quần áo, Đồ ăn, Sách, Khác)
- ✅ Lọc theo khoảng giá (min-max)

### 3. Phân trang
- ✅ Hiển thị 6 sản phẩm mỗi trang
- ✅ Nút Previous/Next và số trang
- ✅ Hiển thị tổng số sản phẩm và trang hiện tại

### 4. State Management
- ✅ Sử dụng Context API (createContext, useContext)
- ✅ Sử dụng useReducer để quản lý state
- ✅ State được chia sẻ giữa các component

### 5. Routing
- `/`: Trang chủ với danh sách sản phẩm
- `/products/:id`: Chi tiết sản phẩm
- `/add`: Thêm sản phẩm
- `/edit/:id`: Chỉnh sửa sản phẩm

## Công Nghệ Sử Dụng

- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **React Router DOM** - Routing
- **Vite** - Build tool
- **CSS3** - Styling

## Cấu Trúc Dự Án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Filter.tsx
│   ├── Pagination.tsx
│   ├── ProductCard.tsx
│   ├── ProductForm.tsx
│   ├── ProductList.tsx
│   └── SearchBar.tsx
├── context/            # Context API và Reducer
│   └── ProductContext.tsx
├── data/               # Dữ liệu mẫu
│   └── initialProducts.ts
├── pages/              # Các trang
│   ├── AddProduct.tsx
│   ├── EditProduct.tsx
│   ├── Home.tsx
│   └── ProductDetail.tsx
├── types/              # TypeScript types
│   └── Product.ts
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## Cài Đặt và Chạy Dự Án

### Yêu cầu
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy development server:**
```bash
npm run dev
```

3. **Mở trình duyệt tại:**
```
http://localhost:5173
```

4. **Build cho production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## Validation Form

Khi thêm hoặc chỉnh sửa sản phẩm, các trường sau được validate:

- **Tên sản phẩm**: Bắt buộc, tối thiểu 3 ký tự
- **Giá**: Bắt buộc, phải là số dương
- **Số lượng**: Bắt buộc, phải là số nguyên dương
- **Danh mục**: Bắt buộc chọn
- **Mô tả**: Tùy chọn

## Dữ Liệu Mẫu

Ứng dụng đã có sẵn 12 sản phẩm mẫu thuộc các danh mục khác nhau để test các tính năng.

## Tính Năng Nổi Bật

### State Management
- Sử dụng `useReducer` để quản lý state phức tạp
- Context API để chia sẻ state giữa các component
- Actions được định nghĩa rõ ràng với TypeScript

### TypeScript
- Type-safe cho tất cả components và functions
- Interfaces và types được định nghĩa rõ ràng
- Strict mode enabled

### UX/UI
- Responsive design cho mobile và desktop
- Loading states và error handling
- Confirm dialog khi xóa sản phẩm
- Real-time search
- Modern và clean UI

## Tác Giả

Bài thực hành 03 - Quản Lý Sản Phẩm

## License

MIT

