import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ type, text, forwardLink }) => {
  return (
    <>
      {type === "link" ? (
        <Link to={forwardLink} className={styles.btnPrimary}>
          {text}
        </Link>
      ) : (
        <button className={styles.btnPrimary} type={type}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
