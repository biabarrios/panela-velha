import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "bag",
  initialState: {
    data: {},
  },
  reducers: {
    addFood(state, { payload }) {
      return { ...state, data: payload };
    },
  },
});

export const { addFood } = slice.actions;

export const getFood = (state) => state.store;

export default slice.reducer;
