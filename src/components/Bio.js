import React, { useState } from "react";
import profile_no_back from "../images/profile-no-back.png";

export function Bio() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const phoneNumber = "+33 6 52 38 92 23";

  const handlePhoneIconClick = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bio">
      <aside className="icons">
        <a href="mailto:teodora.botezatu@epitech.eu">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/dodoll27" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/teodora-botezatu-b87537205/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <i className="fa-solid fa-phone" onClick={handlePhoneIconClick}></i>
        {showPhoneNumber && (
          <div className="phone">
            <p>{phoneNumber}</p>
            {/* <button onClick={handleCallButtonClick}>Call</button> */}
          </div>
        )}
      </aside>
      <div className="title">
        <div className="my-name">
          <h1>Teodora Botezatu</h1>
        </div>
        <div className="speciality">
          <p>Gen-Z Software Developer</p>
          <div className="specialty-background"></div>
        </div>
        <div className="about-me">
          <p>
            I am a highly driven software developer student at Epitech. I adapt
            easily due to my versatile background. I enjoy learning new things.
            I thrive both in team environments and when working independently. I
            am dynamic, sociable, organized, and possess a strong team spirit.
          </p>
        </div>
      </div>
      <div className="my-face">
        <div className="mobile-background">
          <img src={profile_no_back} width="340" height="360" />
        </div>
      </div>
      <div className="main-background"></div>
    </div>
  );
}
