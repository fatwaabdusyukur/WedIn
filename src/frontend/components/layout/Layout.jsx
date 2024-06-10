import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <React.StrictMode>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.StrictMode>
  );
}
