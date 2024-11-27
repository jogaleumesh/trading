import React, { useState } from "react";

const Pagination = ({ totalItems }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  // Handler to change items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  // Handler to change the current page
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculate visible page numbers
  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(currentPage - 1, 1); // Ensure the first page is at least 1

    // Adjust start page if at the beginning or end
    if (currentPage === totalPages) startPage = Math.max(totalPages - 3, 1);
    else if (currentPage > totalPages - 2) startPage = totalPages - 3;

    // Add pages to the array (up to 4 pages)
    for (let i = startPage; i < startPage + 4 && i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Items per page selector */}
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Showing:</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[10, 20, 32, 50].map((num) => (
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
          onClick={() => handlePageChange(currentPage - 1)}
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
            onClick={() => handlePageChange(page)}
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
          onClick={() => handlePageChange(currentPage + 1)}
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
