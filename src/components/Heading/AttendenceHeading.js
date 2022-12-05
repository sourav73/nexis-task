import React from "react";
import styles from "./Heading.module.css";

const AttendenceHeading = ({ text }) => {
  return <h5 className={styles.attendenceHeading}>{text}</h5>;
};

export default AttendenceHeading;
