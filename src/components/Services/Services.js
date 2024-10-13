import React from "react";
import "./Services.css";
import seoImage from "../images/seo-optimization.jpg";
import contentImage from "../images/content-marketing.jpg";
import socialMediaImage from "../images/social-media-management.jpg";
import ppcImage from "../images/ppc-advertising.jpg";
import emailMarketingImage from "../images/email-marketing.jpg";
import webDesignImage from "../images/web-design.jpg";
import analyticsImage from "../images/Analytics and Reporting.jpg";
import reputationImage from "../images/reputationImage.jpg";

const servicesData = [
  {
    id: 1,
    title: "SEO Optimization",
    description: "Boost your rankings with our tailored SEO strategies.",
    image: seoImage,
    alt: "SEO Optimization",
  },
  {
    id: 2,
    title: "Content Marketing",
    description: "We create compelling content that drives engagement.",
    image: contentImage,
    alt: "Content Marketing",
  },
  {
    id: 3,
    title: "Social Media Management",
    description: "Expand your online presence through our expertise.",
    image: socialMediaImage,
    alt: "Social Media Management",
  },
  {
    id: 4,
    title: "PPC Advertising",
    description: "Increase your ROI with targeted pay-per-click campaigns.",
    image: ppcImage,
    alt: "PPC Advertising",
  },
  {
    id: 5,
    title: "Email Marketing",
    description: "Engage your audience with personalized email campaigns.",
    image: emailMarketingImage,
    alt: "Email Marketing",
  },
  {
    id: 6,
    title: "Web Design",
    description:
      "Create stunning websites that convert visitors into customers.",
    image: webDesignImage,
    alt: "Web Design",
  },
  {
    id: 7,
    title: "Analytics and Reporting",
    description:
      "Get detailed insights into your website performance and campaign effectiveness.",
    image: analyticsImage,
    alt: "Analytics and Reporting",
  },
  {
    id: 8,
    title: "Reputation Management",
    description:
      "Enhance your brand's online presence and manage your reputation across platforms.",
    image: reputationImage,
    alt: "Reputation Management",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        {servicesData.map((service) => (
          <div className="service" key={service.id}>
            <img
              src={service.image}
              alt={service.alt}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
