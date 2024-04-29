import React from "react";

const CallToAction = () => {
  return (
    <div className="callout container-fluid no-padding">
      {/* Container */}
      <div className="container">
        <div className="callout-content row">
          <div className="col-md-10 col-sm-9">
            <h3>Have a visit to Our Store for a Movement</h3>
            <h4>You Will Really Gets Satisfied with Our Largest Collections</h4>
          </div>
          <div className="col-md-2 col-sm-3">
            <a href="#" className="btn btn-default" title="Purchase">
              Go To Store
            </a>
          </div>
        </div>
      </div>
      {/* Container /- */}
    </div>
  );
};

export default CallToAction;
