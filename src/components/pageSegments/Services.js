import React from "react";

const Services = () => {
  return (
    <div id="services" className="services container-fluid no-padding">
      <div className="section-padding" />
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h3>Services we Offer</h3>
          <p>
            In a freak mishap ranger and its pilot captain william buck rogers
            are blown
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
                  systems and returns Buck Rogers to Earth five-hundred years
                  later. We're gonna do it. On your mark get set and go now. Got
                  a dream and we just know now we're gonna make our dream come
                  true. Space. The final frontier. These are the voyages of the
                  Starship Enterprise.
                </p>
                <p>
                  Now were up in the big leagues getting' our turn at bat? No
                  phone no lights no motor car not a single luxury. Like
                  Robinson Crusoe it's primitive as can be! Boy the way Glen
                  Miller played. Songs that made the hit parade guys like us.
                </p>
              </div>
            </div>
            <div id="tab-two" className="tab-pane" role="tabpanel">
              <div className="tab-box">
                <p>
                  2 Trajectory into an orbit which freezes his life support
                  systems and returns Buck Rogers to Earth five-hundred years
                  later. We're gonna do it. On your mark get set and go now. Got
                  a dream and we just know now we're gonna make our dream come
                  true. Space. The final frontier. These are the voyages of the
                  Starship Enterprise.
                </p>
                <p>
                  Now were up in the big leagues getting' our turn at bat? No
                  phone no lights no motor car not a single luxury. Like
                  Robinson Crusoe it's primitive as can be! Boy the way Glen
                  Miller played. Songs that made the hit parade guys like us.
                </p>
              </div>
            </div>
            <div id="tab-three" className="tab-pane" role="tabpanel">
              <div className="tab-box">
                <p>
                  3 Trajectory into an orbit which freezes his life support
                  systems and returns Buck Rogers to Earth five-hundred years
                  later. We're gonna do it. On your mark get set and go now. Got
                  a dream and we just know now we're gonna make our dream come
                  true. Space. The final frontier. These are the voyages of the
                  Starship Enterprise.
                </p>
                <p>
                  Now were up in the big leagues getting' our turn at bat? No
                  phone no lights no motor car not a single luxury. Like
                  Robinson Crusoe it's primitive as can be! Boy the way Glen
                  Miller played. Songs that made the hit parade guys like us.
                </p>
              </div>
            </div>
            <div id="tab-four" className="tab-pane" role="tabpanel">
              <div className="tab-box">
                <p>
                  4 Trajectory into an orbit which freezes his life support
                  systems and returns Buck Rogers to Earth five-hundred years
                  later. We're gonna do it. On your mark get set and go now. Got
                  a dream and we just know now we're gonna make our dream come
                  true. Space. The final frontier. These are the voyages of the
                  Starship Enterprise.
                </p>
                <p>
                  Now were up in the big leagues getting' our turn at bat? No
                  phone no lights no motor car not a single luxury. Like
                  Robinson Crusoe it's primitive as can be! Boy the way Glen
                  Miller played. Songs that made the hit parade guys like us.
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
  );
};

export default Services;
