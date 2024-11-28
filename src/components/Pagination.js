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
      <div className="flex items-center text-blue-600">
        <span>Showing:</span>
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
          className={`px-3 py-1 ${
            currentPage === 1 ? "text-blue-500" : "text-gray-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M19 12a1 1 0 0 1-1 1H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L7.414 11H18a1 1 0 0 1 1 1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 ${
              page === currentPage ? "text-blue-500" : "text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 ${
            currentPage === totalPages ? "text-blue-500" : "text-gray-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5 12a1 1 0 0 1 1-1h10.586l-4.293-4.293a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H6a1 1 0 0 1-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
