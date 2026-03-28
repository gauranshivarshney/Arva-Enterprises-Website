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
              <h2>Housekeeping Services</h2>
              <ul>
                <li>Hospital-grade cleaning & sanitation</li>
                <li>ICU, OT & ward cleaning as per protocols</li>
                <li>Infection control and hygiene management</li>
                <li>Biomedical waste handling support</li>
              </ul>
            </div>

            <div className="service-box">
              <h2>Manpower Services</h2>
              <ul>
                <li>Skilled & semi-skilled workforce deployment</li>
                <li>Ward attendants, housekeeping staff, helpers</li>
                <li>Facility management personnel</li>
                <li>Customized staffing solutions for hospitals</li>
              </ul>
            </div>

            <div className="service-box">
              <h2>Facility Support Services (Value Added)</h2>
              <ul>
                <li>Basic repairs & maintenance support</li>
                <li>Electrical & plumbing assistance (as required)</li>
                <li>Building upkeep and minor civil work coordination</li>
                <li>Pantry & general support staff</li>
                <li>Any additional services required by hospital operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}