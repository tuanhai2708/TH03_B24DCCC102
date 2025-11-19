export type Category = 'Điện tử' | 'Quần áo' | 'Đồ ăn' | 'Sách' | 'Khác';

export interface Product {
  id: number;
  ten: string;
  danhMuc: Category;
  gia: number;
  soLuong: number;
  moTa: string;
}

export interface ProductFormData {
  ten: string;
  danhMuc: Category;
  gia: number | string;
  soLuong: number | string;
  moTa: string;
}

export interface ProductState {
  products: Product[];
  searchTerm: string;
  selectedCategory: Category | 'Tất cả';
  minPrice: string;
  maxPrice: string;
  currentPage: number;
}

export type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: number }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_CATEGORY'; payload: Category | 'Tất cả' }
  | { type: 'SET_MIN_PRICE'; payload: string }
  | { type: 'SET_MAX_PRICE'; payload: string }
  | { type: 'SET_CURRENT_PAGE'; payload: number };

