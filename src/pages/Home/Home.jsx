import BeliefSection from "../../components/BeliefSection/BeliefSection";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Slider />

        <div className="hero-content">
          <h1>Reliable Manpower Solutions</h1>
          <p>Delivering quality workforce & facility services across India</p>
        </div>
      </div>

      <BeliefSection />
    </div>
  );
}

export default Home;