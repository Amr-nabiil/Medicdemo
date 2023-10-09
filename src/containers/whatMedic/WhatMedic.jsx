import React from "react";
import "./whatMedic.css";
import { Feature } from "../../components";
const WhatMedic = () => {
  return (
    <div className="medic__whatmedic section__margin" id="whmedic">
      <div className="medic__whatmedic-feature">
        <Feature
          title="What Is Medic?"
          text="Medic is your online healthcare companion,
         offering a comprehensive platform for all your medical needs.
          From reliable health information and expert advice to appointment scheduling and telemedicine services,
            ensuring you receive the care you deserve."
        />
      </div>

      <div className="medic__whatmedic-heading">
        <h1 className="gradient__text">
        we're dedicated to simplifying your healthcare journey.
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="medic__whatmedic-container">
        
        <Feature
          title=" Telemedicine Services "
          text="Experience Healthcare from Anywhere:
         Access virtual consultations with healthcare professionals from the comfort of your home.  "/>

        <Feature
          title=" Personalized Health Dashboard "
          text="Your Health at a Glance: 
        Stay on top of your well-being with a customizable dashboard that tracks your health metrics, appointments, and reminders in one place. "/>
        
        <Feature
          title=" Comprehensive Health Library "
          text="Your Trusted Health Resource:
         Explore a vast repository of medically reviewed articles, videos, and resources to empower yourself with accurate health information. " />

      </div>
    </div>
  );
};

export default WhatMedic;
