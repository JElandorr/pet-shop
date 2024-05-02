import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import WhyChooseUs from "../pageSegments/WhyChooseUs";
import CallOut from "../pageSegments/CallOut";
import ServicesExtended from "../pageSegments/ServicesExtended";
import Team from "../pageSegments/Team";
import Testimonial from "../pageSegments/Testimonial";
import Brands from "../pageSegments/Brands";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const About = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="About Us" />
        <WhyChooseUs />
        <CallOut />
        <ServicesExtended />
        <Team />
        <Testimonial />
        <Brands />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default About;
