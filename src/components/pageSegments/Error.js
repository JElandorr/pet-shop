import React from "react";

const Error = () => {
  return (
    <>
      {/* Error Section */}
      <div className="container-fluid no-padding error-section">
        <div className="section-padding" />
        {/* Container */}
        <div className="container">
          <h2>
            Sorry,<span>The Page You Requested Was Not Found</span>
          </h2>
          <img src="images/icon/error.jpg" alt="error-img" />
          <div className="error-box">
            <a href="#" title="Go To Home">
              go to homepage
            </a>
            <a href="#" title="Go To Previous Page">
              go to previous page
            </a>
          </div>
        </div>
        <div className="section-padding" />
      </div>
      {/* Error Section /- */}
    </>
  );
};

export default Error;
