import React from "react";

const Pricing = () => {
  return (
    <>
      {/* Pricing */}
      <div className="pricing container-fluid no-padding">
        <div className="section-padding" />
        {/* section-header */}
        <div className="section-header">
          <h3>Packages We Provide</h3>
          <p>
            In a freak mishap ranger and its pilot captain william buck rogers
            are blown
          </p>
        </div>
        {/* section-header /- */}
        {/* Container */}
        <div className="container">
          <div className="col-md-4 col-sm-6">
            <div className="price-table">
              <h5>Basic</h5>
              <div className="price-box">
                <h3>
                  <sup>$</sup>100<sub>/mo</sub>
                </h3>
                <ul>
                  <li>Pet Food</li>
                  <li>Nutrition guide</li>
                  <li>Leather Harness</li>
                  <li>Pet Toys</li>
                  <li>Shopping Coupon</li>
                </ul>
                <a className="btn btn-default" href="#" role="button">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="price-table price-color-1">
              <h5>Standard</h5>
              <div className="price-box">
                <h3>
                  <sup>$</sup>200<sub>/mo</sub>
                </h3>
                <ul>
                  <li>Pet Food</li>
                  <li>Health Checkup</li>
                  <li>Pet Out Fit</li>
                  <li>Pet Toys</li>
                  <li>Shopping Discount</li>
                </ul>
                <a className="btn btn-default" href="#" role="button">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="price-table price-color-2">
              <h5>Premium</h5>
              <div className="price-box">
                <h3>
                  <sup>$</sup>300<sub>/mo</sub>
                </h3>
                <ul>
                  <li>Pet Food</li>
                  <li>Health Checkup</li>
                  <li>Pet Grooming</li>
                  <li>Pet Toys</li>
                  <li>Free Gifts</li>
                </ul>
                <a className="btn btn-default" href="#" role="button">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Container /- */}
        <div className="section-padding" />
      </div>
      {/* Pricing /- */}
    </>
  );
};

export default Pricing;
