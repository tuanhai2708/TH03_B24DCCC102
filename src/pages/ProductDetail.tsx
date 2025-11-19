import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, deleteProduct } = useProducts();

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

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.ten}"?`)) {
      deleteProduct(product.id);
      alert('Xóa sản phẩm thành công!');
      navigate('/');
    }
  };

  return (
    <div className="product-detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">
          ← Quay lại
        </Link>
      </div>

      <div className="product-detail-card">
        <div className="detail-header-section">
          <h1>{product.ten}</h1>
          <span className="category-badge">{product.danhMuc}</span>
        </div>

        <div className="detail-body">
          <div className="detail-row">
            <span className="detail-label">Giá:</span>
            <span className="detail-value price">{formatPrice(product.gia)}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Số lượng:</span>
            <span className="detail-value">{product.soLuong}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Danh mục:</span>
            <span className="detail-value">{product.danhMuc}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Mô tả:</span>
            <p className="detail-description">{product.moTa}</p>
          </div>
        </div>

        <div className="detail-actions">
          <Link to={`/edit/${product.id}`} className="btn btn-warning">
            Chỉnh sửa
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Xóa sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

