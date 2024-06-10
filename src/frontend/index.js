import React from "react";
import "@frontend/assets/css/style.css";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#app");
createRoot(container).render(<h1 className="text-3xl">Hello World!</h1>);
