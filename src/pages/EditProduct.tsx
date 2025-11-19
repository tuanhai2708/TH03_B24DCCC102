import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { useProducts } from '../context/ProductContext';

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/" className="btn btn-primary">
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="edit-product-page">
      <div className="page-navigation">
        <Link to="/" className="back-link">
          ← Quay lại
        </Link>
      </div>
      <ProductForm product={product} isEdit={true} />
    </div>
  );
};

export default EditProduct;

