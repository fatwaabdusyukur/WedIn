import React from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";
import Price from "../pages/price/Price";
import Templates from "../pages/template/Templates";
import Error from "../pages/error/Error";
import { createBrowserRouter } from "react-router-dom";
import { queryData, fetchGet } from "./fetch-data";
import Dashboard from "../pages/dashboard/Dashboard";

const errorServer = (error) =>  ({ status: error.status || 500, statusText: error.statusText || 'Something went wrong, please refresh the page!' });

export const router = createBrowserRouter([
  {
    basename: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => {
          try {
            const { features } = await queryData(
              "features",
              "feature description icon"
            );
            const { faqType } = await queryData("faqType", "question answer", {
              type: "common",
            });

            return { features, faqs: faqType };
          } catch (error) {
            throw errorServer(error);
          }
        },
        element: <Home />,
      },
      {
        path: "/auth",
        loader:  async () => {
          try {
            const { csrfToken } = await fetchGet('csrf-token');

            return  csrfToken;
          } catch (error) {
            throw errorServer(error);
          }
        },
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

            return { prices, faqs: faqType };
          } catch (error) {
            throw errorServer(error);
          }
        },
        element: <Price />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: '/dashboard',
        loader: async() => {
          try {
            const { data } = await fetchGet('protected');

            return data;
          } catch (error) {
            throw errorServer(error);
          }
        },
        element: <Dashboard/>,
      }
    ],
    errorElement: <Error />,
  }
]);
