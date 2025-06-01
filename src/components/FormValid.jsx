import React from "react";
import { useFormik } from "formik";
import { FormValidationSchema } from "./form/validation/validation";
import CustomTextField from "../components/form/input-elements/CustomeTextField";

const FormValid = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          User Information Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <CustomTextField
            label="First Name"
            placeholder="Enter your first name"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstname && Boolean(errors.firstname)}
            helperText={touched.firstname ? errors.firstname : ""}
          />
          <CustomTextField
            label="Last Name"
            placeholder="Enter your last name"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastname && Boolean(errors.lastname)}
            helperText={touched.lastname ? errors.lastname : ""}
          />
          <CustomTextField
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email ? errors.email : ""}
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValid;
