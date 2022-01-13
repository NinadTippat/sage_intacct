import React from "react";
import "./Group.css";
import Roll from "react-reveal/Roll";

const Group = () => {
  return (
    <div className="group">
      <div className="text">
        <Roll right>
          <h2>
            Solutions for your<strong> industry's specific needs</strong>
          </h2>
        </Roll>
        <div className="industry_box">
          <div className="industry_menus">
            <img src="list.png" alt="" />
          </div>
          <div className="industry_details">
            <div className="type">For Any Industry</div>
            <div className="desc">
              The smart cloud accounting solution to unleash the potential of
              your business. Learn why industry leaders choose Sage
              Intacct—rated #1 in customer satisfaction by G2.
            </div>
            <a
              className="a"
              href="https://www.sageintacct.com/financial-management-industries"
              title="For Any Industry"
            >
              <img
                src="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-any-industry.png?itok=o2aG6oOu"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
