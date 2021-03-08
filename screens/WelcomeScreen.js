import React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, ImageBackground } from 'react-native';
import {
    useDimensions,
    useDeviceOrientation
} from '@react-native-community/hooks';
import colors from '../config/colors';
import AppButton from '../components/Buttons/AppButton';

export default function WelcomeScreen() {
    console.log(styles.login_btn)
    return (

        <ImageBackground blurRadius={2} style={styles.background_img} source={require("../assets/background.jpg")}>
            <View style={styles.container}>
                <View style={styles.logo_wrapper} >
                    <Image style={styles.logo_img} source={require("../assets/logo-red.png")}></Image>
                    <Text style={styles.logo_text}>Sell What You Don't Need</Text>
                </View>
                <View style={styles.btns_wrapper}>

                    <View style={styles.login_btn}>

                        <AppButton color={colors.primary} onPress={() => console.log("Tapped")}>LOGIN</AppButton>
                    </View>
                    <View style={styles.register_btn}>

                        <AppButton color={colors.secondary} onPress={() => console.log("Tapped")}>REGISTER</AppButton>
                    </View>
                </View>

            </View>
        </ImageBackground >


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
    background_img: {
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",

    },
    btns_wrapper: {
        width: '90%',



    },
    login_btn: {
        marginBottom: 20,


    },
    register_btn: {
        marginBottom: 20,
    },
    logo_img: {
        height: 100,
        width: 100,
        marginBottom: 20,
    },
    logo_wrapper: {
        justifyContent: "flex-start",
        width: '100%',
        alignItems: "center",
        flex: 1,
        top: 50,
    },
    logo_text: {
        fontSize: 23,
        fontWeight: "bold",
    }
});