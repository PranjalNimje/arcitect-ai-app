import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { Category, Titles } from "../../constants/constants";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import PolarAreaChart from "../../pages/PolarAreaChart";
import { useNavigate } from "react-router-dom";
import Heading from "../../pages/Heading";
import { useDispatch } from "react-redux";
import { addToStore } from "../../reducers/UsageStatisticsSlice";
import Loader from "../../pages/Loader";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const UsageStatistics = () => {
  const { data } = useData(Category.USAGE_STATISTICS);

  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToStore(data));
  }, [data, dispatch]);

  const GoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (data?.by_country) {
      const keysArray = Object.keys(data?.by_country);
      const valuesArray = keysArray.map((key) => data?.by_country[key]);
      setChartData1({
        labels: keysArray,
        datasets: [
          {
            label: "Usage Statistics ( by Country )",
            data: valuesArray,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 9, 13)",
              "rgb(54, 12, 25)",
            ],
          },
        ],
      });
    }
    if (data?.by_platform) {
      const keysArray = Object.keys(data?.by_platform);
      const valuesArray = keysArray.map((key) => data?.by_platform[key]);
      setChartData2({
        labels: keysArray,
        datasets: [
          {
            label: "Usage Statistics ( by platform )",
            data: valuesArray,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 9, 13)",
              "rgb(54, 12, 25)",
            ],
          },
        ],
      });
    }
  }, [data]);

  return (
    <div>
      {/* We are fecting data from api , so the data may take some time to get fetched. 
      After the data is fetched we are setting chartData. 
      After the data and chartData is set, then only show chart till then show Loader */}
      {data &&
      Object.keys(chartData1).length !== 0 &&
      Object.keys(chartData2).length !== 0 ? (
        <div className="UsageStatisticContainer">
          <Heading title={Titles.USAGE_STATISTICS} />
          <button
            type="button"
            className="btn btn-dark backBtn"
            onClick={GoBack}
          >
            Back
          </button>
          <div className="UsageStatisticChart">
            <div className="UsageStatisticChart1">
              <h1 className="display-6">By Country</h1>
              <PolarAreaChart chartData={chartData1} />
            </div>
            <div className="UsageStatisticChart2">
              <h1 className="display-6">By Platform</h1>
              <PolarAreaChart chartData={chartData2} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UsageStatistics;
