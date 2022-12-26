import React from "react";
import "../src/App.css";
// import { Routes, Route, Link } from "react-router-dom";

import BotNav from "./components/BotNav/BotNav";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <BotNav />
    </>
  );
};

export default App;
