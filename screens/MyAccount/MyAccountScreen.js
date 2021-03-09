import React from "react";
import { View, Text } from "react-native";
import styles from "./MyAccountScreen.style";
import ListItem from "../../components/ListItem/ListItem";
import colors from "../../config/colors";
import MenuIcon from "../../components/MenuIcon/MenuIcon";

export default function MyAccountScreen({ profile }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, ...styles.section }}>
        <ListItem
          title={profile.name}
          subTitle={profile.email}
          image={profile.image}
          onPress={() => console.log("hi")}
        />
      </View>
      <View style={styles.section}>
        <MenuIcon
          name="format-list-bulleted"
          backgroundColor={colors.danger}
          iconDescription="My Listing"
        />
        <MenuIcon
          name="email"
          backgroundColor={colors.secondary}
          iconDescription="My Messages"
        />
      </View>
      <View style={styles.section}>
        <MenuIcon
          name="logout"
          backgroundColor={colors.warning}
          iconDescription="Log Out"
        />
      </View>
    </View>
  );
}
