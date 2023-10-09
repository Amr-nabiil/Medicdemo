import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import header from "../../assets/header.png";
const Header = () => {
  return (
    <div className="medic__header section__padding" id="home">
      <div className="medic__header-content">
        <h1 className="gradient__text"> Healing Lives, One Click at a Time.</h1>
        <p>
          Navigating the Path to Wellness: Your Trusted Online Medical Resource,
          Guiding You to Better Health. Your Health, Our Priority: Bridging the
          Gap Between Information and Well-being in the Digital Age.
        </p>

        <div className="medic__header-content__input">
          <input type="email" id="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="medic__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="medic__header-image">
        <img src={header} />
      </div>
    </div>
  );
};

export default Header;
