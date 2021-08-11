import { Form, Button, Space } from "antd";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";

const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial

  const signupFormSchema = Yup.object().shape({
    username: Yup.string()
      .required("This field is required")
      .min(3, "This field must be at least 3 characters"),
    password: Yup.string()
      .required("This field is required")
      .min(6, "This field must be at least 6 characters"),
  });

  const handleSubmit = (values: IForm) => {
    console.log(values);
  };

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={signupFormSchema}
        onSubmit={handleSubmit}
      >
        <form id="signupForm">
          {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
          <label htmlFor="username">Username </label>
          <Field id="username" name="username" placeholder="mahdi" />
          <ErrorMessage name="username" />

          {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
          <br />
          <br />
          <label htmlFor="password">Password </label>
          <Field id="password" name="password" placeholder="Qwerty12345" />
          <ErrorMessage name="password" />

          <br />
          <br />
          <Space>
            <Button type="primary" htmlType="submit">
              submit
            </Button>
            <Button
              htmlType="reset"
              onClick={() => {
                // TODO: reset form with formik
                resetForm;
              }}
            >
              reset
            </Button>
          </Space>
        </form>
      </Formik>
    </div>
  );
}
