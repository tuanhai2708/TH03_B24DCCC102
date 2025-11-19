import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 6;

const ProductList: React.FC = () => {
  const { state, getFilteredProducts } = useProducts();
  const filteredProducts = getFilteredProducts();

  const startIndex = (state.currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  if (filteredProducts.length === 0) {
    return (
      <div className="no-products">
        <p>Không tìm thấy sản phẩm nào phù hợp.</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination totalItems={filteredProducts.length} itemsPerPage={ITEMS_PER_PAGE} />
    </div>
  );
};

export default ProductList;

