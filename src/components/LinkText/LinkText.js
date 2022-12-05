import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkText.module.css";

const LinkText = ({ text, forwardLink }) => {
  return (
    <Link to={forwardLink} className={styles.linkText}>
      {text}
    </Link>
  );
};

export default LinkText;
