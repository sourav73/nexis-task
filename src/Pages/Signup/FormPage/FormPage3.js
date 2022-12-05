import React from "react";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "./FormPage.module.css";

const FormPage3 = ({ values, handleChange, handleBlur, isTouched }) => {
  return (
    <>
      <div className={styles.group}>
        <FormInput
          type="password"
          name="password"
          placeholder="Write Password"
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <small>{values.passwordError && isTouched.password && values.passwordError}</small>
      </div>
    </>
  );
};

export default FormPage3;
