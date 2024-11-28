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
