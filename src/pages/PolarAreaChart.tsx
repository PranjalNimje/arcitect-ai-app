import { PolarArea } from "react-chartjs-2";

const PolarAreaChart = ({ chartData }: any) => {
  return (
    <div className="PolarArea">
      <PolarArea data={chartData} />
    </div>
  );
};

export default PolarAreaChart;
