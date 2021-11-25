import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.h1}>Pokedex</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 2,
        paddingTop: 35,
        width: "100%",
        backgroundColor: "red",
        borderBottomWidth: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    h1: {
        fontSize: 40
    }
})