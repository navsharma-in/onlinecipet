import React from "react";
import Alogo from "../assets/About.png";

import "../Stylesheet/About.css";
// import "../src/App.css";

const About = () => {
  return (
    <>
      <div className="main">
        <div className="aboutmain1">
          <button className="btn">Overview (अवलोकन)</button>
          <button className="btn">VISION & MISSION (विजन और मिशन)</button>
          <button className="btn">OBJECTIVES (उद्देश्य)</button>
          <button className="btn">ORGANISATION CHART (संगठन तालिका)</button>
          <button className="btn">DIRECTOR GENERAL (महानिदेशक)</button>
          <button className="btn">OUR TEAM (हमारी टीम)</button>
          <button className="btn">WHO'S WHO (कौन कौन है)</button>
        </div>

        <div className="main2">
          <img
            style={{ width: 500, height: 500 }}
            src={Alogo}
            alt="React Logo"
          />
        </div>
      </div>
    </>
  );
};

export default About;
