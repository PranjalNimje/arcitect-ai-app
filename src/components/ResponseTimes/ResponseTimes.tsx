import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { Category, Titles } from "../../constants/constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "../../pages/LineChart";
import { useNavigate } from "react-router-dom";
import Heading from "../../pages/Heading";
import { useDispatch } from "react-redux";
import { addToStore } from "../../reducers/ResponseTimesSlice";
import Loader from "../../pages/Loader";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ResponseTimes = () => {
  //data fetched from api for "response_times"
  const { data } = useData(Category.RESPONSE_TIMES);

  //Showing two charts
  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToStore(data));
  }, [data, dispatch]);

  const navigate = useNavigate();

  //For going back to Home page
  const GoBack = () => {
    navigate(-1);
  };

  //For setting chart data
  useEffect(() => {
    if (data?.day_wise) {
      let date = data?.day_wise?.map((d) => d.date);
      let averageTime = data?.day_wise?.map((d) => d.average_time);
      setChartData1({
        labels: date,
        datasets: [
          {
            label: "Response Time ( in days )",
            data: averageTime,
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
    if (data?.week_wise) {
      let week = data?.week_wise?.map((d) => d.week);
      let averageTime = data?.week_wise?.map((d) => d.average_time);
      setChartData2({
        labels: week,
        datasets: [
          {
            label: "Response Time ( in weeks )",
            data: averageTime,
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
        <div className="ResponseTimeContainer">
          <Heading title={Titles.RESPONSE_TIMES} />
          <button
            type="button"
            className="btn btn-dark backBtn"
            onClick={GoBack}
          >
            Back
          </button>
          <div className="ResponseTimeChart">
            <div className="ResponseTimeChart1">
              <h1 className="display-6">Response Time in days</h1>
              <LineChart chartData={chartData1} />
            </div>
            <div className="ResponseTimeChart2">
              <h1 className="display-6">Response Time in weeks</h1>
              <LineChart chartData={chartData2} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ResponseTimes;
