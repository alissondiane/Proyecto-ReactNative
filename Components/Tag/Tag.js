import React from 'react';
import {StyleSheet, Text, View, StatusBar} from "react-native";

const Tag = (props) => (
    <View style={styles.header}>

        <StatusBar
            backgroundColor="#ea5252"
            barStyle="light-content"
        />

        <Text style={styles.headerTitle}>{props.name}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#ea5252',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle : {
        fontSize: 20,
        color: 'white'
    }
});

export default header;