import React from "react";
import ReactDOM from "react-dom/client";
import App from "./To-Do-App";
import "./index.css";
import ExpenseTracker from "./ExpenseTracker";
import Balance from "./Components/Balance";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ExpenseTracker/>
  </React.StrictMode>
);