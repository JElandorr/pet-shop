import React from "react";

const Home = () => {
  return (
    <>
      {/* Main Container */}
      <div className="main-container">
        {/* Header */}
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
        {/* Header /- */}
        {/* Photo Slider */}
        <div
          id="photo-slider"
          className="photo-slider container-fluid no-padding"
        >
          {/* Main Carousel */}
          <div
            id="main-slider"
            className="carousel slide carousel-fade col-offset-2"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="images/slider-image/slider-1.jpg" alt="slider-1" />
                <div className="slider-content">
                  <div className="container">
                    <div className="slide-content slide-content-1">
                      <h2>Dog cat pat care</h2>
                      <h3>
                        We Take Good Care For<span>Your Lovely Pet</span>
                      </h3>
                      <p>
                        Those were the days. And we know Flipper lives in a
                        world full of wonder{" "}
                        <span>
                          flying there-under under the sea. The Love Boat soon
                          will be making
                        </span>
                      </p>
                      <a href="#" className="btn btn-default" title="Purchase">
                        Purchase
                      </a>
                      <a
                        href="#"
                        className="btn btn-default bg"
                        title="Learn More"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="images/slider-image/slider-2.jpg" alt="slider-2" />
                <div className="slider-content">
                  <div className="container">
                    <div className="slide-content slide-content-2">
                      <h3>We Take Good Care For Your Lovely Pets</h3>
                      <h2>
                        Dog cat <span>pat care</span>
                      </h2>
                      <p>
                        Those were the days. And we know Flipper lives in a
                        world full of wonder{" "}
                        <span>
                          flying there-under under the sea. The Love Boat soon
                          will be making
                        </span>
                      </p>
                      <a href="#" className="btn btn-default" title="Purchase">
                        Purchase
                      </a>
                      <a
                        href="#"
                        className="btn btn-default bg"
                        title="Learn More"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="images/slider-image/slider-3.jpg" alt="slider-3" />
                <div className="slider-content">
                  <div className="container">
                    <div className="slide-content slide-content-3">
                      <h2>
                        Dog cat <span>pat care</span>
                      </h2>
                      <p>
                        Those were the days. And we know Flipper lives in a
                        world full of wonder{" "}
                        <span>
                          flying there-under under the sea. The Love Boat soon
                          will be making another
                        </span>{" "}
                      </p>
                      <a href="#" className="btn btn-default" title="Purchase">
                        Purchase
                      </a>
                      <a
                        href="#"
                        className="btn btn-default bg"
                        title="Learn More"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Carousel /-  */}
        </div>
        {/* Photo Slider /- */}
        {/* Intro */}
        <div id="intro" className="intro container-fluid no-padding">
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>What We Do</h3>
              <p>
                They will have to make the best of things its an uphill climb
              </p>
            </div>
            {/* Section Header /- */}
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="pet-images bgcolor-default">
                  <img src="images/intro/intro-1.jpg" alt="intro-1" />
                  <div className="content-box">
                    <h3>
                      Pet wellness <span>We Take Care On Your Pet</span>
                      <i>
                        <img
                          src="images/icon/intro-icon-1.png"
                          alt="Intro Icon"
                        />
                      </i>
                    </h3>
                    <p>
                      {" "}
                      To a deluxe apartment in the sky. And we'll do it our way
                      yes our way make all our dreams come true for me and you
                      No phone no lights no motor
                    </p>
                    <a href="#" title="Read More">
                      Read More <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="pet-images bgcolor-green">
                  <img src="images/intro/intro-2.jpg" alt="intro-2" />
                  <div className="content-box">
                    <h3>
                      Pet wellness <span>We Take Care On Your Pet</span>
                      <i>
                        <img
                          src="images/icon/intro-icon-2.png"
                          alt="Intro Icon"
                        />
                      </i>
                    </h3>
                    <p>
                      {" "}
                      To a deluxe apartment in the sky. And we'll do it our way
                      yes our way make all our dreams come true for me and you
                      No phone no lights no motor
                    </p>
                    <a href="#" title="Read More">
                      Read More <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="pet-images bgcolor-yellow">
                  <img src="images/intro/intro-3.jpg" alt="intro-3" />
                  <div className="content-box">
                    <h3>
                      Pet wellness <span>We Take Care On Your Pet</span>
                      <i>
                        <img
                          src="images/icon/intro-icon-3.png"
                          alt="Intro Icon"
                        />
                      </i>
                    </h3>
                    <p>
                      {" "}
                      To a deluxe apartment in the sky. And we'll do it our way
                      yes our way make all our dreams come true for me and you
                      No phone no lights no motor
                    </p>
                    <a href="#" title="Read More">
                      Read More <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
          <div className="section-padding" />
        </div>
        {/* Intro /- */}
        {/* Appointment */}
        <div
          id="appointment"
          className="appointment container-fluid no-padding"
        >
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            <div className="row">
              <form className="appointment-form">
                {/* Section Header */}
                <div className="section-header">
                  <h3>Get An Appointment</h3>
                  <p>
                    They will have to make the best of things its an uphill
                    climb
                  </p>
                </div>
                {/* Section Header /- */}
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required=""
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3">
                  <select>
                    <option>Pet Category</option>
                    <option>Pet Category</option>
                    <option>Pet Category</option>
                    <option>Pet Category</option>
                  </select>
                </div>
                <div className="form-group col-md-3 col-sm-3">
                  <select>
                    <option>Service Type</option>
                    <option>Service Type</option>
                    <option>Service Type</option>
                    <option>Service Type</option>
                  </select>
                </div>
                <div className="form-group col-md-3 col-sm-3">
                  <select>
                    <option>Service Type</option>
                    <option>Service Type</option>
                    <option>Service Type</option>
                    <option>Service Type</option>
                  </select>
                </div>
                <div className="form-group col-md-3 col-sm-3">
                  <select>
                    <option>Service Type</option>
                    <option>Service Type</option>
                    <option>Service Type</option>
                    <option>Service Type</option>
                  </select>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <textarea
                    className="form-control"
                    rows={7}
                    cols={20}
                    placeholder="Anything we should know about your pet?"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-default">Get An Appoinment</button>
              </form>
            </div>
          </div>
          {/* Container /- */}
          <div className="section-padding" />
        </div>
        {/* Appointment /- */}
        {/* Services */}
        <div id="services" className="services container-fluid no-padding">
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Services we Offer</h3>
              <p>
                In a freak mishap ranger and its pilot captain william buck
                rogers are blown
              </p>
            </div>
            {/* Section Header /- */}
            <div className="service-tab col-md-9 no-padding">
              <div className="col-md-4 col-sm-5 no-padding">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="active" role="presentation">
                    <a
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-one"
                      href="#tab-one"
                      aria-expanded="true"
                    >
                      <i>
                        <img src="images/icon/care.png" alt="care" />
                      </i>
                      Veterinary care
                    </a>
                  </li>
                  <li className="" role="presentation">
                    <a
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-two"
                      href="#tab-two"
                      aria-expanded="false"
                    >
                      <i>
                        <img src="images/icon/camp.png" alt="care" />
                      </i>
                      Pets Day Camp
                    </a>
                  </li>
                  <li className="" role="presentation">
                    <a
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-three"
                      href="#tab-three"
                      aria-expanded="false"
                    >
                      <i>
                        <img src="images/icon/nutrition.png" alt="nutrition" />
                      </i>
                      Pet Nutrition
                    </a>
                  </li>
                  <li className="" role="presentation">
                    <a
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-four"
                      href="#tab-four"
                      aria-expanded="false"
                    >
                      <i>
                        <img src="images/icon/insurance.png" alt="insurance" />
                      </i>
                      Pet Insurance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content col-md-8 col-sm-7 no-padding">
                <div id="tab-one" className="tab-pane active" role="tabpanel">
                  <div className="tab-box">
                    <p>
                      1 Trajectory into an orbit which freezes his life support
                      systems and returns Buck Rogers to Earth five-hundred
                      years later. We're gonna do it. On your mark get set and
                      go now. Got a dream and we just know now we're gonna make
                      our dream come true. Space. The final frontier. These are
                      the voyages of the Starship Enterprise.
                    </p>
                    <p>
                      Now were up in the big leagues getting' our turn at bat?
                      No phone no lights no motor car not a single luxury. Like
                      Robinson Crusoe it's primitive as can be! Boy the way Glen
                      Miller played. Songs that made the hit parade guys like
                      us.
                    </p>
                  </div>
                </div>
                <div id="tab-two" className="tab-pane" role="tabpanel">
                  <div className="tab-box">
                    <p>
                      2 Trajectory into an orbit which freezes his life support
                      systems and returns Buck Rogers to Earth five-hundred
                      years later. We're gonna do it. On your mark get set and
                      go now. Got a dream and we just know now we're gonna make
                      our dream come true. Space. The final frontier. These are
                      the voyages of the Starship Enterprise.
                    </p>
                    <p>
                      Now were up in the big leagues getting' our turn at bat?
                      No phone no lights no motor car not a single luxury. Like
                      Robinson Crusoe it's primitive as can be! Boy the way Glen
                      Miller played. Songs that made the hit parade guys like
                      us.
                    </p>
                  </div>
                </div>
                <div id="tab-three" className="tab-pane" role="tabpanel">
                  <div className="tab-box">
                    <p>
                      3 Trajectory into an orbit which freezes his life support
                      systems and returns Buck Rogers to Earth five-hundred
                      years later. We're gonna do it. On your mark get set and
                      go now. Got a dream and we just know now we're gonna make
                      our dream come true. Space. The final frontier. These are
                      the voyages of the Starship Enterprise.
                    </p>
                    <p>
                      Now were up in the big leagues getting' our turn at bat?
                      No phone no lights no motor car not a single luxury. Like
                      Robinson Crusoe it's primitive as can be! Boy the way Glen
                      Miller played. Songs that made the hit parade guys like
                      us.
                    </p>
                  </div>
                </div>
                <div id="tab-four" className="tab-pane" role="tabpanel">
                  <div className="tab-box">
                    <p>
                      4 Trajectory into an orbit which freezes his life support
                      systems and returns Buck Rogers to Earth five-hundred
                      years later. We're gonna do it. On your mark get set and
                      go now. Got a dream and we just know now we're gonna make
                      our dream come true. Space. The final frontier. These are
                      the voyages of the Starship Enterprise.
                    </p>
                    <p>
                      Now were up in the big leagues getting' our turn at bat?
                      No phone no lights no motor car not a single luxury. Like
                      Robinson Crusoe it's primitive as can be! Boy the way Glen
                      Miller played. Songs that made the hit parade guys like
                      us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
          <div className="right-image">
            <img src="images/services/services.jpg" alt="Service" />
          </div>
          <div className="section-padding" />
        </div>
        {/* Services /- */}
        {/* Callout */}
        <div className="callout container-fluid no-padding">
          {/* Container */}
          <div className="container">
            <div className="callout-content row">
              <div className="col-md-10 col-sm-9">
                <h3>Have a visit to Our Store for a Movement</h3>
                <h4>
                  You Will Really Gets Satisfied with Our Largest Collections
                </h4>
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
        {/* Callout /- */}
        {/* Why Choose Us */}
        <div className="why-choose-us container-fluid no-padding">
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Why Choose Us</h3>
              <p>
                They will have to make the best of things its an uphill climb
              </p>
            </div>
            {/* Section Header /- */}
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-content">
                  <div className="image-box">
                    <img
                      src="images/why-choose/why-choose-1.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="why-choose-hover">
                    <i>
                      <img src="images/icon/medal.png" alt="medal" />
                    </i>
                    <h3>Best In The Industry</h3>
                    <p>
                      Rogers are blown out of their into an orbit which freezes
                      his life which freezes his life
                    </p>
                  </div>
                  <a href="#">Read more</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-content">
                  <div className="image-box">
                    <img
                      src="images/why-choose/why-choose-1.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="why-choose-hover">
                    <i>
                      <img
                        src="images/icon/customer-support.png"
                        alt="Customer Support"
                      />
                    </i>
                    <h3>Customer Support</h3>
                    <p>
                      Come and listen to a story about Jed a poor mountaineer
                      barely kept his family fed buck rogers to
                    </p>
                  </div>
                  <a href="#">Read more</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-content">
                  <div className="image-box">
                    <img
                      src="images/why-choose/why-choose-1.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="why-choose-hover">
                    <i>
                      <img src="images/icon/home.png" alt="home" />
                    </i>
                    <h3>Special Care On Pets</h3>
                    <p>
                      The mate was a mighty sailin' man the two skipper brave
                      and sure. Five{" "}
                    </p>
                  </div>
                  <a href="#">Read more</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-content">
                  <div className="image-box">
                    <img
                      src="images/why-choose/why-choose-1.jpg"
                      alt="why choose"
                    />
                  </div>
                  <div className="why-choose-hover">
                    <i>
                      <img src="images/icon/dogfeek.png" alt="dogfeek" />
                    </i>
                    <h3>Best Quality Products</h3>
                    <p>
                      Mister we could use a man like Herbert Hoover again.
                      They're creepy and they're kooky mysterious and spooky.
                      They're all togethe
                    </p>
                  </div>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
          <div className="section-padding" />
        </div>
        {/* Why Choose Us /- */}
        {/* Testimonial */}
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
                        Since we're together Fish don't fry in the kitchen and
                        beans don't burn on the grill. Took a whole lotta tryin'
                        just to get up that hill. Michael Knight a young loner
                        on a crusade to champion the cause of the innocent. The
                        helpless. The powerless in a world of criminals who
                        operate above the law so lets make it.
                      </p>
                      <img src="images/icon/quotes.png" alt="quotes" />
                      <h2>
                        Roslin Miriyam<span>Premium Client</span>
                      </h2>
                    </div>
                    <div className="item item-content">
                      <p>
                        Since we're together Fish don't fry in the kitchen and
                        beans don't burn on the grill. Took a whole lotta tryin'
                        just to get up that hill. Michael Knight a young loner
                        on a crusade to champion the cause of the innocent. The
                        helpless. The powerless in a world of criminals who
                        operate above the law so lets make it.
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
                      <img
                        src="images/testimonial/avatar-1.jpg"
                        alt="avatar-1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-3">
                    <div className="avatar-images">
                      <img
                        src="images/testimonial/avatar-2.jpg"
                        alt="avatar-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-3">
                    <div className="avatar-images">
                      <img
                        src="images/testimonial/avatar-3.jpg"
                        alt="avatar-3"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-3">
                    <div className="avatar-images">
                      <img
                        src="images/testimonial/avatar-4.jpg"
                        alt="avatar-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
          <div className="section-padding" />
        </div>
        {/* Testimonial /- */}
        {/* Team */}
        <div className="team container-fluid no-padding">
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            <div className="section-header">
              <h3>Our Team On Service</h3>
              <p>
                They will have to make the best of things its an uphill climb
              </p>
            </div>
            <div className="row">
              <div className="team-thumb">
                <div className="col-md-12">
                  <div className="team-member">
                    <div className="team-image-box">
                      <img
                        src="images/team/team-member-1.jpg"
                        alt="Team Member"
                      />
                      <div className="team-content">
                        <h3>
                          Dr. John Francis<span>Veterinary Chief</span>
                        </h3>
                      </div>
                    </div>
                    <div className="team-social-icon">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="team-member">
                    <div className="team-image-box">
                      <img
                        src="images/team/team-member-2.jpg"
                        alt="Team Member"
                      />
                      <div className="team-content">
                        <h3>
                          Dr. John Francis<span>Veterinary Chief</span>
                        </h3>
                      </div>
                    </div>
                    <div className="team-social-icon">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="team-member">
                    <div className="team-image-box">
                      <img
                        src="images/team/team-member-3.jpg"
                        alt="Team Member"
                      />
                      <div className="team-content">
                        <h3>
                          Dr. John Francis<span>Veterinary Chief</span>
                        </h3>
                      </div>
                    </div>
                    <div className="team-social-icon">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="team-member">
                    <div className="team-image-box">
                      <img
                        src="images/team/team-member-4.jpg"
                        alt="Team Member"
                      />
                      <div className="team-content">
                        <h3>
                          Dr. John Francis<span>Veterinary Chief</span>
                        </h3>
                      </div>
                    </div>
                    <div className="team-social-icon">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
          <div className="section-padding" />
        </div>
        {/* Team /- */}
        {/* Counter */}
        <div className="counter container-fluid no-padding">
          {/* Container */}
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="counter-box">
                  <h3>
                    <img src="images/counter/counter-1.png" alt="counter-1" />
                    <span
                      className="count"
                      id="statistics_count-1"
                      data-statistics_percent={3540}
                    >
                      {" "}
                      &nbsp;
                    </span>
                  </h3>
                  <p>srvice we done</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="counter-box">
                  <h3>
                    <img src="images/counter/counter-2.png" alt="counter-2" />
                    <span
                      className="count"
                      id="statistics_count-2"
                      data-statistics_percent={1234}
                    >
                      &nbsp;
                    </span>
                  </h3>
                  <p>Our Happy Clients</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="counter-box">
                  <h3>
                    <img src="images/counter/counter-3.png" alt="counter-3" />
                    <span
                      className="count"
                      id="statistics_count-3"
                      data-statistics_percent={2200}
                    >
                      &nbsp;
                    </span>
                  </h3>
                  <p>Talented Employees</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="counter-box">
                  <h3>
                    <img src="images/counter/counter-4.png" alt="counter-4" />
                    <span
                      className="count"
                      id="statistics_count-4"
                      data-statistics_percent={1234}
                    >
                      &nbsp;
                    </span>
                  </h3>
                  <p>Branches We Have</p>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
        </div>
        {/* Counter /- */}
        {/* Shop */}
        <div className="shop container-fluid no-padding">
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            <div className="row">
              <div className="section-header">
                <h3>Updates From Our Shop</h3>
                <p>
                  In a freak mishap ranger and its pilot captain william buck
                  rogers are blown
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="product-box">
                  <div className="product-image">
                    <img src="images/shop/shop-1.jpg" alt="shop" />
                    <a className="cart" href="#">
                      <i>
                        <img
                          src="images/icon/addtocart.png"
                          alt="Add To Cart"
                        />
                      </i>
                      Add To Cart
                    </a>
                    <div className="wishlist">
                      <a href="#">
                        <img src="images/icon/like-icon.png" alt="like icon" />
                      </a>
                      <a href="#">
                        <img src="images/icon/wishlist.png" alt="wishlist" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h2>Pet Harness</h2>
                    <h3>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <span>$120.00</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="product-box">
                  <div className="product-image">
                    <img src="images/shop/shop-2.jpg" alt="shop" />
                    <a className="cart" href="#">
                      <i>
                        <img
                          src="images/icon/addtocart.png"
                          alt="Add To Cart"
                        />
                      </i>
                      Add To Cart
                    </a>
                    <div className="wishlist">
                      <a href="#">
                        <img src="images/icon/like-icon.png" alt="like icon" />
                      </a>
                      <a href="#">
                        <img src="images/icon/wishlist.png" alt="wishlist" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h2>Pet Toys</h2>
                    <h3>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <span>$150.00</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="product-box">
                  <div className="product-image">
                    <img src="images/shop/shop-3.jpg" alt="Shop" />
                    <a className="cart" href="#">
                      <i>
                        <img
                          src="images/icon/addtocart.png"
                          alt="Add To Cart"
                        />
                      </i>
                      Add To Cart
                    </a>
                    <div className="wishlist">
                      <a href="#">
                        <img src="images/icon/like-icon.png" alt="like icon" />
                      </a>
                      <a href="#">
                        <img src="images/icon/wishlist.png" alt="wishlist" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h2>Pet Out Fits</h2>
                    <h3>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <span>$280.00</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="product-box">
                  <div className="product-image">
                    <img src="images/shop/shop-4.jpg" alt="Shop" />
                    <a className="cart" href="#">
                      <i>
                        <img
                          src="images/icon/addtocart.png"
                          alt="Add To Cart"
                        />
                      </i>
                      Add To Cart
                    </a>
                    <div className="wishlist">
                      <a href="#">
                        <img src="images/icon/like-icon.png" alt="like icon" />
                      </a>
                      <a href="#">
                        <img src="images/icon/wishlist.png" alt="wishlist" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h2>Pet Food</h2>
                    <h3>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <span>$360.00</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container / */}
          <div className="section-padding" />
        </div>
        {/* Shop / */}
        {/* Offer */}
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
        {/* Offer / */}
        {/* Blog */}
        <div
          id="blog-section"
          className="blog-section container-fluid no-padding"
        >
          <div className="section-padding" />
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Updates From Our Shop</h3>
              <p>
                In a freak mishap ranger and its pilot captain william buck
                rogers are blown
              </p>
            </div>
            {/* Section Header /- */}
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <article>
                  <div className="entry-cover">
                    <a href="single-blog.html">
                      <img src="images/blog/home-blog-1.jpg" alt="blog-1" />
                    </a>
                    <a href="single-blog.html" className="read-more">
                      Read More
                    </a>
                  </div>
                  {/* Post Content */}
                  <div className="post-content">
                    <div className="post-meta">
                      <div className="post-date">
                        <span>Sep</span>
                        <span>28</span>
                      </div>
                      <div className="post-comment">
                        <i>
                          <img src="images/icon/comment.png" alt="Comment" />
                        </i>
                        <a href="#">17</a>
                      </div>
                      <div className="post-like">
                        <i>
                          <img src="images/icon/blog-like.png" alt="Comment" />
                        </i>
                        <a href="#">13</a>
                      </div>
                      <div className="post-share">
                        <a href="#">
                          <i>
                            <img src="images/icon/share.png" alt="Comment" />
                          </i>
                          Share
                        </a>
                      </div>
                    </div>
                    <h3 className="entry-title">
                      <a href="single-blog.html">
                        Special care on Pets by physician
                      </a>
                    </h3>
                    <div className="entry-content">
                      <p>
                        The weather started getting rough the tiny ship was
                        tossed if not for the courage of the fearless crew the
                        Minnow would be lost the minnow lost.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <div className="post-admin">
                        <i>
                          <img src="images/icon/admin-ic.png" alt="admin-ic" />
                        </i>
                        Posted by<a href="#">Admin</a>
                      </div>
                      <div className="tags">
                        <i>
                          <img src="images/icon/tags.png" alt="Tags" />
                        </i>
                        <a href="#">Pets</a>
                        <a href="#">Veterinary</a>
                        <a href="#">Dog</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Content /- */}
                </article>
              </div>
              <div className="col-md-4 col-sm-6">
                <article>
                  <div className="entry-cover">
                    <a href="single-blog.html">
                      <img src="images/blog/home-blog-2.jpg" alt="blog-2" />
                    </a>
                    <a href="single-blog.html" className="read-more">
                      Read More
                    </a>
                  </div>
                  {/* Post Content */}
                  <div className="post-content">
                    <div className="post-meta">
                      <div className="post-date">
                        <span>oct</span>
                        <span>14</span>
                      </div>
                      <div className="post-comment">
                        <i>
                          <img src="images/icon/comment.png" alt="Comment" />
                        </i>
                        <a href="#">28</a>
                      </div>
                      <div className="post-like">
                        <i>
                          <img src="images/icon/blog-like.png" alt="Comment" />
                        </i>
                        <a href="#">22</a>
                      </div>
                      <div className="post-share">
                        <a href="#">
                          <i>
                            <img src="images/icon/share.png" alt="Comment" />
                          </i>
                          Share
                        </a>
                      </div>
                    </div>
                    <h3 className="entry-title">
                      <a href="single-blog.html">
                        Regular Pets Oral Health Checkup
                      </a>
                    </h3>
                    <div className="entry-content">
                      <p>
                        The weather started getting rough the tiny ship was
                        tossed if not for the courage of the fearless crew the
                        Minnow would be lost the minnow lost.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <div className="post-admin">
                        <i>
                          <img src="images/icon/admin-ic.png" alt="admin-ic" />
                        </i>
                        Posted by<a href="#">Admin</a>
                      </div>
                      <div className="tags">
                        <i>
                          <img src="images/icon/tags.png" alt="Tags" />
                        </i>
                        <a href="#">Pets</a>
                        <a href="#">Checkup</a>
                        <a href="#">Doctor</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Content /- */}
                </article>
              </div>
              <div className="col-md-4 col-sm-6">
                <article>
                  <div className="entry-cover">
                    <a href="single-blog.html">
                      <img src="images/blog/home-blog-3.jpg" alt="blog-3" />
                    </a>
                    <a href="single-blog.html" className="read-more">
                      Read More
                    </a>
                  </div>
                  {/* Post Content */}
                  <div className="post-content">
                    <div className="post-meta">
                      <div className="post-date">
                        <span>Nov</span>
                        <span>09</span>
                      </div>
                      <div className="post-comment">
                        <i>
                          <img src="images/icon/comment.png" alt="Comment" />
                        </i>
                        <a href="#">15</a>
                      </div>
                      <div className="post-like">
                        <i>
                          <img src="images/icon/blog-like.png" alt="Comment" />
                        </i>
                        <a href="#">19</a>
                      </div>
                      <div className="post-share">
                        <a href="#">
                          <i>
                            <img src="images/icon/share.png" alt="Comment" />
                          </i>
                          Share
                        </a>
                      </div>
                    </div>
                    <h3 className="entry-title">
                      <a href="single-blog.html">
                        Experts Guidance on Pet Nutrition
                      </a>
                    </h3>
                    <div className="entry-content">
                      <p>
                        The weather started getting rough the tiny ship was
                        tossed if not for the courage of the fearless crew the
                        Minnow would be lost the minnow lost.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <div className="post-admin">
                        <i>
                          <img src="images/icon/admin-ic.png" alt="admin-ic" />
                        </i>
                        Posted by<a href="#">Admin</a>
                      </div>
                      <div className="tags">
                        <i>
                          <img src="images/icon/tags.png" alt="Tags" />
                        </i>
                        <a href="#">Pets</a>
                        <a href="#">Checkup</a>
                        <a href="#">Doctor</a>
                      </div>
                    </div>
                  </div>
                  {/* Post Content /- */}
                </article>
              </div>
            </div>
          </div>
          {/* Container */}
          <div className="section-padding" />
        </div>
        {/* Blog /- */}
        {/* Newsletter */}
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
        {/* Newsletter /- */}
        <footer className="footer-main">
          {/* Container */}
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <aside className="widget widget-about">
                  <h3 className="widget-title">about Us</h3>
                  <p>
                    Hello we are Comre. We are here to provide you the best
                    offers through our coupons. Hello we are company.
                  </p>
                  <ul>
                    <li>
                      <img src="images/icon/ftr-location.png" alt="Address" />
                      Washington Square Park, <span>NY, United States</span>
                    </li>
                    <li>
                      <img src="images/icon/ftr-customer.png" alt="Phone" />{" "}
                      Customer Support : <span>+ 124 45 76 678</span>
                    </li>
                    <li>
                      <img src="images/icon/ftr-email.png" alt="Mail" />
                      <span>Email :</span>
                      <a href="mailto:mail@woodsman.com"> mail@woodsman.com</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-md-4 col-sm-6">
                <aside className="widget widget-links">
                  <h3 className="widget-title">Working Time</h3>
                  <ul>
                    <li>
                      Monday <span>08:00 am - 10:00 pm</span>
                    </li>
                    <li>
                      tuesday <span>08:00 am - 10:00 pm</span>
                    </li>
                    <li>
                      wednesday <span>08:00 am - 10:00 pm</span>
                    </li>
                    <li>
                      thursday <span>08:00 am - 10:00 pm</span>
                    </li>
                    <li>
                      friday <span>08:00 am - 10:00 pm</span>
                    </li>
                    <li>
                      Week End <span>CloSed</span>
                    </li>
                    <li>
                      Emergency Unit <span>Open Any Time</span>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-md-4 col-sm-6">
                <aside className="widget widget-subscribe">
                  <div className="subscribe-box">
                    <h4>Subscribe To Mail!</h4>
                    <p>
                      Get our Daily email n.ewsletter with Special Services,
                      Updates, Offers and more
                    </p>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                          SignUp
                        </button>
                      </span>
                    </div>
                    {/* /input-group */}
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="images/icon/ftr-fb.png" alt="ftr" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icon/ftr-g+.png" alt="ftr" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icon/ftr-tumbler.png" alt="ftr" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icon/ftr-dribbble.png" alt="ftr" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icon/ftr-ln.png" alt="ftr" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icon/ftr-tw.png" alt="ftr" />
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          {/* Container /- */}
          <div className="bottom-footer container-fluid no-padding">
            <div className="container">
              <div className="row">
                <ul className="col-md-5 pull-left">
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Client Support</a>
                  </li>
                </ul>
                <div className="col-md-7 pull-right">
                  <p className="copyright">
                    copyrights © 2015 Mice Cab. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Main Container */}
    </>
  );
};

export default Home;
