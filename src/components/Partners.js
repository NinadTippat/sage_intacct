import React from "react";
import "./Partners.css";
import Roll from "react-reveal/Roll";
import Fade from 'react-reveal/Fade';


const Partners = () => {
  return (
    <div className="partners">
      <div className="wreper">
        <Roll right >
          <h2>Your partner for the long-term</h2>
        </Roll>
        <div className="field-body">
          <div>
            We're obsessed with ensuring your success. From our Customer for
            Life™ program to our proven, connected products that you won't
            outgrow; we'll be with you every step of the way.
          </div>
        </div>
        <div className="collection">
          <div className="collection_items">
          <Fade bottom>
            <div className="itemR">
              <span>
                <img
                  src="https://www.sageintacct.com/sites/default/files/sage-intacct-customer-for-life.png"
                  alt=""
                />
              </span>
              <span className="margin-top">
                You get a partner that's invested in your success
              </span>
            </div>
            </Fade>
          <Fade bottom>
            <div className="itemR">
              <span>
                <img
                  src="https://www.sageintacct.com/sites/default/files/aicpa-preferred-financial-management-solution.png"
                  alt=""
                />
              </span>
              <span className="margin-top">
                You get the best, proven technology for your organization
              </span>
            </div>
            </Fade>
          <Fade bottom>
            <div className="itemR">
              <span>
                <img
                  src="https://www.sageintacct.com/sites/default/files/grow-scale-with-sage-intacct.png"
                  alt=""
                />
              </span>
              <span className="margin-top">
                You won't outgrow us; we'll scale with you every step of the way
              </span>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
