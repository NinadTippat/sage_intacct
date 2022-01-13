import React from "react";
import "./Heading.css";
import Roll from "react-reveal/Roll";

const Heading = () => {
  return (
    <div className="head">
      <div className="main">
        <Roll right>
          <h2>
            {" "}
            <strong>Thrive in today's ever-changing, digital world</strong> with
            connected solutions that simply work
          </h2>
        </Roll>
        <div className="pannel">
          <div className="pannel_left">
            <img src="small_images.png" alt="" />
          </div>
          <div className="pannel_right">
            <div className="item">
              <h3>Financials</h3>
            </div>
            <div className="item">
              <h3>Planning</h3>
            </div>
            <div className="item">
              <h3>Analytics</h3>
            </div>
            <div className="item">
              <h3>HD & Payroll</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
