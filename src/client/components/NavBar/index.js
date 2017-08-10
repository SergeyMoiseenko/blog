import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar(props) {
  return (
    <div className={props.className}>
      <ul styleName="nav-list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
