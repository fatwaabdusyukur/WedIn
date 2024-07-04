import React from "react";
import App from "./components/App";
import "@public/assets/css/style.css";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#app");
createRoot(container).render(<App />);
