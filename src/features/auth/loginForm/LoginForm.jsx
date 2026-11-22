import { Formik } from "formik";
import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
    email: yup
        .string()
        .trim()
        .email("Введіть корректний email")
        .required("Email обов'язковий"),
    password: yup
        .string()
        .trim()
        .min(8, "Password повинен мати не мешне 8 символів")
        .required("Password обов'язковий"),
});

const LoginForm = () => {
    const userInitialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, formikBag) => {
        console.log(values);
        formikBag.resetForm();
    };

    return (
        <Formik
            initialValues={userInitialValues}
            onSubmit={handleSubmit}
            validationSchema={USER_VALIDATION_SCHEMA}
        >
            {(formikProps) => {
                return (
                    <form onSubmit={formikProps.handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={formikProps.values.email}
                            onChange={formikProps.handleChange}
                            placeholder="Email"
                            autoFocus
                        />
                        <input
                            type="password"
                            name="password"
                            value={formikProps.values.password}
                            onChange={formikProps.handleChange}
                            placeholder="Password"
                        />
                        <button type="submit">Login</button>
                    </form>
                );
            }}
        </Formik>
    );
};

export default LoginForm;
