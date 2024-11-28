import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SemiDoughnutChart = ({ data, total }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative h-20">
      <Doughnut data={data} options={options} />

      <div className="absolute inset-0  top-12 flex flex-col items-center justify-center">
        <span className="text-lg font-semibold text-gray-700">Total</span>
        <span className="text-xl font-bold text-blue-600">{total}</span>
      </div>
    </div>
  );
};

export default SemiDoughnutChart;
