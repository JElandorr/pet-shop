import React from "react";
import { Link } from "react-router-dom";

const CallOut = () => {
  return (
    <>
      {/* Callout */}
      <div className="callout container-fluid no-padding">
        {/* Container */}
        <div className="container">
          <div className="callout-content row">
            <div className="col-md-10 col-sm-9">
              <h3>Have a visit to Our Store for a Movement</h3>
              <h4>
                You Will Really Gets Satisfied with Our Largest Collections
              </h4>
            </div>
            <div className="col-md-2 col-sm-3">
              <Link to="#" className="btn btn-default" title="Purchase">
                Go To Store
              </Link>
            </div>
          </div>
        </div>
        {/* Container /- */}
      </div>
      {/* Callout /- */}
    </>
  );
};

export default CallOut;
