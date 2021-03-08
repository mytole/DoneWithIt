import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './AppCard.style';

export default function AppCard({ title, subTitle, image }) {
    return (

        <View style={styles.card}>
            {/**image text header text subheader */}
            <Image style={styles.card_image} source={require('../../assets/jacket.jpg')} />
            <View style={styles.card_footer}>

                <Text style={styles.card_title}>{title}</Text>
                <Text style={styles.card_subtitle}>{subTitle}</Text>
            </View>
        </View>
    )
}