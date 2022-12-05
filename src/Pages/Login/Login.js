import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import Button from "../../components/Button/Button";
import bg from "../../assets/images/bg.png";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import FormHeading from "../../components/Heading/FormHeading";
import LinkText from "../../components/LinkText/LinkText";
import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ successMsg }) => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSuccessVisible, setIsSuccessVisible] = useState(true);
  const formData = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        try {
          const res = await axios.post(
            "https://test.nexisltd.com/login",
            JSON.stringify({
              email: values.email,
              password: values.password,
            })
          );
          localStorage.setItem("token", res.data.access_token);
          navigate("/attendence");
        } catch (err) {
          // console.log(err.message);
          setErrorMsg(err.response.data);
        }
      },
    });

  setTimeout(() => {
    setIsSuccessVisible(false);
  }, 3000);

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
            <FormHeading text="Log in Form" />
            <div className={styles.inputWrapper}>
              <div className={styles.group}>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Write Email Address"
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <small>{errors.email && touched.email && errors.email}</small>
              </div>
              <div className={styles.group}>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Write Password"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <small>
                  {errors.password && touched.password && errors.password}
                </small>
              </div>
              <Button type="submit" text="Log In" />
            </div>
            {isSuccessVisible && (
              <small className={styles.success}>
                {successMsg && successMsg}
              </small>
            )}
            <small className={styles.serverErrorMsg}>
              {errorMsg && errorMsg.error}
            </small>
            <div className={styles.formFooter}>
              <p>
                Don’t have an account?
                <LinkText text="Signup Here" forwardLink="/signup" />
              </p>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Login;
