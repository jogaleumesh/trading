import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const totalPagesToShow = 4; // Number of visible pages
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Ensure this is defined

    let startPage = Math.max(currentPage - Math.floor(totalPagesToShow / 2), 1);
    let endPage = startPage + totalPagesToShow - 1;

    // Adjust if endPage exceeds the total number of pages
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(totalPages - totalPagesToShow + 1, 1);
    }

    // Populate pages array
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Items per page selector */}
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Items per page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-2 py-1 focus:outline-none"
        >
          {[10, 20, 30, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          &larr;
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
