import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }: any) => {
  return (
    <div className="Bar">
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
