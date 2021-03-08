import { Platform, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    profile: {
        padding: 20,
        flexDirection: "row",
    },
    profile_image: {
        overflow: "hidden",
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
    },
    profile_details: {

    },
    title: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        marginBottom: 2,
        color: colors.black,
    },
    subTitle: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        marginBottom: 5,
        color: "lightgray",
    }
})

export default styles;