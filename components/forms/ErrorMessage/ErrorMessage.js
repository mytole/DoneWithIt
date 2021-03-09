import React from "react";
import { View, Text } from "react-native";
import AppText from "../../Text/AppText";

import styles from "./ErrorMessage.style";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}
