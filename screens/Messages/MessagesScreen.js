import React, { useState } from "react";
import { Image, Text, View, FlatList } from "react-native";
import styles from "./MessagesScreen.style";
import ListItem from "../../components/ListItem/ListItem";
import ListItemSeparator from "../../components/ListItemsSeparator/ListItemsSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction/ListItemDeleteAction";

const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
];

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(intialMessages);
  const [refreshing, setRefreshin] = useState(false);

  const handleDelete = (message) => {
    //delete the message from messages
    //call the server
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <FlatList
      style={styles.container}
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={() => <ListItemSeparator />}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../../assets/mosh.jpg"),
          },
        ]);
      }}
    />
  );
}
