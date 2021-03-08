import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container} >
            <View style={styles.btns_wrapper}>
                <View style={styles.close_btn}>
                    <MaterialCommunityIcons color="#fff" name="close" size={35} />
                </View>
                <View style={styles.delete_btn}>
                    <MaterialCommunityIcons color="#fff" name="trash-can-outline" size={35} />
                </View>
            </View>
            <Image style={styles.img} resizeMode="contain" source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: colors.black,
    },
    btns_wrapper: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 20,
    },
    img: {
        width: "100%",
        height: "90%"
    },

    close_btn: {
        width: 60,
        height: 60,

    },
    delete_btn: {
        width: 60,
        height: 60,
        alignItems: "flex-end",

    }
})

export default ViewImageScreen;