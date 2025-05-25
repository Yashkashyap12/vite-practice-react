import React from "react";
import { useFormik } from "formik";
import { FormValidationSchema } from "./form/validation/validation";
import CustomTextField from "../components/form/input-elements/CustomeTextField";

const FormValid = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // console.log("formik---->",formik);
  return (
    <>
    hello
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <CustomTextField
          placeholder="First Name"
          name="Name"
          value={'firstName'}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors["firstName"] && touched["firstName"]}
          helperText={touched["firstName"] ? errors["firstName"] : ""}
        />
      </form>
    </>
  );
};

export default FormValid;
