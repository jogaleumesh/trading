import { useState, useEffect } from "react";

import Pagination from "./Pagination";
import FilterDropdown from "./FilterDropdown";

import { notificationsData } from "../data/notificationsData";

// Utility function to format time as 'X days ago'
const getRelativeTime = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffTime = Math.abs(now - past);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return `${diffDays} days ago`;
};

const Notifications = () => {
  const [filter, setFilter] = useState(30); // Default to last 30 days
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);

  // Filter notifications based on selected time range
  useEffect(() => {
    const now = new Date();
    const filtered = notificationsData.filter((item) => {
      const notificationDate = new Date(item.time);
      const daysDifference = (now - notificationDate) / (1000 * 60 * 60 * 24);
      return daysDifference <= filter;
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when the filter changes
  }, [filter]);

  // Calculate current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-gray-700 text-lg font-medium">Notifications</h4>

        <FilterDropdown filter={filter} setFilter={setFilter} />
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-y-auto max-h-40">
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead className="text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="w-1/4 px-4 py-2">Time</th>
              <th className="w-1/4 px-4 py-2">Type</th>
              <th className="w-1/2 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-100">
                <td className="px-4 py-3">{getRelativeTime(item.time)}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3 truncate">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        onItemsPerPageChange={(num) => setItemsPerPage(num)}
      />
    </div>
  );
};

export default Notifications;
