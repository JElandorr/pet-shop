import React from "react";

const Header = () => {
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
                <a href="mailto:info@petcare.com">info@petcare.com</a>
              </p>
            </div>
            <div className="social col-md-4 col-sm-4 col-xs-6 pull-right">
              <ul className="no-bottom-margin">
                <li>
                  <a href="#">
                    <img src="images/icon/tw-ic.png" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon/fb-ic.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon/g+-ic.png" alt="Google pulse" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon/dribbble-ic.png" alt="dribbler" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon/in-ic.png" alt="In" />
                  </a>
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
              <a href="#">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="col-md-9 pull-right">
              <div className="location">
                <img src="images/icon/location-ic.png" alt="Location" />
                <p>
                  <span>Our Location</span> 50- Design Street, Texas
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
                <a href="#">
                  <img src="images/icon/cart-ic.png" alt="png" />
                  <span>10</span>
                </a>
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
                <a href="#">
                  <img src="images/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li className="dropdown">
                  <a
                    href="shop.html"
                    title="product list"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <a href="shop-pets.html">Pets List</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="checkout.html">Place Order</a>
                    </li>
                    <li>
                      <a href="shop-cart.html">My Cart</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    title="Pages"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <a href="error.html">Error</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="blog.html"
                    title="Blog"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <i className="ddl-switch fa fa-angle-down" />
                  <ul className="dropdown-menu">
                    <li>
                      <a href="single-blog.html">Single Blog</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact-us.html">Contact US</a>
                </li>
              </ul>
            </div>
            <a href="#">Get An Appointment</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
