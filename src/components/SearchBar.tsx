import React from 'react';
import { useProducts } from '../context/ProductContext';

const SearchBar: React.FC = () => {
  const { state, setSearchTerm } = useProducts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm theo tên..."
        value={state.searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;

