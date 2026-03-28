import "./BeliefSection.css";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";

const beliefs = [
  {
    id: 1,
    title: "Our Vision",
    image: vision,  
    description:
      "To become a leading provider of healthcare facility management and manpower services across India",
  },
  {
    id: 2,
    title: "Our Mission",
    image: mission,
    description:
      "To deliver dependable, high-quality, and compliant services that support better patient care and smooth hospital operations.",
  }
];

function BeliefSection() {
  return (
    <section className="belief-section">
      <h2 className="belief-title">Our Belief System</h2>
      <div className="belief-cards">
        {beliefs.map(({ id, title, image, description }) => (
          <div className="belief-card" key={id}>
            <img src={image} alt={title} className="belief-image" />
            <h3 className="belief-card-title">{title}</h3>
            <p className="belief-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BeliefSection;