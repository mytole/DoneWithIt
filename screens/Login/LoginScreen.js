import React from "react";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/Screen/Screen";
import styles from "./LoginScreen.style";
import { AppFormField, SubmitButton, AppForm } from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.inputsWrapper}>
          <AppFormField
            name="email"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            iconName="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            iconName="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
        </View>

        <SubmitButton>LOGIN</SubmitButton>
      </AppForm>
    </Screen>
  );
}
