import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import homeReducer from "../pages/home/logic";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: () => [thunk],
});
