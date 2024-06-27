import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { Category, Titles } from "../../constants/constants";
import PieChart from "../../pages/PieChart";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";
import Heading from "../../pages/Heading";
import { useDispatch } from "react-redux";
import { addToStore } from "../../reducers/UserSatisfactionSlice";
import Loader from "../../pages/Loader";
Chart.register(ArcElement, Tooltip, Legend);

export type PieChartProps = {
  labels: [];
  datasets: {
    label: string;
    data: [];
    backgroundColor: [];
    hoverOffset: number;
  }[];
};
const UserSatisfaction = () => {
  const { data } = useData(Category.USER_SATISFACTION);

  const [chartData, setChartData] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToStore(data));
  }, [data, dispatch]);

  const navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    let arrCount = data?.ratings?.map((d) => d.count);
    let arrRating = data?.ratings?.map((d) => d.rating);
    if (data?.ratings) {
      setChartData({
        labels: arrRating,
        datasets: [
          {
            label: "My First Dataset",
            data: arrCount,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 9, 13)",
              "rgb(54, 12, 25)",
            ],
            // hoverOffset: 4,
          },
        ],
      });
    }
  }, [data?.ratings]);

  return (
    <div>
      {/* We are fecting data from api , so the data may take some time to get fetched. 
      After the data is fetched we are setting chartData. 
      After the data and chartData is set, then only show chart till then show Loader */}
      {data?.ratings && Object.keys(chartData).length !== 0 ? (
        <div className="UserSatisfactionContainer">
          <Heading title={Titles.USER_SATISFACTION} />
          <button
            type="button"
            className="btn btn-dark backBtn"
            onClick={GoBack}
          >
            Back
          </button>
          <PieChart chartData={chartData} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserSatisfaction;
