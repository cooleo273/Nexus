import React, { useEffect } from "react";
import LogoSlider from "../LogoSliders";
import BodyContainer from "../BodyContainer";
import Investment from "../Investment";
import CommentBody from "../CommentBody";
import Articles from "../Articles";
import img from "../../Assets/b808ea7dedf (3).png";
import img1 from "../../Assets/b808ea7dedf (2).png";
import "./styles.css";

function Body() {
  
  // Smooth scrolling function
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Handle smooth scroll when component mounts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about-us") {
      scrollToAboutUs();
    }
  }, []);
  const scrollToWhyChooseUs = () => {
    const whychooseUsSection = document.getElementById("why-choose-us");
    if (whychooseUsSection) {
      whychooseUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Handle smooth scroll when component mounts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#why-choose-us") {
      scrollToWhyChooseUs();
    }
  }, []);
  
  return (
    <div className="main-body">
      <LogoSlider />
      
      {/* About Us Section */}
      <section id="about-us">
        <BodyContainer
          MainStyles="body-container"
          subtitle="About Us"
          BodyContainer="bodyContainer text-container"
          title="Your Access Point To Elevated Investment Prowess"
          bodyText="Explore a new era of financial opportunities with our extensive investment offerings. 
          At NEXUS, we act as your portal to enhanced investment performance. 
          We are dedicated to enhancing your financial path through personalized strategies and advanced expertise."
          image={img} 
          Button="buttonStyle"
          name="Learn More"
          alt="Financial"
        />
      </section>
      
      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <BodyContainer
          MainStyles="body-container-two"
          subtitle="Why Choose Us"
          BodyContainer="bodyContainer text-container"
          title="Exceptional Investment Growth"
          bodyText="Welcome to NEXUS, where we transcend traditional investment paradigms to redefine excellence in the financial sector. 
          Our team comprises seasoned financial wizards, market analysts, and dedicated professionals who excel at navigating the complexities of the financial landscape. 
          We understand that every investor is unique, which is why we offer personalized investment plans tailored to your specific financial goals, risk tolerance, and timeline. 
          At NEXUS, transparency and accountability are core values—we believe in fostering trust by providing clear visibility into where your investments are allocated."
          image={img1}
          displayButton={false}
          alt="Financial"
        />
      </section>
      
      <Investment/>
      <CommentBody/>
      <Articles/>
      
    </div>
  );
}

export default Body;
