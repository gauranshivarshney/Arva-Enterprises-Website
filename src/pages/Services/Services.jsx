import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="services-banner">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="services-page">
        <div className="services-container">
          <div className="services-grid">

            <div className="service-box">
              <i className="fas fa-broom service-icon"></i>
              <h2>Housekeeping Services</h2>
              <ul>
                <li>Hospital-grade cleaning & sanitation</li>
                <li>ICU, OT & ward cleaning as per protocols</li>
                <li>Infection control and hygiene management</li>
                <li>Biomedical waste handling support</li>
              </ul>
            </div>

            <div className="service-box">
              <i className="fas fa-users service-icon"></i>
              <h2>Manpower Services</h2>
              <ul>
                <li>Skilled & semi-skilled workforce deployment</li>
                <li>Ward attendants, housekeeping staff, helpers</li>
                <li>Facility management personnel</li>
                <li>Customized staffing solutions for hospitals</li>
              </ul>
            </div>

            <div className="service-box">
              <i className="fas fa-tools service-icon"></i>
              <h2>Facility Support Services</h2>
              <ul>
                <li>Basic repairs & maintenance support</li>
                <li>Electrical & plumbing assistance</li>
                <li>Building upkeep and minor civil work</li>
                <li>Pantry & general support staff</li>
                <li>Additional hospital support services</li>
              </ul>
            </div>

          </div>
          <div className="why-section">
            <h2>Why Choose Us</h2>

            <div className="why-grid">
              <div>✔ Trained & Verified Staff</div>
              <div>✔ 24/7 Support</div>
              <div>✔ Healthcare Expertise</div>
              <div>✔ Cost Effective Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}