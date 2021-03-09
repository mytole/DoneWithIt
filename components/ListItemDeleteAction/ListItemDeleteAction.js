import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./ListItemDeleteAction.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
