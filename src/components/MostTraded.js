import SemiDoughnutChart from "./SemiDoughnutChart";

import { doughnutChartData, mostTraded } from "../data/chartData";

const MostTraded = ({ trades, total }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-700 font-semibold">Most Traded</h2>
        <div className="text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* First Column */}
        <div className="space-y-2">
          {mostTraded.trades.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="space-y-2">
          {mostTraded.trades.slice(3, 6).map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>

        <SemiDoughnutChart total={mostTraded.total} data={doughnutChartData} />
      </div>
    </div>
  );
};

export default MostTraded;
