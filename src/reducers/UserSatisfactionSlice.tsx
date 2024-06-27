import { createSlice } from "@reduxjs/toolkit";

type UserSatisfactionState = {
  by_country: { [key: string]: number };
  by_platform: { [key: string]: number };
};

const userSatisfactionInitialState: UserSatisfactionState = {
  by_country: {},
  by_platform: {},
};

export const userSatisfactionSlice = createSlice({
  name: "userSatisfaction",
  initialState: userSatisfactionInitialState,
  reducers: {
    addToStore(state, action) {
      const newItem = action?.payload;
      state = newItem;
    },
  },
});

export const { addToStore } = userSatisfactionSlice.actions;
export default userSatisfactionSlice.reducer;
