import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetails() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="Sub Title"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: Colors.secondaryColor,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer:{
      marginVertical:10
  }
});
