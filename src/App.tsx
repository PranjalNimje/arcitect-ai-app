import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
// import Dashboard from "./components/Dashboard/Dashboard";
import InsightSummary from "./components/InsightSummary/InsightSummary";
import Layout from "./components/Layout/Layout";
import CategoryDistribution from "./components/CategoryDistribution/CategoryDistribution";
import ResponseTimes from "./components/ResponseTimes/ResponseTimes";
import UserSatisfaction from "./components/UserSatisfaction/UserSatisfaction";
import UsageStatistics from "./components/UsageStatistics/UsageStatistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "insight_summary",
          element: <InsightSummary />,
        },
        {
          path: "category_distribution",
          element: <CategoryDistribution />,
        },
        {
          path: "response_times",
          element: <ResponseTimes />,
        },
        {
          path: "user_satisfaction",
          element: <UserSatisfaction />,
        },
        {
          path: "usage_statistics",
          element: <UsageStatistics />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
