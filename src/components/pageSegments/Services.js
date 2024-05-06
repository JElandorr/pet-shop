import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [showServices, setShowServices] = useState(0);
  const services = [
    {
      id: 0,
      title: "Veterinary care",
      titleAlt: "care",
      icon: "images/icon/care.png",
      description:
        "We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals. We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals.We offer full veterinary care for dogs, cats, birds, reptiles, fish, and other small animals. ",
    },
    {
      id: 1,
      title: "Pet Day Camps",
      titleAlt: "camps",
      icon: "images/icon/camp.png",
      description:
        "We offer pet day camps and day care. We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care.We offer pet day camps and day care. ",
    },
    {
      id: 2,
      title: "Pet Boarding",
      titleAlt: "boarding",
      icon: "images/icon/nutrition.png",
      description:
        "We offer pet boarding for all kinds of pets. We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.We offer pet boarding for all kinds of pets.",
    },
    {
      id: 3,
      title: "Pet Grooming",
      titleAlt: "grooming",
      icon: "images/icon/insurance.png",
      description:
        "We offer pet grooming for all kinds of pets. We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.We offer pet grooming for all kinds of pets.",
    },
  ];

  const servicesTitle = (serviceData) => {
    return (
      <li
        key={serviceData.id}
        className={showServices === serviceData.id ? "active" : ""}
        role="presentation"
      >
        <Link to="#" onClick={() => handleShowServices(serviceData.id)}>
          <i>
            <img src={serviceData.icon} alt={serviceData.titleAlt} />
          </i>
          {serviceData.title}
        </Link>
      </li>
    );
  };

  const ServicesContent = ({ serviceData }) => {
    return (
      <div className="tab-pane active" role="tabpanel">
        <div className="tab-box">
          <p>{serviceData.description}</p>
        </div>
      </div>
    );
  };

  const handleShowServices = (id) => {
    setShowServices((state) => (state === id ? null : id));
  };

  // console.log(showServices ? services[showServices] : services[0]);

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
              {services.map((service) => servicesTitle(service))}
            </ul>
          </div>
          <div className="tab-content col-md-8 col-sm-7 no-padding">
            <ServicesContent serviceData={services[showServices || 0]} />
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
