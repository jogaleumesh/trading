import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SemiDoughnutChart = () => {
  const data = {
    labels: ["Blue", "Orange", "Light Blue"], // Optional labels
    datasets: [
      {
        data: [50, 30, 20], // Adjust values according to your chart
        backgroundColor: ["#3B82F6", "#F97316", "#60A5FA"], // Blue, Orange, Light Blue
        borderWidth: 0, // Removes border between segments
        circumference: 180, // Half-circle
        rotation: 270, // Starts from the bottom
        cutout: "70%", // Adjust the thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Hide tooltips
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center">
      <Doughnut data={data} options={options} />

      <div className="absolute text-center">
        <p className="text-blue-600 text-lg">Total</p>
        <p className="text-black text-xl">16</p>
      </div>
    </div>
  );
};

export default SemiDoughnutChart;
