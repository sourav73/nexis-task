import React from "react";
import styles from "./Button.module.css";

const IconButton = ({ type, text, icon, handleClick }) => {
  return (
    <button type={type} className={styles.btnPrimary} onClick={handleClick}>
      {text} {icon}
    </button>
  );
};

export default IconButton;
