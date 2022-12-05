import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({
  type,
  name,
  placeholder,
  value,
  classname,
  isRequired,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      {isRequired ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${styles.inputField} ${classname}`}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${styles.inputField} ${classname}`}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </>
  );
};

export default FormInput;
