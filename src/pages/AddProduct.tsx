import React from 'react';
import ProductForm from '../components/ProductForm';
import { Link } from 'react-router-dom';

const AddProduct: React.FC = () => {
  return (
    <div className="add-product-page">
      <div className="page-navigation">
        <Link to="/" className="back-link">
          ← Quay lại
        </Link>
      </div>
      <ProductForm isEdit={false} />
    </div>
  );
};

export default AddProduct;

