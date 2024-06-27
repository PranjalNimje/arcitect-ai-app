import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { Category, Titles } from "../../constants/constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BarChart from "../../pages/BarChart";
import { useNavigate } from "react-router-dom";
import Heading from "../../pages/Heading";
import { useDispatch } from "react-redux";
import { addToStore } from "../../reducers/CategoryDistSlice";
import Loader from "../../pages/Loader";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CategoryDistribution = () => {
  //data fetched from api for "category_distribution"
  const { data } = useData(Category.CATEGORY_DIST);

  const [chartData, setChartData] = useState({});

  //For adding the data to redux store.
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
    // We are fecting data from api , so the data may take some time to get fetched
    // So we check this condition that if data is fetched, then ony set chart data
    if (data) {
      const keysArray = Object.keys(data);
      const valuesArray = keysArray.map((key) => data[key]);
      setChartData({
        labels: keysArray,
        datasets: [
          {
            label: "My First Dataset",
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
      {data && Object.keys(chartData).length !== 0 ? (
        <div className="CateDistrContainer">
          <Heading title={Titles.CATEGORY_DIST} />
          <button
            type="button"
            className="btn btn-dark backBtn"
            onClick={GoBack}
          >
            Back
          </button>
          <BarChart chartData={chartData} />
        </div>
      ) : (
        //Showing loader till the data is getting fetched and chartdata is set
        <Loader />
      )}
    </div>
  );
};

export default CategoryDistribution;
