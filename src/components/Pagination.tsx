import React from 'react';
import { useProducts } from '../context/ProductContext';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage }) => {
  const { state, setCurrentPage } = useProducts();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (state.currentPage > 1) {
      setCurrentPage(state.currentPage - 1);
    }
  };

  const handleNext = () => {
    if (state.currentPage < totalPages) {
      setCurrentPage(state.currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages: JSX.Element[] = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, state.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`page-number ${state.currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="pagination-info">
        Hiển thị trang {state.currentPage} / {totalPages} (Tổng {totalItems} sản phẩm)
      </div>
      <div className="pagination-controls">
        <button
          onClick={handlePrevious}
          disabled={state.currentPage === 1}
          className="btn btn-pagination"
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          disabled={state.currentPage === totalPages}
          className="btn btn-pagination"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

