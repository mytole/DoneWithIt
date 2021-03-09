import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Platform,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import AppButton from "./components/Buttons/AppButton";
import AppCard from "./components/Card/AppCard";
import colors from "./config/colors";
import ListingDetailScreen from "./screens/ListingDetail/ListingDetailScreen";
import ListItem from "./components/ListItem/ListItem";
import MessagesScreen from "./screens/Messages/MessagesScreen";
import MyAccountScreen from "./screens/MyAccount/MyAccountScreen";
import ListingsScreen from "./screens/Listings/ListingsScreen";
import AppText from "./components/Text/AppText";
import AppTextInput from "./components/TextInput/AppTextInput";
import AppPicker from "./components/Picker/AppPicker";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import ListingEditScreen from "./screens/Listings/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const handleOnPress = () => console.log("btn clicked");
  const handleOnPress2 = () =>
    Alert.prompt("My title", "My message", (text) => console.log(text));
  const { landscape } = useDeviceOrientation();

  const [switchcaseyo, setSwitchCaseYo] = useState(false);

  const [category, setCategory] = useState();

  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <AppButton color={colors.primary} onPress={() => console.log("Tapped")}>LOGIN</AppButton> */}
      {/* <AppCard subTitle="$100" title="Red jacket for sale!" /> */}
      {/* <ListingDetailScreen profile={{ name: "Mosh Hamedani", listing_number: "5" }} subTitle="$100" title="Red jacket for sale!" /> */}
      {/* <MessagesScreen /> */}
      {/* <MyAccountScreen
        profile={{
          image: require("./assets/mosh.jpg"),
          name: "Mosh Hamedani",
          email: "programmingwithmosh@gmail.com",
        }}
      /> */}
      {/* <ListingsScreen /> */}
      {/* <AppTextInput placeholder="hiiiii" iconName={"email"} /> */}
      {/* <Switch
        value={switchcaseyo}
        onValueChange={(newValue) => setSwitchCaseYo(newValue)}
      /> */}
      {/* <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        iconName="apps"
        placeholder="Category"
      /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <ListingEditScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
