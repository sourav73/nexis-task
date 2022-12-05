import React from "react";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "./FormPage.module.css";

const FormPage1 = ({ values, handleChange, handleBlur, isTouched }) => {
  return (
    <>
      <div className={styles.group}>
        <FormInput
          type="text"
          name="first_name"
          placeholder="Write First Name"
          value={values.first_name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <small>
          {values.firstNameError &&
            isTouched.first_name &&
            values.firstNameError}
        </small>
      </div>
      <div className={styles.group}>
        <FormInput
          type="text"
          name="last_name"
          placeholder="Write Last Name"
          value={values.last_name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <small>
          {values.lastNameError && isTouched.last_name && values.lastNameError}
        </small>
      </div>
    </>
  );
};

export default FormPage1;
