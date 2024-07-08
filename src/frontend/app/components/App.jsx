import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../services/routing";
import { Provider } from "react-redux";
import { store } from "../services/store";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
