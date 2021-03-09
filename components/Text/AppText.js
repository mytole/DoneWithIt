import React from "react";
import { View, Text } from "react-native";
import styles from "./AppText.style";

export default function AppText({ children, style }) {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
}
