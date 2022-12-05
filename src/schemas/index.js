import * as yup from "yup";

export const signupSchema = yup.object({
  first_name: yup
    .string()
    .min(2, "First Name must be at least 2 characters")
    .max(25)
    .required("Please enter your first name"),
  last_name: yup
    .string()
    .min(2, "Last Name must be at least 2 characters")
    .max(25)
    .required("Please enter your last name"),
  code: yup.string().max(4).required("Please enter your country code"),
  mobile: yup
    .string()
    .min(6, "Mobile no must be at least 6 characters")
    .max(15)
    .required("Please enter your mobile"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30)
    .required("Please enter your password"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email is not valid")
    .required("Please enter your email"),
  password: yup.string().min(8).max(30).required("Please enter your password"),
});
