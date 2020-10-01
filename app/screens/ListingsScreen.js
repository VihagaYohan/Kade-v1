import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import Colors from '../config/colors'

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  { id: 2, title: "Couch", price: 100, image: require("../assets/jacket.jpg") },
  {
    id: 3,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(l) => l.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen:{
        padding:20, 
        backgroundColor:Colors.lightGrey
    }
});
