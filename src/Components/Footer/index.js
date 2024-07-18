import React from "react";
import "./styles.css";
import img from "../../Assets/photo_2024-07-09_23-06-30.jpg"

function Footer() {
  return (
    <div className="footer-container">
      <div className="svg-content">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#6E8AF5"
            d="M44.9,-78.1C58.8,-69.7,71.3,-59,76.9,-45.6C82.5,-32.3,81.1,-16.1,77,-2.3C73,11.4,66.2,22.9,58.1,31.9C50,40.9,40.6,47.4,30.7,48.6C20.8,49.9,10.4,45.9,-0.8,47.3C-12,48.7,-24,55.5,-33.6,54.1C-43.2,52.7,-50.5,43,-56.3,32.6C-62.1,22.2,-66.4,11.1,-65.9,0.3C-65.4,-10.5,-60,-21,-55.9,-34.4C-51.8,-47.7,-49,-63.8,-39.9,-75C-30.7,-86.3,-15.4,-92.7,0,-92.8C15.5,-92.9,30.9,-86.6,44.9,-78.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="logo-container">
        <div className="logo-Nexus">
          <img
            src={img}
            alt="Nexus Logo"
          />
          <p>NEXUS</p>
        </div>
        <p>
          Welcome to NEXUS, where we blend financial success with strategic
          innovation. As a pioneering investment firm, we are dedicated to
          reshaping the investment landscape.
        </p>
        <div className="social-media-container"></div>
      </div>
      <div className="lists-container">
        <div className="lists">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="lists">
          <h2>Services</h2>
          <ul>
            <li>Investment Solutions</li>
            <li>Advisory Services</li>
            <li>Fundraising</li>
            <li>Training</li>
          </ul>
        </div>
        <div className="lists">
          <h2>Products</h2>
          <ul>
            <li>Nexus Investments</li>
            <li>Nexus Funds</li>
            <li>Nexus Portfolio Management</li>
            <li>Nexus Credit</li>
          </ul>
        </div>
        <div className="lists">
          <h2>Support</h2>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
