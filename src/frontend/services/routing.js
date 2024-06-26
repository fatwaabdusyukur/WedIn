import React from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    basename: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);
