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
            Arva Enterprises is a professionally managed service provider specializing in housekeeping and manpower solutions, with a strong focus on the healthcare and hospital sector. We are committed to delivering reliable, efficient, and quality-driven support services that enhance hospital operations while maintaining the highest standards of hygiene, safety, and compliance. With hands-on experience in critical healthcare environments, we understand the importance of precision, discipline, and cleanliness in patient care support services. 
          </p>
          <p>
            We have a Pan India presence of highly trained, motivated & committed security personnel providing round the clock vigilance & physical security various Corporate. Our endeavour is to provide efficient yet cost effective solutions to all the security related requirements of the Clients through carefully selected, medically fit, highly trained & pro active staff.
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