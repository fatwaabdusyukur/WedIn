import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Alert from "../alert/Alert";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../services/store";

export default function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Alert/>
        { !isDashboard && <Navbar /> }
        <main>
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </React.StrictMode>
  );
}
