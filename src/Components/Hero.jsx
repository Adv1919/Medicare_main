import React from "react";
import "./style/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Medicare+</h1>
        <p>Providing easy access to healthcare and emergency services.</p>
        <button className="btn-appointment">Book an Appointment</button>
      </div>
      <div className="hero-image">
        <img src="src/assets/images/doctor-image.png" alt="Doctor" />
      </div>
    </section>
  );
}

export default Hero;
