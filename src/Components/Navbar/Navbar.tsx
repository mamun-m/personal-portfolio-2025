import "./Navbar.css";
import img from "../../assets/dhaka.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div>
        <Link to="/">
          <img src={img} alt="" className="dhaka-img-logo" />
        </Link>
      </div>
      <div
        className={`navbar-icon ${isOpen ? "open" : ""}`}
        onClick={() => setisOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/service">Services </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-input-sections">
        <input type="text" />
        <input type="button" value="input" />
      </div>
    </div>
  );
};

export default Navbar;
