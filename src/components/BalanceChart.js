import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const BalanceChart = () => {
  const data = {
    labels: [0, 1, 2, 3, 4],
    datasets: [
      {
        label: "Balance",
        data: [105000, 102000, 95000, 98000, 100000],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#3B82F6",
      },
      {
        label: "Equity",
        data: [98000, 100000, 97000, 99000, 101000],
        borderColor: "#F97316",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: "#F97316",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides legend
      },
      tooltip: {
        backgroundColor: "#1F2937", // Dark tooltip background
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `$${(value / 1000).toFixed(1)}k`,
          color: "#6B7280", // Gray color
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-slate-950 text-xl font-medium">Total Balance</h4>
          <p className="text-green-500 font-semibold">Profit: +0.8%</p>
        </div>
        <div className="flex space-x-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm">Balance</p>
            <p className="text-gray-900 font-semibold">$120,567.90</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">Equity</p>
            <p className="text-gray-900 font-semibold">$240,952.00</p>
          </div>
        </div>
      </div>
      <div className="h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceChart;
