import React from "react";
import { View, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen/Screen";
import styles from "./RegisterScreen.style";
import { AppFormField, SubmitButton, AppForm } from "../../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
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
            name="name"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Name"
            iconName="account"
            keyboardType="default"
            textContentType="name"
          />
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

        <SubmitButton>REGISTER</SubmitButton>
      </AppForm>
    </Screen>
  );
}
