import "./Slider.css";
import security from "../../assets/security.jpeg";

function Slider() {
  return (
    <div className="slider">
      <img src={security} alt="Manpower Services" className="single-slide" />
    </div>
  );
}

export default Slider;