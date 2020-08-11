import * as React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox, Radio } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Formik
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
        initialValues={{
          firstName: "dos",
          lastName: "impact",
          isTall: false,
          foods: [],
          aniaml: "",
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field name="firstName" type="input" as={TextField} />
            </div>
            <div>
              <Field name="lastName" type="input" as={TextField} />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <div>
              <Field type="checkbox" name="isTall" as={Checkbox} />
            </div>
            <div>question 01 : </div>
            <Field type="checkbox" value="01" name="foods" as={Checkbox} />
            <Field type="checkbox" value="02" name="foods" as={Checkbox} />
            <Field type="checkbox" value="03" name="foods" as={Checkbox} />
            <div>question 02 : </div>
            <Field type="radio" value="01" name="aniaml" as={Radio} />
            <Field type="radio" value="02" name="aniaml" as={Radio} />
            <Field type="radio" value="03" name="aniaml" as={Radio} />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}
