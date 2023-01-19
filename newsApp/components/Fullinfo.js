import React, {useState} from "react";
import {Button, StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import { gStyle } from "../styles/style";

export default function Contacts( { route } ) {
    // const loadScene = () => {
    //     navigation.goBack();
    // }



    return (
        <View style={gStyle.main}>
            <Image style={styles.img} source={{ uri: route.params.img }} />
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
            {/*<Button title='Открыть страницу' onPress={loadScene} />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151'
    },
    header: {
        fontSize: 25,
        marginTop: 25
    },
    img: {
        width: '100%',
        height: 200
    }
});