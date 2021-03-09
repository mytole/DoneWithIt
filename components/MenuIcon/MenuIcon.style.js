import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.screen_background,
  },
  icon_img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
