import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import BotNav from "./components/BotNav/BotNav";
// import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar /> */}
    <App />
    {/* <BotNav /> */}
    </BrowserRouter>
  </React.StrictMode>
);
