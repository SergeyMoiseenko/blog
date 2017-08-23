import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.css";

function NavBar(props) {
  return (
    <div className={props.className}>
      <ul styleName="styles.nav-list">
        <li>
          <NavLink exact activeClassName={styles.activeLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeLink} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeLink} to="/resume">
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
