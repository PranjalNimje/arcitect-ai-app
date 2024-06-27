import { useEffect, useState } from "react";

export type ApiResponseProps = {
  ratings?: {
    rating: number;
    count: number;
  }[];
  [key: string]: any;
  day_wise?: {
    date: string;
    average_time: number;
  }[];
  week_wise?: {
    week: string;
    average_time: number;
  }[];
  by_country: { [key: string]: number };
  by_platform: { [key: string]: number };
};
const useData = (selectedData: string) => {
  const [data, setData] = useState<ApiResponseProps>();

  // We are calling api for every seperate category
  //http://localhost:4000/insight_summary
  // http://localhost:4000/category_distribution
  // http://localhost:4000/response_times
  // http://localhost:4000/user_satisfaction
  // http://localhost:4000/usage_statistics

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:4000/${selectedData}`)
        .then((resp) => resp.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log("Err occured", err));
    };
    fetchData();
  }, [selectedData]);

  return {
    data,
    setData,
  };
};

export default useData;
