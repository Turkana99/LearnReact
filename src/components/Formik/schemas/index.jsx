import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format!")
    .required("Email is required!"),
  age: yup
    .number()
    .positive("Please enter positive age!")
    .integer("Pls enter only number!")
    .required("Age is required!"),
  password: yup
    .string()
    .min(5, "Please enter minimum 5 characters!")
    .matches(passwordRules, {
      message:
        "Please enter minimum one upper letter, one lower letter and one number",
    })
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password don't match")
    .required("Confirm password is required!"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Please enter minimum 3 characters!")
    .required("Username is required!"),
  university: yup
    .string()
    .oneOf(["ADNSU", "BDU", "BANM", "ADU"], "Please select your university")
    .required("University is required!"),
  isAccepted: yup.boolean().oneOf([true], "Please accept all right"),
});
