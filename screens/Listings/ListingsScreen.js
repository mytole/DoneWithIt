import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./ListingsScreen.style";
import AppCard from "../../components/Card/AppCard";

import Screen from "../../components/Screen/Screen";

//fake data
const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition!",
    price: 1000,
    image: require("../../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
