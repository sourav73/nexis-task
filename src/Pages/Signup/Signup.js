import React, { useState } from "react";
import { useFormik } from "formik";
import { HiOutlineArrowRight } from "react-icons/hi";
import { signupSchema } from "../../schemas";
import IconButton from "../../components/Button/IconButton";
import Button from "../../components/Button/Button";
import bg from "../../assets/images/bg.png";
import Form from "../../components/Form/Form";
import FormHeading from "../../components/Heading/FormHeading";
import LinkText from "../../components/LinkText/LinkText";
import FormPage1 from "./FormPage/FormPage1";
import FormPage2 from "./FormPage/FormPage2";
import FormPage3 from "./FormPage/FormPage3";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./Signup.module.css";

const Signup = ({ setSuccessMsg }) => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [page, setPage] = useState(1);
  const formData = {
    first_name: "",
    last_name: "",
    code: "",
    mobile: "",
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: signupSchema,
      onSubmit: async (values) => {
        try {
          const res = await axios.post(
            "https://test.nexisltd.com/signup",
            JSON.stringify({
              first_name: values.first_name,
              last_Name: values.last_name,
              phone_number: values.code + values.mobile,
              email: values.email,
              password: values.password,
            })
          );
          // console.log(res.data);
          setSuccessMsg(res.data.sucess);
          navigate("/");
        } catch (err) {
          // console.log(err.message);
          setErrorMsg(err.response.data);
        }
      },
    });
  const page1Data = {
    firstName: values.first_name,
    lastName: values.last_name,
    firstNameError: errors.first_name,
    lastNameError: errors.last_name,
  };
  const page2Data = {
    code: values.code,
    mobile: values.mobile,
    email: values.email,
    codeError: errors.code,
    mobileError: errors.mobile,
    emailError: errors.email,
  };
  const page3Data = {
    password: values.password,
    passwordError: errors.password,
  };
  return (
    <main className="container">
      <div className={`grid-container ${styles.content}`}>
        <div className={styles.image}>
          <img src={bg} alt="people" />
        </div>
        <div className={styles.formWrapper}>
          <Form
            handleSubmit={handleSubmit}
            className={Object.keys(errors).length > 0 ? styles.error : ""}
          >
            <FormHeading text="SignUp Form" />
            <div className={styles.inputWrapper}>
              {page === 1 && (
                <FormPage1
                  values={page1Data}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  isTouched={touched}
                />
              )}
              {page === 2 && (
                <FormPage2
                  values={page2Data}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  isTouched={touched}
                />
              )}
              {page === 3 && (
                <FormPage3
                  values={page3Data}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  isTouched={touched}
                />
              )}
              <div className={styles.buttonGroup}>
                {page > 1 && (
                  <button
                    className={styles.back}
                    type="button"
                    onClick={() => setPage(page - 1)}
                  >
                    Back
                  </button>
                )}
                {page === 3 ? (
                  <Button type="submit" text="Sign Up" />
                ) : (
                  <IconButton
                    type="button"
                    text="Next Step"
                    icon={<HiOutlineArrowRight />}
                    handleClick={() =>
                      page < 3 ? setPage(page + 1) : setPage(page)
                    }
                  />
                )}
              </div>
            </div>
            <small className={styles.serverErrorMsg}>
              {errorMsg && errorMsg.error}
            </small>
            <div
              className={`${styles.formFooter} ${
                page !== 1 ? styles.hidden : ""
              }`}
            >
              <p>
                Already have an account?
                <LinkText text="Login Here" forwardLink="/" />
              </p>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
