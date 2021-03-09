import React from "react";
import { View, Text } from "react-native";
import styles from "./Screen.style";

export default function Screen({ style, children }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}
