import { createSlice } from "@reduxjs/toolkit";

type CategoryDistState = {
  [key: string]: any;
};

const CategoryDistInitialState: CategoryDistState = {};

export const categoryDistSlice = createSlice({
  name: "categoryDist",
  initialState: CategoryDistInitialState,
  reducers: {
    addToStore(state, action) {
      const newItem = action?.payload;
      state = newItem;
    },
  },
});

export const { addToStore } = categoryDistSlice.actions;
export default categoryDistSlice.reducer;
