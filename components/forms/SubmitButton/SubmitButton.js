import React from "react";
import { View, Text } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../../Buttons/AppButton";
import colors from "../../../config/colors";

export default function SubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton color={colors.primary} onPress={handleSubmit}>
      {children}
    </AppButton>
  );
}
