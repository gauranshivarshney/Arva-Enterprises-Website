import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2f685e71-5472-4aa6-a6fe-591fcd0a1cbf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <h2>Head Office</h2>

          <div className="contact-info">
            <div className="info-item">
              <span className="icon">📍</span>
              <p>12/18, Pocket-12, Sector-82, Noida, U.P. – 201304</p>
            </div>

            <div className="info-item">
              <span className="icon">📍</span>
              <p>Regional Office: Q3, Ground Floor, Anand Vihar, Sri Ganganagar – 335001</p>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <p>+91 7011705185 | +91 9672033333</p>
            </div>

            <div className="info-item">
              <span className="icon">✉️</span>
              <p>Sanjaynayakarava2005@gmail.com</p>
            </div>
          </div>

          <h3 className="present">We are Present at:</h3>
          <p className="cities">Noida | Delhi | Ghaziabad | Gurugram | Sri Ganganagar</p>
        </div>

        <div className="contact-right">
          <h2>Get In Touch With Us</h2>

          <form onSubmit={onSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name*" />
            <input type="email" name="email" placeholder="Your Email*" />

            <textarea name="message" placeholder="Your Message"></textarea>

            <button type="submit">Send</button>
            <span>{result}</span>
          </form>
        </div>
      </div>
      <div className="map-section">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps?q=12/18%20Pocket-12%20Sector-82%20Noida%20Uttar%20Pradesh%20201304&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}