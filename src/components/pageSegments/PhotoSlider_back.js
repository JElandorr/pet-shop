import React from "react";

const PhotoSlider = () => {
  const sliderData = [
    {
      id: 1,
      img: "images/slider-image/slider-1.jpg",
      title: "Dog cat pat care",
      content: "We Take Good Care For<span>Your Lovely Pet</span>",
      text: "Those were the days. And we know Flipper lives in a world full of wonder flying there-under under the sea. The Love Boat soon will be making",
      btnText: "Purchase",
      btnClass: "btn btn-default",
      btnLink: "#",
    },
    {
      id: 2,
      img: "images/slider-image/slider-2.jpg",
      title: "Dog cat pat care",
      content: "We Take Good Care For<span>Your Lovely Pet</span>",
      text: "Those were the days. And we know Flipper lives in a world full of wonder flying there-under under the sea. The Love Boat soon will be making",
      btnText: "Purchase",
      btnClass: "btn btn-default",
      btnLink: "#",
    },
    {
      id: 3,
      img: "images/slider-image/slider-3.jpg",
      title: "Dog cat pat care",
      content: "We Take Good Care For<span>Your Lovely Pet</span>",
      text: "Those were the days. And we know Flipper lives in a world full of wonder flying there-under under the sea. The Love Boat soon will be making",
      btnText: "Purchase",
      btnClass: "btn btn-default",
      btnLink: "#",
    },
  ];

  const sliderContent = (data) => {
    return (
      <div className="slider-content">
        <div className="container">
          <div className="slide-content">
            <h2>{data.title}</h2>
            <h3>{data.content}</h3>
            <p>{data.text}</p>
            <a href={data.btnLink} className={data.btnClass} title="Purchase">
              {data.btnText}
            </a>
          </div>
        </div>
      </div>
    );
  };

  const sliderChanger = (data) => {
    return (
      <div className="item">
        <img src={data.img} alt="slider-1" />
        {sliderContent(data)}
      </div>
    );
  }

  return (
    <div id="photo-slider" className="photo-slider container-fluid no-padding">
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
                    Those were the days. And we know Flipper lives in a world
                    full of wonder{" "}
                    <span>
                      flying there-under under the sea. The Love Boat soon will
                      be making
                    </span>
                  </p>
                  <a href="#" className="btn btn-default" title="Purchase">
                    Purchase
                  </a>
                  <a href="#" className="btn btn-default bg" title="Learn More">
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
                    Those were the days. And we know Flipper lives in a world
                    full of wonder{" "}
                    <span>
                      flying there-under under the sea. The Love Boat soon will
                      be making
                    </span>
                  </p>
                  <a href="#" className="btn btn-default" title="Purchase">
                    Purchase
                  </a>
                  <a href="#" className="btn btn-default bg" title="Learn More">
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
                    Those were the days. And we know Flipper lives in a world
                    full of wonder{" "}
                    <span>
                      flying there-under under the sea. The Love Boat soon will
                      be making another
                    </span>{" "}
                  </p>
                  <a href="#" className="btn btn-default" title="Purchase">
                    Purchase
                  </a>
                  <a href="#" className="btn btn-default bg" title="Learn More">
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
  );
};

export default PhotoSlider;
