import React from "react";

const Newsletter = () => {
  return (
    <div
      id="newsletter-section"
      className="newsletter-section container-fluid no-padding"
    >
      {/* Container */}
      <div className="container">
        <div className="row">
          <form>
            <h3>Subscribe Our Newsletter</h3>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            {/* /input-group */}
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your E-mail"
              />
            </div>
            {/* /input-group */}
            <input type="submit" defaultValue="Go" />
          </form>
        </div>
      </div>
      {/* Container */}
    </div>
  );
};

export default Newsletter;
