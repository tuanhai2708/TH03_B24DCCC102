import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, ProductFormData, Category } from '../types/Product';
import { useProducts } from '../context/ProductContext';

interface ProductFormProps {
  product?: Product;
  isEdit?: boolean;
}

interface FormErrors {
  ten?: string;
  danhMuc?: string;
  gia?: string;
  soLuong?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, isEdit = false }) => {
  const navigate = useNavigate();
  const { addProduct, updateProduct, state } = useProducts();

  const [formData, setFormData] = useState<ProductFormData>({
    ten: product?.ten || '',
    danhMuc: product?.danhMuc || 'Điện tử',
    gia: product?.gia || '',
    soLuong: product?.soLuong || '',
    moTa: product?.moTa || '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (product) {
      setFormData({
        ten: product.ten,
        danhMuc: product.danhMuc,
        gia: product.gia,
        soLuong: product.soLuong,
        moTa: product.moTa,
      });
    }
  }, [product]);

  const categories: Category[] = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate tên sản phẩm
    if (!formData.ten.trim()) {
      newErrors.ten = 'Tên sản phẩm là bắt buộc';
    } else if (formData.ten.trim().length < 3) {
      newErrors.ten = 'Tên sản phẩm phải có ít nhất 3 ký tự';
    }

    // Validate giá
    const gia = Number(formData.gia);
    if (!formData.gia || formData.gia === '') {
      newErrors.gia = 'Giá là bắt buộc';
    } else if (isNaN(gia) || gia <= 0) {
      newErrors.gia = 'Giá phải là số dương';
    }

    // Validate số lượng
    const soLuong = Number(formData.soLuong);
    if (!formData.soLuong || formData.soLuong === '') {
      newErrors.soLuong = 'Số lượng là bắt buộc';
    } else if (isNaN(soLuong) || soLuong <= 0 || !Number.isInteger(soLuong)) {
      newErrors.soLuong = 'Số lượng phải là số nguyên dương';
    }

    // Validate danh mục
    if (!formData.danhMuc) {
      newErrors.danhMuc = 'Danh mục là bắt buộc';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Xóa lỗi khi user bắt đầu nhập
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const productData: Product = {
      id: product?.id || Date.now(), // Tạo ID mới nếu là thêm mới
      ten: formData.ten.trim(),
      danhMuc: formData.danhMuc,
      gia: Number(formData.gia),
      soLuong: Number(formData.soLuong),
      moTa: formData.moTa.trim(),
    };

    if (isEdit) {
      updateProduct(productData);
      alert('Cập nhật sản phẩm thành công!');
    } else {
      addProduct(productData);
      alert('Thêm sản phẩm thành công!');
    }

    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>{isEdit ? 'Chỉnh Sửa Sản Phẩm' : 'Thêm Sản Phẩm Mới'}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="ten">
            Tên sản phẩm <span className="required">*</span>
          </label>
          <input
            type="text"
            id="ten"
            name="ten"
            value={formData.ten}
            onChange={handleChange}
            className={errors.ten ? 'error' : ''}
          />
          {errors.ten && <span className="error-message">{errors.ten}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="danhMuc">
            Danh mục <span className="required">*</span>
          </label>
          <select
            id="danhMuc"
            name="danhMuc"
            value={formData.danhMuc}
            onChange={handleChange}
            className={errors.danhMuc ? 'error' : ''}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.danhMuc && <span className="error-message">{errors.danhMuc}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gia">
              Giá <span className="required">*</span>
            </label>
            <input
              type="number"
              id="gia"
              name="gia"
              value={formData.gia}
              onChange={handleChange}
              className={errors.gia ? 'error' : ''}
              min="0"
            />
            {errors.gia && <span className="error-message">{errors.gia}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="soLuong">
              Số lượng <span className="required">*</span>
            </label>
            <input
              type="number"
              id="soLuong"
              name="soLuong"
              value={formData.soLuong}
              onChange={handleChange}
              className={errors.soLuong ? 'error' : ''}
              min="0"
              step="1"
            />
            {errors.soLuong && <span className="error-message">{errors.soLuong}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="moTa">Mô tả</label>
          <textarea
            id="moTa"
            name="moTa"
            value={formData.moTa}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEdit ? 'Cập nhật' : 'Thêm mới'}
          </button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

