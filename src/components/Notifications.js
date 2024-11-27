import Pagination from "./Pagination";

const Notifications = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-gray-700 text-lg font-medium">Notifications</h4>
        <button className="text-gray-500 text-sm">Last 30 Days</button>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-100">
              <td className="px-4 py-3">{item.time}</td>
              <td className="px-4 py-3">{item.type}</td>
              <td className="px-4 py-3">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination totalItems={120} />
    </div>
  );
};

export default Notifications;
