import { Platform, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    btn: {

        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    btn_text: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white,

    }
})

export default styles;