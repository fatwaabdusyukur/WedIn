import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../services/store";

export default function Layout() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </React.StrictMode>
  );
}
