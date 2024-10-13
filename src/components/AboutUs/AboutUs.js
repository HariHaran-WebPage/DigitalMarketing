import React, { useEffect, useState } from "react";
import "./AboutUs.css";

import slideImage1 from "../images/slide1.jpg";
import slideImage2 from "../images/slide2.jpg";
import slideImage3 from "../images/slide3.jpg";

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [slideImage1, slideImage2, slideImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-content">
        <div className="about-carousel">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className={`about-image ${fade ? "fade-in" : ""}`}
          />
        </div>
        <div className="about-text">
          <p>
            joybps is a leading SEO and digital marketing company helping
            businesses achieve online growth and visibility. Our dedicated team
            of experts is committed to delivering the best results for our
            clients through innovative strategies and personalized service.
          </p>
          <p>
            We offer a wide range of services tailored to meet the specific
            needs of each client. From search engine optimization (SEO) to
            content marketing, our goal is to enhance your online presence and
            drive traffic to your website.
          </p>
          <p>
            Our approach combines data-driven insights with creative
            storytelling to engage your audience effectively. We believe in
            building long-lasting relationships with our clients, and we strive
            to provide ongoing support and consultation.
          </p>
          <p>
            Join us on this journey to transform your digital landscape and
            achieve your business goals. At joybps, your success is our
            priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
