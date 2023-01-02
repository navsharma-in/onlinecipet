import React from "react";
import "../src/App.css";

import About from "../src/Pages/About";
import Service from "../src/Pages/Service";
import Home from "../src/Pages/Home";
import Blog from "../src/Pages/Blog";
import ApplyOnline from "../src/Pages/ApplyOnline";
import Download from "../src/Pages/Download";
import FeeStructure from "../src/Pages/FeeStructure";
import Contact from "../src/Pages/Contact";

import Navbar from './components/Navbar/Navbar';
import Botnav from './components/BotNav/BotNav';

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ApplyOnline" element={<ApplyOnline />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/FeeStructure" element={<FeeStructure />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Botnav />
    </>
  );
};

export default App;
