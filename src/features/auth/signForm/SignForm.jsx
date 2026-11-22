import { Formik } from "formik";
import * as yup from "yup";
import Input from "../../../entities/Input/Input";
import styles from "../Form.module.scss";

const USER_VALIDATION_SCHEMA = yup.object({
    firstName: yup
        .string()
        .trim()
        .min(2, "Повино бути не менше 2 символів")
        .max(36, "Повино бути не більше 36 символів")
        .required("First name обов'язкове"),
    lastName: yup
        .string()
        .trim()
        .min(2, "Повино бути не менше 2 символів")
        .max(36, "Повино бути не більше 36 символів")
        .required("Last name обов'язкове"),
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
    passwordConf: yup
        .string()
        .oneOf([yup.ref("password")], "Паролі повині співпадати")
        .required("Password confirmation обов'язкове"),
});

const SignForm = () => {
    const userInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConf: "",
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
                            label="First name:"
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            classes={classes}
                            autoFocus
                        />
                        <Input
                            label="Last name:"
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            classes={classes}
                        />
                        <Input
                            label="Email:"
                            type="email"
                            name="email"
                            placeholder="Email"
                            classes={classes}
                        />
                        <Input
                            label="Password:"
                            type="password"
                            name="password"
                            placeholder="Password"
                            classes={classes}
                        />
                        <Input
                            label="Password confirmation:"
                            type="password"
                            name="passwordConf"
                            placeholder="Password confirmation"
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

export default SignForm;
