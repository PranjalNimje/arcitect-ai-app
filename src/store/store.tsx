import { configureStore } from "@reduxjs/toolkit";
import InsightSummarySlice from "../reducers/InsightSummarySlice";
import CategoryDistSlice from "../reducers/CategoryDistSlice";
import UsageStatisticsSlice from "../reducers/UsageStatisticsSlice";
import UserSatisfactionSlice from "../reducers/UserSatisfactionSlice";
import ResponseTimesSlice from "../reducers/ResponseTimesSlice";

const store = configureStore({
  reducer: {
    InsightSummarySlice,
    CategoryDistSlice,
    ResponseTimesSlice,
    UsageStatisticsSlice,
    UserSatisfactionSlice,
  },
});

export default store;
