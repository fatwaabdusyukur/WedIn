import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import homeReducer from "../pages/home/logic";
import priceReducer from "../pages/price/logic";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    price: priceReducer,
  },
  middleware: () => [thunk],
});
