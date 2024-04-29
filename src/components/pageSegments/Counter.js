import React from "react";

const Counter = () => {
  return (
    <div className="counter container-fluid no-padding">
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-box">
              <h3>
                <img src="images/counter/counter-1.png" alt="counter-1" />
                <span
                  className="count"
                  id="statistics_count-1"
                  data-statistics_percent={3540}
                >
                  {" "}
                  &nbsp;
                </span>
              </h3>
              <p>srvice we done</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-box">
              <h3>
                <img src="images/counter/counter-2.png" alt="counter-2" />
                <span
                  className="count"
                  id="statistics_count-2"
                  data-statistics_percent={1234}
                >
                  &nbsp;
                </span>
              </h3>
              <p>Our Happy Clients</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-box">
              <h3>
                <img src="images/counter/counter-3.png" alt="counter-3" />
                <span
                  className="count"
                  id="statistics_count-3"
                  data-statistics_percent={2200}
                >
                  &nbsp;
                </span>
              </h3>
              <p>Talented Employees</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-box">
              <h3>
                <img src="images/counter/counter-4.png" alt="counter-4" />
                <span
                  className="count"
                  id="statistics_count-4"
                  data-statistics_percent={1234}
                >
                  &nbsp;
                </span>
              </h3>
              <p>Branches We Have</p>
            </div>
          </div>
        </div>
      </div>
      {/* Container /- */}
    </div>
  );
};

export default Counter;
