import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ text, classname }) => {
  return <h5 className={`${styles.formHeading} ${classname}`}>{text}</h5>;
};

export default Heading;
