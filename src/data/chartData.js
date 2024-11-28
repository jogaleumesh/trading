export const chartData = {
  labels: [0, 1, 2, 3, 4], // X-axis labels
  datasets: [
    {
      label: "Dataset 1",
      data: [110000, 105000, 100000, 102000, 101000], // Blue line data
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      fill: true,
      tension: 0.3, // Smooth curve
    },
    {
      label: "Dataset 2",
      data: [97000, 98000, 95000, 96000, 99000], // Orange line data
      borderColor: "orange",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      fill: true,
      tension: 0.3, // Smooth curve
    },
  ],
};

export const mostTraded = {
  trades: [
    { name: "NZDUSD", color: "bg-blue-500" },
    { name: "GBPUSD", color: "bg-red-400" },
    { name: "AUDCHF", color: "bg-blue-300" },
    { name: "USDCHF", color: "bg-purple-300" },
    { name: "XAUUSD", color: "bg-orange-200" },
    { name: "AUDNZD", color: "bg-teal-300" },
  ],
  total: 16,
};

export const doughnutChartData = {
  labels: ["NZDUSD", "GBPUSD", "AUDCHF"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#2f62d5", "#ff774e", "#13c0f9"],
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
      cutout: "75%",
    },
  ],
};
