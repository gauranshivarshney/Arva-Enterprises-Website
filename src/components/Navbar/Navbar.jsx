import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <img src={logo} alt="Arva Enterprises Logo" className="logo-img" />
        <span className="logo-text">
          ARVA ENTERPRISES
          <small>Your Trusted Facility Partner</small>
        </span>
      </h2>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;