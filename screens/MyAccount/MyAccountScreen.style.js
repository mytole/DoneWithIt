import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.screen_background,
  },
  section: {
    marginBottom: 20,
    backgroundColor: colors.white,
    width: "100%",
  },
});

export default styles;
