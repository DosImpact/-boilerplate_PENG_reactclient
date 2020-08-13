import * as React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
// import { TextField, Button, Checkbox, Radio } from "@material-ui/core";

const DisplayState = (props) => {
  return (
    <div>
      <pre
        style={{
          backgroundColor: "#f6f8fa",
          padding: ".5rem",
          fontSize: "1rem",
        }}
      >
        <strong>props </strong> = {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};
const DefaultCom = ({ name = "sample", age = 10 }) => {
  return (
    <>
      <div>your name {name}</div>
      <div>your age {age}</div>
    </>
  );
};

export default function App() {
  const formik = useFormik({
    initialValues: { email: "", emailVal: "" },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log(data);
      setSubmitting(false);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("email 형식 틀림").required("required"),
      emailVal: Yup.string().email("email 형식 틀림").required("required"),
    }),
  });

  return (
    <div className="App">
      <DefaultCom />
      <h1>Hello Formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
        <button
          type="button"
          disabled={!formik.dirty || formik.isSubmitting}
          onClick={formik.handleReset}
        >
          Reset
        </button>
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
        <DisplayState {...formik} />
      </form>
    </div>
  );
}
