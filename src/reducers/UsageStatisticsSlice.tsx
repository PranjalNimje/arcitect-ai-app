import { createSlice } from "@reduxjs/toolkit";

type UsageStatisticsState = {
  by_country: { [key: string]: number };
  by_platform: { [key: string]: number };
};

const usageStatisticsInitialState: UsageStatisticsState = {
  by_country: {},
  by_platform: {},
};

export const usageStatisticsSlice = createSlice({
  name: "usageStatistics",
  initialState: usageStatisticsInitialState,
  reducers: {
    addToStore(state, action) {
      const newItem = action?.payload;
      state = newItem;
    },
  },
});

export const { addToStore } = usageStatisticsSlice.actions;
export default usageStatisticsSlice.reducer;
