import React from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/form">Form</Link>
          <Link to="/hooks">Custom</Link>
        <FaReact className="img" style={{ fontSize: "3rem" }} />
        <h3>React Facts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </div>
  );
};

export default Navbar;
