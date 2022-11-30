import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "bag",
  initialState: {
    data: {},
    quantity: 1,
    payment: null,
    addressUser: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
  },
  reducers: {
    addFood(state, { payload }) {
      return { ...state, data: payload };
    },
    setQuantityFood(state, { payload }) {
      return { ...state, quantity: payload };
    },
    setTypePayment(state, { payload }) {
      return { ...state, payment: payload };
    },
  },
});

export const { addFood, setQuantityFood, setTypePayment } = slice.actions;

export const getFood = (state) => state.store;

export default slice.reducer;
