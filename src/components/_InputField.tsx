import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
//   Textarea,
// } from "@chakra-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

// '' => false
// 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  let InputOrTextarea = 'input';
  if (textarea) {
    InputOrTextarea = 'textarea';
  }
  const [field, { error }] = useField(props);
  return (
    // <FormControl isInvalid={!!error}>
      // <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <>
      <label htmlFor={field.name}>{label}</label>
      <InputOrTextarea {...field} {...props} />
      </>
      // {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    // </FormControl>
  );
};
