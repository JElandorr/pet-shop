import React from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="header-main">
      {/* Top Header */}
      <div className="top-header container-fluid no-padding">
        <div className="col-md-4 col-sm-4 col-xs-4 no-padding color-red" />
        <div className="col-md-4 col-sm-4 col-xs-4 no-padding color-green" />
        <div className="col-md-4 col-sm-4 col-xs-4 no-padding color-yellow" />
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-6">
              <p>
                Leave A Message:{" "}
                <Link to="mailto:info@petcare.com">info@petcare.com</Link>
              </p>
            </div>
            <div className="social col-md-4 col-sm-4 col-xs-6 pull-right">
              <ul className="no-bottom-margin">
                <li>
                  <Link to="#">
                    <img src="images/icon/tw-ic.png" alt="Twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="images/icon/fb-ic.png" alt="Facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="images/icon/g+-ic.png" alt="Google pulse" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="images/icon/dribbble-ic.png" alt="dribbler" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="images/icon/in-ic.png" alt="In" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* container /- */}
      </div>
      {/* Top Header /- */}
      {/* Logo Block */}
      <div className="middle-header container-fluid no-padding">
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-3 logo-block pull-left">
              <Link to="#">
                <img src="images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="col-md-9 pull-right">
              <div className="location">
                <img src="images/icon/location-ic.png" alt="Location" />
                <p>
                  <span>
                    {language === "en" ? "Our Location" : ""}
                    {language === "bg" ? "Нашето местоположение" : ""}
                  </span>
                  50- Design Street, Texas
                </p>
              </div>
              <div className="time-scheduled">
                <img src="images/icon/time-ic.png" alt="time" />
                <p>
                  <span>Mon - Sat</span> 8 am - 10 pm
                </p>
              </div>
              <div className="phone">
                <img src="images/icon/phone-ic.png" alt="phone" />
                <p>
                  <span>Call Us</span> +1 (0) 234 56 789
                </p>
              </div>
              <div className="cart">
                <Link to="#">
                  <img src="images/icon/cart-ic.png" alt="png" />
                  <span>10</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Container /- */}
      </div>
      {/* Logo Block /- */}
      <nav className="navbar ow-navigation">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="navbar-brand logo-block">
                <Link to="#">
                  <img src="images/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li className="dropdown">
                  <Link
                    to="/shop"
                    title="product list"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </Link>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/shop">Pets List</Link>
                    </li>
                    <li>
                      <Link to="/product-details">Product Details</Link>
                    </li>
                    <li>
                      <Link to="checkout.html">Place Order</Link>
                    </li>
                    <li>
                      <Link to="/shop-cart">My Cart</Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="dropdown">
                  <Link
                    to="#"
                    title="Pages"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="error.html">Error</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="dropdown">
                  <Link
                    to="/blog"
                    title="Blog"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </Link>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact-us">Contact US</Link>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    title="Blog"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    User
                  </Link>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link to="#">Get An Appointment</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
