import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bagSlice";
import requestUser from "./requestUserSlice";

export default configureStore({
  reducer: {
    bag: bagReducer,
    requestUser: requestUser,
  },
});
