import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: Platform.OS === 'ios' ? 60 : 50,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        color: 'red',
        fontStyle: 'bold',
        textAlign: 'center'
    }
});