import React from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./AppTextInput.style";
import AppText from "../Text/AppText";
import colors from "../../config/colors";

export default function AppTextInput({ iconName, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={colors.gray}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}
