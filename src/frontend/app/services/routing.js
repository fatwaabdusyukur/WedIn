import React from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Price from "../pages/price/Price";
import Templates from "../pages/template/Templates";
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
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
    ],
  },
]);
