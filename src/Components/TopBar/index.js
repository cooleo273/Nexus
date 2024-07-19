import React, { useState } from "react";
import "./styles.css";
import Button from "../Button";
import img from "../../Assets/photo_2024-07-09_23-06-30.jpg";

function TopBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="topbar">
      <img src={img} alt="placeholder" />
      <p>NEXUS</p>
      <nav>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#why-choose-us" >Why Choose Us</a></li>
          <li><a href="#articles" >Articles</a></li>
          <li><a href="#contact">Contact</a></li>
          <Button name="Login" />
        </ul>
        <svg
          className="mobile-svg"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={toggleModal}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#132450"
              fillRule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            ></path>{" "}
          </g>
        </svg>
      </nav>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <svg
            onClick={closeModal}
              className="close-svg"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#132450"
                  fill-rule="evenodd"
                  d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"
                ></path>{" "}
              </g>
            </svg>
            <ul>
            <li><a href="#about-us" onClick={closeModal}>About Us</a></li>
              <li><a href="#why-choose-us" onClick={closeModal}>Why Choose Us</a></li>
              <li><a href="#articles" onClick={closeModal}>Articles</a></li>
              <li><a href="#contact" onClick={closeModal}>Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
