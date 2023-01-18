import React, {useState} from 'react';
import {
    FlatList,
    StyleSheet, Text,
    View
} from 'react-native';
import Header from "./components/Header";
import Listitem from "./components/Listitem";
import Form from "./components/Form";

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        {text: 'Купить молоко', key: '1'},
        {text: 'Купить хлеб', key: '2'},
        {text: 'Купить яйца', key: '3'},
        {text: 'Купить яблок', key: '4'},
    ])
    const addHandler = (text) => {
        setListOfItems((list) => {
            return [
                {text: text, key: Math.random().toString(36).substring(7)},
                ...list
            ]

        })
    }

    const deleteHandler = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        });
    }
    return (
    <View>
        <Header />
        <Form addHandler={addHandler} />
        <View>
            <FlatList data={listOfItems} renderItem={({ item }) => (
               <Listitem el={item} deleteHandler={deleteHandler} />
            )} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
