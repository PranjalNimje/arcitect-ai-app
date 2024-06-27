import useData from "../../hooks/useData";
import { Category, Titles } from "../../constants/constants";
import Loader from "../../pages/Loader";
import { useNavigate } from "react-router-dom";
import Heading from "../../pages/Heading";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToStore } from "../../reducers/InsightSummarySlice";

const InsightSummary = () => {
  //data fetched from api for "insight_summary"
  const { data } = useData(Category.INSIGHT_SUMMARY);

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

  return (
    <div className="InsightSummaryContainer">
      <Heading title={Titles.INSIGHT_SUMMARY} />
      <button type="button" className="btn btn-dark backBtn" onClick={GoBack}>
        Back
      </button>
      {data ? (
        <>
          <table className="table">
            <tbody>
              {/* Showing data in table format for insight summary */}
              {Object.keys(data)?.map((category) => (
                <tr key={data[category]}>
                  <th className="th">{category}</th>
                  <td className="td">{data[category]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        //Showing loader till the data is getting fetched and chartdata is set
        <Loader />
      )}
    </div>
  );
};

export default InsightSummary;
