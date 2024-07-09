import React from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Price from "../pages/price/Price";
import Templates from "../pages/template/Templates";
import { createBrowserRouter } from "react-router-dom";
import { queryData } from "./fetch-data";

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
        loader: async () => {
          try {
            const { prices } = await queryData(
              "prices",
              "type price offers description color"
            );
            const { faqType } = await queryData("faqType", "question answer", {
              type: "price",
            });

            return { prices: prices, faqs: faqType };
          } catch (error) {
            console.error(`Error when fetching data for price page: ${error}`);
          }
        },
        element: <Price />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
    ],
  },
]);
