import React, { useRef, useEffect } from 'react';
import "./styles.css";

function HeroSection() {
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const aboutUsElement = aboutUsRef.current;

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
    <section
      ref={aboutUsRef}
      className="Hero-Section-Container"
    >
      <h1 className="Hero-Section">Achieve <span>Financial Goals</span> With Us</h1>
    </section>
  );
}

export default HeroSection;
