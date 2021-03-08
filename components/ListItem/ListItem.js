import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './ListItem.style';
import colors from '../../config/colors';

export default function ListItem({ title, subTitle, image, onPress }) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.profile}>
                <View style={styles.profile_image}>

                    <Image style={{ width: 70, height: 70 }} resizeMode="contain" source={image} />
                </View>
                <View style={styles.profile_details}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
} 