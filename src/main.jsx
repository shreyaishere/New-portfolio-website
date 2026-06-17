import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { HelmetProvider } from "react-helmet-async";

import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/utilities.css";

// ReactDOM.createRoot(
// document.getElementById("root")
// ).render(
// <React.StrictMode>
// <App />
// </React.StrictMode>
// );

import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </HelmetProvider>
);
