import React, { InputHTMLAttributes } from "react";
import { FieldProps } from "formik";

// type InputProps = React.DetailedHTMLProps<
//     React.InputHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement
// > & {
//   label: string;
//   name: string;
//   textarea?: boolean;
// };
type InputProps = InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

export const InputField: React.FC<FieldProps & InputProps> = ({
    label,
    textarea,
    field,
    form: { errors, touched },
    ...props
}) => {

    const errorMessage = touched[field.name] && errors[field.name];
    return (
        <>
            <label htmlFor={label}>{label}</label>
            {textarea ? (<textarea {...field} {...props} />) : (<input {...field} {...props} />)}
            {/* <input {...field} {...props} /> */}
            {errorMessage && <p>{errorMessage}</p>}
            <style jsx>{`
                p {
                    color: red;
                }
            `}</style>
        </>
    );
};
