import React, { useRef, useEffect } from 'react';
import "./styles.css";

const BodyContainer = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const aboutUsElement = containerRef.current;

    // Check if aboutUsElement exists before setting up IntersectionObserver
    if (!aboutUsElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutUsElement.classList.add('animate-class');
        } else {
          aboutUsElement.classList.remove('animate-class');
        }
      });
    }, {
      threshold: 0.5 // Adjust the threshold as per your requirement
    });

    observer.observe(aboutUsElement);

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={props.MainStyles}>
      <div className={props.BodyContainer}>
        <h3>{props.subtitle}</h3>
        <h1>{props.title}</h1>
        <p>{props.bodyText}</p>
        <div className='button-container'>
        {props.displayButton ?? <button className={props.Button}>{props.name}</button>}
        </div>
      </div>
      <div className="image-container">
        <img src={props.image} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export default BodyContainer;
