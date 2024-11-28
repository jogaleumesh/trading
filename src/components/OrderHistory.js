import Pagination from "./Pagination";

const OrderHistory = () => {
  return (
    <div className="bg-white m-6 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Order History</h3>
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Symbol</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Open Date</th>
            <th className="text-left p-2">Open Price</th>
            <th className="text-left p-2">Close Price</th>
            <th className="text-left p-2">Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">EURUSD</td>
            <td className="p-2">Sell</td>
            <td className="p-2">02-23-24</td>
            <td className="p-2">2.80568</td>
            <td className="p-2">1.80568</td>
            <td className="p-2 text-red-600">- $5.00</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">EURUSD</td>
            <td className="p-2">Sell</td>
            <td className="p-2">02-23-24</td>
            <td className="p-2">2.80568</td>
            <td className="p-2">1.80568</td>
            <td className="p-2 text-red-600">- $5.00</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>

      {/* <Pagination totalItems={120} /> */}
    </div>
  );
};

export default OrderHistory;
