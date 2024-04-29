import React from "react";

const Intro = () => {
  return (
    <div id="intro" className="intro container-fluid no-padding">
      <div className="section-padding" />
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h3>What We Do</h3>
          <p>They will have to make the best of things its an uphill climb</p>
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
                    <img src="images/icon/intro-icon-1.png" alt="Intro Icon" />
                  </i>
                </h3>
                <p>
                  {" "}
                  To a deluxe apartment in the sky. And we'll do it our way yes
                  our way make all our dreams come true for me and you No phone
                  no lights no motor
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
                    <img src="images/icon/intro-icon-2.png" alt="Intro Icon" />
                  </i>
                </h3>
                <p>
                  {" "}
                  To a deluxe apartment in the sky. And we'll do it our way yes
                  our way make all our dreams come true for me and you No phone
                  no lights no motor
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
                    <img src="images/icon/intro-icon-3.png" alt="Intro Icon" />
                  </i>
                </h3>
                <p>
                  {" "}
                  To a deluxe apartment in the sky. And we'll do it our way yes
                  our way make all our dreams come true for me and you No phone
                  no lights no motor
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
  );
};

export default Intro;
