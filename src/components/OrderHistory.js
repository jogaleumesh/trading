import { useState, useEffect } from "react";
import moment from "moment";

import Pagination from "./Pagination";
import FilterDropdown from "./FilterDropdown";

import { orderHistoryData } from "../data/orderHistoryData";
const OrderHistory = () => {
  const [filter, setFilter] = useState(30); // Default to 30 days
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredData = orderHistoryData.filter(
    (item) => moment().diff(moment(item.openDate), "days") <= filter
  );

  // Calculate paginated data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src="assets/dollar.png" alt="payout" className="h-6 mr-2" />
          <h4 className="text-gray-700 text-lg font-medium">Order History</h4>
        </div>

        <FilterDropdown filter={filter} setFilter={setFilter} />
      </div>

      <div className="overflow-y-auto max-h-100">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-2">Symbol</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Open Date</th>
              <th className="text-left p-2">Open Price</th>
              <th className="text-left p-2">SL</th>
              <th className="text-left p-2">TP</th>
              <th className="text-left p-2">Close Date</th>
              <th className="text-left p-2">Close Price</th>
              <th className="text-left p-2">Lots</th>
              <th className="text-left p-2">Profit</th>
              <th className="text-left p-2">Duration</th>
              <th className="text-left p-2">Gain</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="p-2">{item.symbol}</td>
                <td
                  className={`p-2 ${
                    item.type == "Sell" ? "text-red-600" : "text-blue-600"
                  }`}
                >
                  {item.type}
                </td>
                <td className="p-2">
                  {moment(item.openDate).format("MM-DD-YY, h:mm:ss")}
                </td>
                <td className="p-2">{item.openPrice}</td>
                <td className="p-2">{item.sl}</td>
                <td className="p-2">{item.tp}</td>
                <td className="p-2">
                  {moment(item.closeDate).format("MM-DD-YY, h:mm:ss")}
                </td>
                <td className="p-2">{item.closePrice}</td>
                <td className="p-2">{item.lots}</td>

                <td
                  className={`p-2 ${
                    item.profit.startsWith("-")
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.profit}
                </td>

                <td className="p-2">{item.duration}</td>
                <td
                  className={`p-2 ${
                    item.profit.startsWith("-")
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.gain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default OrderHistory;
