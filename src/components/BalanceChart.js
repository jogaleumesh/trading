import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  LinearScale,
  CategoryScale,
  Filler,
} from "chart.js";

import { chartData } from "../data/chartData";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  LinearScale,
  CategoryScale,
  Filler
);

const BalanceChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: true },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
          },
        },
      },
      y: {
        min: 90000,
        max: 115000,
        grid: { display: true },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
          },
          callback: (value) => {
            if (value >= 1000) {
              return `$${(value / 1000).toFixed(0)}K`;
            }
            return `$${value}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          family: "Roboto",
          size: 14,
        },
        titleFont: {
          family: "Roboto",
          size: 14,
        },
        callbacks: {
          label: (context) => `Balance: $${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-slate-950 text-xl font-medium">Total Balance</h4>
          <p className="text-blue-600 font-semibold">Profit: +0.8%</p>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-3">
            <img src="assets/chart.png" alt="payout" className="h-8" />
            <div>
              <p className="text-gray-900 font-semibold">$120,567.90</p>
              <p className="text-gray-500 text-sm">Balance</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img src="assets/chart.png" alt="payout" className="h-8" />
            <div>
              <p className="text-gray-900 font-semibold">$240,952.00</p>
              <p className="text-gray-500 text-sm">Equity</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BalanceChart;
