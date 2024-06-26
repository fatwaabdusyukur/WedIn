import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../services/routing";

export default function App() {
  return <RouterProvider router={router} />;
}
