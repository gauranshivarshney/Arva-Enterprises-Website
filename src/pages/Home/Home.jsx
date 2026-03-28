import BeliefSection from "../../components/BeliefSection/BeliefSection";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Slider />
      </div>
      <BeliefSection />
    </div>
  );
}

export default Home;