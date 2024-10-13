import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar />

      <section id="home" className="home-section">
        <div className="hero">
          <h1>Welcome to JoyBPS 🌟</h1>
          <p>Your partner in SEO and Digital Marketing 📈.</p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      <Services />

      <AboutUs />

      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
