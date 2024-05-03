import React from "react";

import Header from "../pageSegments/Header";
import PhotoSlider from "../pageSegments/PhotoSlider";
import Intro from "../pageSegments/Intro";
import Appointment from "../pageSegments/Appointment";
import Services from "../pageSegments/Services";
import CallToAction from "../pageSegments/CallToAction";
import WhyChooseUs from "../pageSegments/WhyChooseUs";
import Testimonial from "../pageSegments/Testimonial";
import Team from "../pageSegments/Team";
import Counter from "../pageSegments/Counter";
import ShopUpdates from "../pageSegments/ShopUpdates";
import Offer from "../pageSegments/Offer";
import Blog from "../pageSegments/Blog";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <PhotoSlider />
        <Intro />
        <Appointment />
        <Services />
        <CallToAction />
        <WhyChooseUs />
        <Testimonial />
        <Team />
        <Counter />
        <ShopUpdates />
        <Offer />
        <Blog />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
