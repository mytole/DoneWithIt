import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import styles from './MessagesScreen.style';
import ListItem from '../../components/ListItem/ListItem';
import ListItemSeparator from '../../components/ListItemsSeparator/ListItemsSeparator';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/mosh.jpg'),
    }
]

export default function MessagesScreen(props) {
    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log("Message selected", item)} />}
            ItemSeparatorComponent={() => <ListItemSeparator />}
        />
    )
}
