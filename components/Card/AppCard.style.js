import { Platform, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    card: {

        width: "100%",
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 15,
    },
    card_title: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        marginBottom: 5,
        color: colors.black,

    },
    card_subtitle: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 18,
        fontWeight: "bold",
        color: colors.secondary,


    },
    card_image:
        { width: "100%", height: "71%", overflow: "hidden", borderTopLeftRadius: 15, borderTopRightRadius: 15, },
    card_footer: {
        padding: 16,

    }

})

export default styles;