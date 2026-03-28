import "./About.css";
import work1 from "../../assets/i1.jpeg";
import work2 from "../../assets/i2.jpeg";
import work3 from "../../assets/i3.jpeg";
import work4 from "../../assets/i4.jpeg";
import work5 from "../../assets/i5.jpeg";
import work6 from "../../assets/i6.jpeg";
import work7 from "../../assets/i7.jpeg";
import work8 from "../../assets/i8.jpeg";
import work9 from "../../assets/i9.jpeg";
import work10 from "../../assets/i10.jpeg";

function AboutUs() {
  return (
    <>
      <div className="about-banner">
        <h1>ABOUT US</h1>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            Arva Enterprises is a trusted service provider specializing in
            hospital housekeeping, manpower supply, and facility management.
            With years of on-ground experience, we understand the critical
            importance of hygiene, discipline, and trained staff in healthcare environments.
          </p>

          <p>
            Our mission is to support hospitals and organizations with reliable,
            well-trained manpower and efficient operational services that ensure
            smooth functioning and improved service quality.
          </p>
        </div>
      </div>

      <div className="about-gallery">
        <img src={work1} />
        <img src={work2} />
        <img src={work3} />
        <img src={work4} />
        <img src={work5} />
        <img src={work6} />
        <img src={work7} />
        <img src={work8} />
        <img src={work9} />
        <img src={work10} />
      </div>
    </>
  );
}

export default AboutUs;