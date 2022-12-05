import React from "react";
import styles from "./Form.module.css";

const Form = ({ children, handleSubmit, className }) => {
  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
      {children}
    </form>
  );
};

export default Form;
