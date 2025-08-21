import React from "react";
import "./Formik.css";
import { Form, Formik } from "formik";
import CustomInput from "./schemas/CustomInput";
import CustomSelect from "./schemas/CustomSelect";
import { advancedSchema } from "./schemas";
import CustomCheckbox from "./schemas/CustomCheckbox";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter username"
            />
            <CustomSelect
              label="University"
              name="university"
              placeholder="Please select your university"
            >
              <option value="">Please select university</option>
              <option value="ADNSU">
                Azərbaycan Dövlət Neft və Sənaye Universiteti
              </option>
              <option value="BDU">Bakı Dövlət Universiteti</option>
              <option value="BANM">Bakı Ali Neft Məktəbi</option>
              <option value="ADU">Azərbaycan Dillər Universiteti</option>
            </CustomSelect>

            <CustomCheckbox type="checkbox" name="isAccepted"></CustomCheckbox>
            <button type="submit" className="send-btn" disabled={isSubmitting}>
              Save
            </button>
            <Link className="formLink" to="/">
              Back to general form
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
