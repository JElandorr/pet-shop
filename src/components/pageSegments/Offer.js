import React from "react";

const Offer = () => {
  return (
    <div className="offer container-fluid no-padding">
      <div className="offer-shape">
        <svg width="100%" height="100%">
          <clipPath id="clipPolygon1" clipPathUnits="objectBoundingBox">
            <polygon points="0 0, 32 100, 100 100, 100 0" />
          </clipPath>
        </svg>
      </div>
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <div className="smart-price">
              <h3>Something Special For Your Pets</h3>
              <h2>In Smart Price</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 pull-right offer-box">
            <h2>30%</h2>
            <h3>
              Upto 500 Products<span>On Season Offer Sale</span>
            </h3>
          </div>
        </div>
      </div>
      {/* Container /- */}
    </div>
  );
};

export default Offer;
