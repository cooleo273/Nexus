import React from "react";
import TopBar from "../TopBar/index";
import HeroSection from "../HeroSection/index";
import "./styles.css";
import BodyContainer from "../BodyContainer";
import img from "../../Assets/b808ea7dedf (2).png";

function Header() {
  return (
    <div className="Header-Container">
      <TopBar />
      <HeroSection />
      <div className="svg-container">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#132450" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
      </div>
      <BodyContainer
        MainStyles="body-containers"
        BodyContainer="text-container"
        title="Investing Build Your Portfolio Starting 
              With Just 1 Birr"
        bodyText="Invest in stocks, options, and ETFs at your pace and commission-free.
                  Investing Disclosures"
        image={img}
        name="Learn More"
        Button="LearnMore"
        alt = "Financial"
      />
    </div>
  );
}

export default Header;
