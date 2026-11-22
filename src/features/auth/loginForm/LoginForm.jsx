import { Formik } from "formik";
import * as yup from "yup";
import Input from "../../../entities/Input/Input";
import styles from "./LoginForm.module.scss";

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

    const classes = {
        field: styles.field,
        error: styles.error,
        input: styles.input,
        valid: styles.valid,
        invalid: styles.invalid,
    };

    return (
        <Formik
            initialValues={userInitialValues}
            onSubmit={handleSubmit}
            validationSchema={USER_VALIDATION_SCHEMA}
        >
            {(formikProps) => {
                return (
                    <form
                        className={styles.form}
                        onSubmit={formikProps.handleSubmit}
                    >
                        <Input
                            label="Email:"
                            type="email"
                            name="email"
                            placeholder="Email"
                            classes={classes}
                            autoFocus
                        />
                        <Input
                            label="Password:"
                            type="password"
                            name="password"
                            placeholder="Password"
                            classes={classes}
                        />
                        <button className={styles.submit} type="submit">
                            Login
                        </button>
                    </form>
                );
            }}
        </Formik>
    );
};

export default LoginForm;
