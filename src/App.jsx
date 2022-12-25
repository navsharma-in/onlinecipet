import React from "react";
import "../src/App.css"
import logo from "../src/assets/hh.webp"
import Slogo from "../src/assets/Service.png"
const App = () => {
  return (
    <>
    <div className="main">
    <div className="main1">
      <h1>CIPET:CSTS,Bhopal</h1>
      <h2>Blog For CIPETIN's</h2>
      <p>Online Digital Service for All CIPET Student’s</p>
      <button className="btn">More Details</button>
     </div>
     <div className="main2">
      <img src={logo} />
      {/* <h1>CIPET:CSTS,Bhopal</h1> */}
     </div>
     </div>
     <div className="main-two">
    <div className="main3">
      <img style={{ width: 500, height: 500 }} src={Slogo} alt="React Logo" />
     </div>
     <div className="main4">
      <h1>Services</h1>
      <h2>Blog For CIPETIN's</h2>
      <p>Online Digital Service for All CIPET Student’s</p>
      <button className="btn">More Details</button>
      {/* <h1>CIPET:CSTS,Bhopal</h1> */}
     </div>
     </div>
    </>
  );
};

export default App;
