import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }: any) => {
  return (
    <div className="Pie">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
