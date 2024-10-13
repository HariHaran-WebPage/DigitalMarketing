import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email address!");
    } else {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>
            Stay updated with the latest trends and tips in digital marketing!
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <button className="subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
        <div className="footer-description">
          <h3>About joybps</h3>
          <p>
            At joybps, we specialize in innovative SEO and digital marketing
            strategies that drive traffic and boost engagement. Our expert team
            is dedicated to helping businesses grow online through tailored
            solutions.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; 2024 joybps. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
