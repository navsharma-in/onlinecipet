import React from "react";
import logo from "../assets/hh.webp";
import Slogo from "../assets/Service.png";
// import { gsap } from 'gsap';
const Home = () => {
  // const elementRef = React.useRef(null);
  // React.useEffect(() => {
  //   const element = elementRef.current;
  //   gsap.to(element, { duration: 2.5, ease: "power4.in", x: 2 });
  // }, []);
  return (
    <>
      <div className="main">
        <div className="main1">
          <h1>Online CIPET</h1>
          <h2>Digital Services Blog For CIPETIN's</h2>
          <button className="btn">More Details</button>
        </div>
        <div className="main2">
          <img src={logo} />
          {/* <h1>CIPET:CSTS,Bhopal</h1> */}
        </div>
      </div>
      <div className="main-two">
        <div className="main3">
          <img
            style={{ width: 500, height: 500 }}
            src={Slogo}
            alt="React Logo"
          />
        </div>
        <div className="main4">
          <h1>We Create Best Digital Services</h1>
          <p>
            Examination Schedule
            <li>Syllabus (Hindi, English) </li>
            <li>Previous Year Paper </li>
            <li>Question Bank</li>
            <li>Results (Old/New)</li>
            <li>CIPET Rules (Hindi, English)</li>
          </p>
          <button className="btn">Explore More</button>
          {/* <h1>CIPET:CSTS,Bhopal</h1> */}
        </div>
      </div>

    </>
  );
};

export default Home;
