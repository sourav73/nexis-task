import React from "react";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "./FormPage.module.css";

const FormPage2 = ({ values, handleChange, handleBlur, isTouched }) => {
  return (
    <>
      <div className={`grid-container ${styles.number}`}>
        <FormInput
          type="text"
          name="code"
          placeholder="+880"
          value={values.code}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <FormInput
          type="text"
          name="mobile"
          placeholder="1xxxxxxxxx"
          value={values.mobile}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <small className={styles.errorMessage}>{values.codeError && isTouched.code && values.codeError}</small>
        <small className={styles.errorMessage}>{values.mobileError && isTouched.mobile && values.mobileError}</small>
      </div>
      <div className={styles.group}>
        <FormInput
          type="email"
          name="email"
          placeholder="Write Email Address"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <small>{values.emailError && isTouched.email && values.emailError}</small>
      </div>
    </>
  );
};

export default FormPage2;
