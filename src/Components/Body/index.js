import React from "react";
import LogoSlider from "../LogoSliders";
import img from "../../Assets/b808ea7dedf (3).png"
import BodyContainer from "../BodyContainer";
import "./styles.css"

function Body() {
  return (
    <div className="main-body">
      <LogoSlider />
      <BodyContainer
        MainStyles = "body-container"
        subtitle="About Us"
        BodyContainer="bodyContainer text-container"
        title="Your Access Point To Elevated 
        Investment Prowess"
        bodyText="Explore a new era of financial opportunities with our extensive investment offerings. 
        At NEXUS, we act as your portal to enhanced investment performance. 
        We are dedicated to enhancing your financial path through personalized strategies and advanced expertise."
        image={img}
      />
      <BodyContainer
        MainStyles = "body-container-two"
        subtitle="Why Choose Us"
        BodyContainer="bodyContainer text-container"
        title="Exceptional Investment Growth"
        bodyText="Welcome to NEXUS, where we transcend traditional investment paradigms to redefine excellence in the financial sector. 
        Our team comprises seasoned financial wizards, market analysts, and dedicated professionals who excel at navigating the complexities of the financial landscape. 
        We understand that every investor is unique, which is why we offer personalized investment plans tailored to your specific financial goals, risk tolerance, and timeline. 
        At NEXUS, transparency and accountability are core values—we believe in fostering trust by providing clear visibility into where your investments are allocated."
        image={img}
      />
    </div>
  );
}

export default Body;
