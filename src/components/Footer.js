import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="block">
        <p>
          <strong>Also of Interest:</strong> <span>What is an ERP system?</span> <span>Inventory Management
          System</span> <span> Purchase Order Software</span>
        </p>
      </div>
      <div className="copy-right">
        <div className="row">
          <p>
            © Copyright 2022 Sage Intacct, Inc. | Privacy Policy | Cookie Notice
            | Responsible Disclosure | Customer Terms | Site Map
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
