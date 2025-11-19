import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, ProductState, ProductAction, Category } from '../types/Product';
import { initialProducts } from '../data/initialProducts';

const initialState: ProductState = {
  products: initialProducts,
  searchTerm: '',
  selectedCategory: 'Tất cả',
  minPrice: '',
  maxPrice: '',
  currentPage: 1,
};

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload),
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
        currentPage: 1,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
        currentPage: 1,
      };
    case 'SET_MIN_PRICE':
      return {
        ...state,
        minPrice: action.payload,
        currentPage: 1,
      };
    case 'SET_MAX_PRICE':
      return {
        ...state,
        maxPrice: action.payload,
        currentPage: 1,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  setSearchTerm: (term: string) => void;
  setCategory: (category: Category | 'Tất cả') => void;
  setMinPrice: (price: string) => void;
  setMaxPrice: (price: string) => void;
  setCurrentPage: (page: number) => void;
  getProductById: (id: number) => Product | undefined;
  getFilteredProducts: () => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProduct = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const setSearchTerm = (term: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const setCategory = (category: Category | 'Tất cả') => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  const setMinPrice = (price: string) => {
    dispatch({ type: 'SET_MIN_PRICE', payload: price });
  };

  const setMaxPrice = (price: string) => {
    dispatch({ type: 'SET_MAX_PRICE', payload: price });
  };

  const setCurrentPage = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const getProductById = (id: number): Product | undefined => {
    return state.products.find(p => p.id === id);
  };

  const getFilteredProducts = (): Product[] => {
    let filtered = [...state.products];

    // Lọc theo tìm kiếm
    if (state.searchTerm) {
      filtered = filtered.filter(p =>
        p.ten.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    // Lọc theo danh mục
    if (state.selectedCategory !== 'Tất cả') {
      filtered = filtered.filter(p => p.danhMuc === state.selectedCategory);
    }

    // Lọc theo giá
    const minPrice = parseFloat(state.minPrice);
    const maxPrice = parseFloat(state.maxPrice);

    if (!isNaN(minPrice)) {
      filtered = filtered.filter(p => p.gia >= minPrice);
    }

    if (!isNaN(maxPrice)) {
      filtered = filtered.filter(p => p.gia <= maxPrice);
    }

    return filtered;
  };

  const value: ProductContextType = {
    state,
    dispatch,
    addProduct,
    updateProduct,
    deleteProduct,
    setSearchTerm,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setCurrentPage,
    getProductById,
    getFilteredProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

