import React from "react";
import { View, Text } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../../TextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./AppFormField.style";

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
