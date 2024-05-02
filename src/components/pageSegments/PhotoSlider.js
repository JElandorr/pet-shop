import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PhotoSlider = () => {
  const sliderData = [
    {
      id: 1,
      img: "images/slider-image/slider-1.jpg",
      title: "Dog cat pet care",
      content: "We Take Good Care For Your Lovely Pet",
      text: "Those were the days. And we know Flipper lives in a world full of wonder flying there-under under the sea. The Love Boat soon will be making",
      btnText: "Purchase",
      btnClass: "btn btn-default",
      btnLink: "#",
    },
    {
      id: 2,
      img: "images/slider-image/slider-2.jpg",
      title: "Dog cat pet care",
      content: "We Take Good Care For Your Lovely Pet",
      text: "Those were the days. And we know Flipper lives in a world full of wonder flying there-under under the sea. The Love Boat soon will be making",
      btnText: "Purchase",
      btnClass: "btn btn-default",
      btnLink: "#",
    },
    {
      id: 3,
      img: "images/slider-image/slider-3.jpg",
      title: "Dog cat pet care",
      content: "We Take Good Care For Your Lovely Pet",
      text: "Those were the days. And we know Flipper lives in a world full of wonder flying there-under under the sea. The Love Boat soon will be making",
      btnText: "Purchase",
      btnClass: "btn btn-default",
      btnLink: "#",
    },
  ];

  return (
    <div id="photo-slider" className="photo-slider container-fluid no-padding">
      <div
        id="main-slider"
        className="carousel slide carousel-fade col-offset-2"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={
              sliderData.length > 1
                ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                : true
            }
            className="mySwiper"
          >
            {sliderData.map((slider, index) => {
              return (
                <SwiperSlide key={slider.id}>
                  <>
                    <div>
                      <img src={slider.img} alt="slider" />
                      <div className="slider-content">
                        <div className="container">
                          <div className="slide-content slide-content-2">
                            <h3>{slider.content}</h3>
                            <h2>
                              <span>{slider.title}</span>
                            </h2>
                            <p>
                              <span>{slider.text}</span>
                            </p>
                            <a
                              href="#"
                              className="btn btn-default"
                              title="Purchase"
                            >
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
                  </>
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
