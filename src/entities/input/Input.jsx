import classNames from "classnames";
import { Field } from "formik";

const Input = (props) => {
    const { name, label, classes, ...restProps } = props;

    return (
        <Field name={name}>
            {({ field, meta }) => {
                const inputClasses = classNames(classes.input, {
                    [classes.valid]: !meta.error && meta.touched,
                    [classes.invalid]: meta.error && meta.touched,
                });

                const errorClasses = classNames(classes.error, {
                    [classes.valid]: !meta.error && meta.touched,
                    [classes.invalid]: meta.error && meta.touched,
                });

                return (
                    <label className={classes.field} htmlFor={name}>
                        <span>{label}</span>
                        <input
                            {...restProps}
                            {...field}
                            className={inputClasses}
                        />
                        {meta.error && meta.touched && (
                            <span className={errorClasses}>{meta.error}</span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
};

export default Input;
