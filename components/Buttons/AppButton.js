import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './AppButton.style';

export default function AppButton({ color, children, onPress }) {
    return (
        <TouchableOpacity style={{ backgroundColor: color, ...styles.btn }} onPress={onPress}>


            <Text style={{ ...styles.btn_text }} > {children}</Text>

        </TouchableOpacity>
    )
}