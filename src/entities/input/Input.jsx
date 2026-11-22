import { Field } from "formik";

const Input = (props) => {
    const { name, label, ...restProps } = props;

    return (
        <Field name={name}>
            {({ field, form: { errors, touched }, meta }) => {
                return (
                    <label>
                        <span>{label}</span>
                        <input {...restProps} {...field} />
                        {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
};

export default Input;
