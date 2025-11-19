import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { useProducts } from '../context/ProductContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { deleteProduct } = useProducts();

  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.ten}"?`)) {
      deleteProduct(product.id);
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-card-header">
        <h3 className="product-name">{product.ten}</h3>
        <span className="product-category">{product.danhMuc}</span>
      </div>
      <div className="product-card-body">
        <p className="product-price">{formatPrice(product.gia)}</p>
        <p className="product-quantity">Số lượng: {product.soLuong}</p>
        <p className="product-description">{product.moTa}</p>
      </div>
      <div className="product-card-actions">
        <Link to={`/products/${product.id}`} className="btn btn-info">
          Chi tiết
        </Link>
        <Link to={`/edit/${product.id}`} className="btn btn-warning">
          Sửa
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

