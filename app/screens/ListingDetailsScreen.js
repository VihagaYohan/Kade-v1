import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetails({ route }) {
  const listing = route.params;
  console.log(listing)
  return (
    <View>
      <Image style={styles.image} source={listing.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
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
  userContainer: {
    marginVertical: 10,
  },
});
