import React from 'react';
import { Image, Text, View } from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import styles from './ListingDetailScreen.style';

export default function ListingDetailScreen({ title, subTitle, profile }) {
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/jacket.jpg')}></Image>
            <View style={styles.details_container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subTitle}</Text>

            </View>
            <ListItem title={profile.name} subTitle={`${profile.listing_number} Listing`} image={require('../../assets/mosh.jpg')} />
        </View>
    )
}