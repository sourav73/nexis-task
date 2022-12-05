import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.brand}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Navbar;
