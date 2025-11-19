BÀI THỰC HÀNH 03 - LẬP TRÌNH WEB - 19/11/2025
HỌ VÀ TÊN: TRẦN TUẤN HẢI
MÃ SINH VIÊN: B24DCCC102

I. MÔ TẢ BÀI TẬP
Xây dựng ứng dụng quản lý danh sách sản phẩm với đầy đủ các tính năng CRUD (Create, Read, Update, Delete), tìm kiếm, lọc và phân trang. Ứng dụng bao gồm nhiều trang và sử dụng State Management (useContext, useReducer, createContext) để quản lý state và sử dụng typescript

II. YÊU CẦU CHỨC NĂNG
1. Cấu trúc ứng dụng
•	Trang chủ: Hiển thị danh sách sản phẩm
•	Trang chi tiết sản phẩm: Hiển thị thông tin chi tiết
•	Trang thêm sản phẩm: Form thêm sản phẩm mới
•	Trang chỉnh sửa sản phẩm: Form cập nhật thông tin sản phẩm
•	Sử dụng React Router để điều hướng giữa các trang
2. Quản lý sản phẩm
2.1. Thông tin sản phẩm
Mỗi sản phẩm bao gồm các thông tin sau:
•	ID (tự động tạo)
•	Tên sản phẩm
•	Danh mục (Điện tử, Quần áo, Đồ ăn, Sách, Khác)
•	Giá
•	Số lượng
•	Mô tả
2.2. Chức năng CRUD
•	Create: Thêm sản phẩm mới qua form với validation
•	Read: Hiển thị danh sách và chi tiết sản phẩm
•	Update: Chỉnh sửa thông tin sản phẩm
•	Delete: Xóa sản phẩm với xác nhận
3. Tính năng tìm kiếm và lọc
•	Tìm kiếm theo tên sản phẩm (real-time search)
•	Lọc theo danh mục
•	Lọc theo khoảng giá (min-max)
4. Phân trang
•	Hiển thị 6 sản phẩm mỗi trang
•	Nút Previous/Next và số trang
•	Hiển thị tổng số sản phẩm và trang hiện tại
5. State Management
•	Sử dụng State Management (useContext, useReducer, createContext) để quản lý danh sách sản phẩm
•	Tạo ProductContext với các actions: add, update, delete
•	State phải được chia sẻ giữa các component
III. YÊU CẦU KỸ THUẬT
1. Component Structure
•	Chia nhỏ thành các component hợp lý (ProductList, ProductCard, ProductForm, SearchBar, Filter, Pagination, ...)
•	Sử dụng props để truyền dữ liệu giữa các component
•	Sử dụng state hooks (useState) cho local state
2. React Router
•	Route '/': Trang chủ với danh sách sản phẩm
•	Route '/products/:id': Chi tiết sản phẩm
•	Route '/add': Thêm sản phẩm
•	Route '/edit/:id': Chỉnh sửa sản phẩm
•	Sử dụng useNavigate để điều hướng
3. Form Validation
•	Tên sản phẩm: Bắt buộc, tối thiểu 3 ký tự
•	Giá: Bắt buộc, phải là số dương
•	Số lượng: Bắt buộc, phải là số nguyên dương
•	Danh mục: Bắt buộc chọn
•	Hiển thị thông báo lỗi rõ ràng
V. DỮ LIỆU MẪU
Sinh viên cần tạo dữ liệu mẫu ban đầu với ít nhất 10 sản phẩm thuộc các danh mục khác nhau để test các tính năng phân trang, tìm kiếm và lọc.
Ví dụ cấu trúc dữ liệu:
const initialProducts = [
  { id: 1, ten: 'iPhone 15 Pro', danhMuc: 'Điện tử',
    gia: 25000000, soLuong: 10, moTa: '...' },
  { id: 2, ten: 'Áo Thun Nam', danhMuc: 'Quần áo',
    gia: 150000, soLuong: 50, moTa: '...' },
