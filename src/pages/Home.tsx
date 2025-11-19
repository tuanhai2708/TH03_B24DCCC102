import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="page-header">
        <h1>Quản Lý Sản Phẩm</h1>
        <Link to="/add" className="btn btn-primary">
          + Thêm sản phẩm mới
        </Link>
      </div>

      <div className="search-filter-section">
        <SearchBar />
        <Filter />
      </div>

      <ProductList />
    </div>
  );
};

export default Home;

