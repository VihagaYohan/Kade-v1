import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import Colors from '../config/colors'
import routes from '../navigation/routes'

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  { id: 2, title: "Couch", price: 80, image: require("../assets/couch.jpg") },
  {
    id: 3,
    title: "Chair",
    price: 150,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 4,
    title: "Product 4",
    price: 200,
    image: require("../assets/background.jpg"),
  },
];

export default function ListingsScreen({navigation}) {
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
            onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
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
