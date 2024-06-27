import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }: any) => {
  return (
    <div className="Pie">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
