import React from "react";
import "./Container.css";
import Fade from 'react-reveal/Fade';

const Container = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="field">
        <Fade bottom cascade>
          <div class="content">
            <div className="heading"> See Sage Intacct in action</div>
            <div className="para">
              <p>
                Learn what Sage Intacct can offer you with a live demo followed
                by Q &amp ;A.
              </p>
            </div>
            <a className="icon" href="">
              Sign up now{" "}
            </a>
          </div>
          </Fade>
        </div>
        <div className="field">
        <Fade bottom cascade>
          <div class="content">
            <div className="heading">#1 for the 5th year in a row</div>
            <div className="para">
              <p>
                Once again, Sage Intacct received the highest product score in
                core financials for the lower midsize enterprises use case from
                Gartner1.
              </p>
            </div>
            <a className="icon" href="">
              Read report
            </a>
          </div>
        </Fade>
        </div>
        <div className="field">
        <Fade bottom cascade>
        <div class="content">
            <div className="heading">Outgrowing QuickBooks?</div>
            <div className="para">
              <p>
              Find out why thriving organizations say goodbye to QuickBooks and partner with Sage Intacct to power their growth.
              </p>
            </div>
            <a className="icon" href="">
              Learn why
            </a>
          </div>
        </Fade>
        </div>
      </div>
    </div>
  );
};

export default Container;
