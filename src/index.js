import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Generator from "./Generator/generator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Generator />
  </React.StrictMode>
);
