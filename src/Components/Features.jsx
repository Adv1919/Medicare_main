import React from "react";
import "./style/Features.css";

function Features() {
  return (
    <div className="feature-cards">
      <div className="feature-card">
        <h3>Schedule Appointment</h3>
        <p>Book your appointments easily.</p>
      </div>
      <div className="feature-card">
        <h3>Find Pharmacies</h3>
        <p>Find pharmacies near you easily.</p>
      </div>
      <div className="feature-card">
        <h3>Health Education</h3>
        <p>Access health resources and emergency guidelines.</p>
      </div>
    </div>
  );
}

export default Features;
