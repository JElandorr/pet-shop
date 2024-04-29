import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial container-fluid no-padding">
      <div className="section-padding" />
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="section-header">
              <h3>Our Client Says</h3>
            </div>
            <div
              id="main-carousel"
              className="carousel slide carousel-fade col-offset-2"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="item active item-content">
                  <p>
                    Since we're together Fish don't fry in the kitchen and beans
                    don't burn on the grill. Took a whole lotta tryin' just to
                    get up that hill. Michael Knight a young loner on a crusade
                    to champion the cause of the innocent. The helpless. The
                    powerless in a world of criminals who operate above the law
                    so lets make it.
                  </p>
                  <img src="images/icon/quotes.png" alt="quotes" />
                  <h2>
                    Roslin Miriyam<span>Premium Client</span>
                  </h2>
                </div>
                <div className="item item-content">
                  <p>
                    Since we're together Fish don't fry in the kitchen and beans
                    don't burn on the grill. Took a whole lotta tryin' just to
                    get up that hill. Michael Knight a young loner on a crusade
                    to champion the cause of the innocent. The helpless. The
                    powerless in a world of criminals who operate above the law
                    so lets make it.
                  </p>
                  <img src="images/icon/quotes.png" alt="quotes" />
                  <h2>
                    Roslin Miriyam<span>Premium Client</span>
                  </h2>
                </div>
              </div>
              <a
                className="left carousel-control"
                href="#main-carousel"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#main-carousel"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* Main Carousel /-  */}
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="avatar-member">
              <div className="col-md-6 col-sm-3">
                <div className="avatar-images">
                  <img src="images/testimonial/avatar-1.jpg" alt="avatar-1" />
                </div>
              </div>
              <div className="col-md-6 col-sm-3">
                <div className="avatar-images">
                  <img src="images/testimonial/avatar-2.jpg" alt="avatar-2" />
                </div>
              </div>
              <div className="col-md-6 col-sm-3">
                <div className="avatar-images">
                  <img src="images/testimonial/avatar-3.jpg" alt="avatar-3" />
                </div>
              </div>
              <div className="col-md-6 col-sm-3">
                <div className="avatar-images">
                  <img src="images/testimonial/avatar-4.jpg" alt="avatar-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container /- */}
      <div className="section-padding" />
    </div>
  );
};

export default Testimonial;
