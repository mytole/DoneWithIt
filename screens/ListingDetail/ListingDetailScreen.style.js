import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",

    },
    image: {
        width: "100%",
        height: "30%",
    },
    details_container: {
        padding: 20,
    },
    title: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        marginBottom: 5,
        color: colors.black,

    },
    subtitle: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        fontWeight: "bold",
        color: colors.secondary,

    },
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
    profile_name: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        marginBottom: 2,
        color: colors.black,
    },
    profile_listing: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        marginBottom: 5,
        color: "lightgray",
    }
})

export default styles;