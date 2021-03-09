import React from "react";
import { View, Text } from "react-native";
import styles from "./MenuIcon.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../Text/AppText";

export default function MenuIcon({ backgroundColor, name, iconDescription }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.icon_img, backgroundColor }}>
        <MaterialCommunityIcons name={name} size={30} color={colors.white} />
      </View>
      <AppText style={styles.description}>{iconDescription}</AppText>
    </View>
  );
}
