import React from "react";
import { useFormik } from "formik";
import { basicSchemas } from "./schemas";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};
function GeneralForm() {
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchemas,
    onSubmit,
  });

  //   console.log(formik);

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          placeholder="Enter your email address"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Confirm Password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          placeholder="Enter your confirm password"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit" className="send-btn" disabled={isSubmitting}>
        Save
      </button>
      <Link className="formLink" to="/portal">
        Portal form
      </Link>
    </form>
  );
}

export default GeneralForm;
