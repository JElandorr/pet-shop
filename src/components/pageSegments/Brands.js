import React from "react";

const Brands = () => {
  return (
    <>
      {/* Brands */}
      <div className="brands container-fluid no-padding">
        <div className="section-padding" />
        {/* Container */}
        <div className="container">
          <div className="section-header">
            <h3>Brands We Deal With</h3>
            <p>They will have to make the best of things its an uphill climb</p>
          </div>
          <div className="brand-logo">
            <div className="col-md-12">
              <div className="brands-images">
                <a href="#">
                  <img src="images/brands/brand-1.jpg" alt="brand-1" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="brands-images">
                <a href="#">
                  <img src="images/brands/brand-2.jpg" alt="brand-2" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="brands-images">
                <a href="#">
                  <img src="images/brands/brand-3.jpg" alt="brand-3" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="brands-images">
                <a href="#">
                  <img src="images/brands/brand-4.jpg" alt="brand-4" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="brands-images">
                <a href="#">
                  <img src="images/brands/brand-5.jpg" alt="brand-5" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="brands-images">
                <a href="#">
                  <img src="images/brands/brand-6.jpg" alt="brand-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Container / */}
        <div className="section-padding" />
      </div>
      {/* Brands / */}
    </>
  );
};

export default Brands;
