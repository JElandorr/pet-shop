import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import CallOut from "../pageSegments/CallOut";
import Services from "../pageSegments/Services";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";
import Appointment from "../pageSegments/Appointment";
import Counter from "../pageSegments/Counter";
import ShopUpdates from "../pageSegments/ShopUpdates";
import Offer from "../pageSegments/Offer";
import Pricing from "../pageSegments/Pricing";

const ServicesPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Our Services" />
        <Services />
        <CallOut />
        <Appointment />
        <Counter />
        <ShopUpdates />
        <Offer />
        <Pricing />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
