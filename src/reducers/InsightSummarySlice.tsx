import { createSlice } from "@reduxjs/toolkit";

type InsightSummaryState = {
  [key: string]: any;
};

const insightSummaryInitialState: InsightSummaryState = {};

export const insightSummarySlice = createSlice({
  name: "insightSummary",
  initialState: insightSummaryInitialState,
  reducers: {
    addToStore(state, action) {
      const newItem = action?.payload;
      state = newItem;
    },
  },
});

export const { addToStore } = insightSummarySlice.actions;
export default insightSummarySlice.reducer;
