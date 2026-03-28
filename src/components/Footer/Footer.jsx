import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>ARVA ENTERPRISES</h3>
          <p>
             ARVA Enterprises is committed to delivering excellence in all services with integrity and professionalism.
          </p>
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
            <li>Manpower Services</li>
            <li>Facility Support Services</li>
            <li>Housekeeping Services</li>
            <li>Manpower Services</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p><strong>Head Office:</strong> 12/18, Pocket-12, Sector-82, Noida, U.P. – 201304</p>
          <p><strong>Regional Office:</strong> Q3, Ground Floor, Anand Vihar, Sri Ganganagar – 335001</p>
          <p><strong>Contact:</strong> +91 7011705185 | +91 9672033333</p>
          <p><strong>Email:</strong> <a href="mailto:Sanjaynayakarava2005@gmail.com" style={{color: '#ff5800', textDecoration: 'none'}}>Sanjaynayakarava2005@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Arva Enterprises © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;