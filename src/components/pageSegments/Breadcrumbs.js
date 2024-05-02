import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-fluid no-padding page-banner">
        {/* Container */}
        <div className="container">
          {/* Breadcrumbs Heading */}
          <div className="banner-heading">
            <h3>{title}</h3>
            <ol className="breadcrumb">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li className="active">{title}</li>
            </ol>
          </div>
          {/* Breadcrumbs Heading /- */}
        </div>
        {/* Container /- */}
      </div>
      {/* Breadcrumbs /- */}
    </>
  );
};

export default Breadcrumbs;
