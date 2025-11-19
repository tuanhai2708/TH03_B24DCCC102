import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Category } from '../types/Product';

const Filter: React.FC = () => {
  const { state, setCategory, setMinPrice, setMaxPrice } = useProducts();

  const categories: Array<Category | 'Tất cả'> = [
    'Tất cả',
    'Điện tử',
    'Quần áo',
    'Đồ ăn',
    'Sách',
    'Khác'
  ];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category | 'Tất cả');
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="category">Danh mục:</label>
        <select
          id="category"
          value={state.selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="minPrice">Giá từ:</label>
        <input
          type="number"
          id="minPrice"
          placeholder="0"
          value={state.minPrice}
          onChange={handleMinPriceChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="maxPrice">Giá đến:</label>
        <input
          type="number"
          id="maxPrice"
          placeholder="∞"
          value={state.maxPrice}
          onChange={handleMaxPriceChange}
          className="filter-input"
        />
      </div>
    </div>
  );
};

export default Filter;

