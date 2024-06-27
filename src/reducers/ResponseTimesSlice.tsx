import { createSlice } from "@reduxjs/toolkit";

type ResponseTimesState = {
  day_wise: {
    date: string;
    average_time: number;
  }[];
  week_wise: {
    week: string;
    average_time: number;
  }[];
};

const responseTimesInitialState: ResponseTimesState = {
  day_wise: [],
  week_wise: [],
};

export const responseTimesSlice = createSlice({
  name: "responseTimes",
  initialState: responseTimesInitialState,
  reducers: {
    addToStore(state, action) {
      const newItem = action?.payload;
      state = newItem;
    },
  },
});

export const { addToStore } = responseTimesSlice.actions;
export default responseTimesSlice.reducer;
