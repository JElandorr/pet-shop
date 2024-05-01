import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

const PhotoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleSlideChange = () => {
    setActiveIndex((state) =>
      state === sliderData.length - 1 ? 0 : state + 1
    );
  };

  const Slide = ({ sliderData, isActive }) => {
    console.log(isActive);
    return (
      <div className={`item ${isActive ? "active" : ""}`}>
        <img src={sliderData.img} alt={`slider-${sliderData.id}`} />
        <div className="slider-content">
          <div className="container">
            <div className="slide-content slide-content-1">
              <h2>{sliderData.title}</h2>
              <h3>{sliderData.content}</h3>
              <p>{sliderData.text}</p>
              <a
                href={sliderData.btnLink}
                className={sliderData.btnClass}
                title={sliderData.btnText}
              >
                {sliderData.btnText}
              </a>
              <a
                href={sliderData.btnLink}
                className={`${sliderData.btnClass} bg`}
                title={sliderData.btnText}
              >
                {sliderData.btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="photo-slider" className="photo-slider container-fluid no-padding">
      <div
        id="main-slider"
        className="carousel slide carousel-fade col-offset-2"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={handleSlideChange}
          >
            {sliderData.map((slider, index) => {
              console.log(slider);
              console.log(index);
              console.log(activeIndex);
              return (
                <SwiperSlide key={slider.id}>
                  <Slide sliderData={slider} isActive={index === activeIndex} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
