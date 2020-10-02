import React, { useState } from "react";
import { StyleSheet, View, TextInput, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// components
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/Form/AppTextInput";
import AppPicker from "./app/components/AppPicker";

// screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Food", value: 3 },
  { label: "Stationary Items", value: 4 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState();
  return (
    <ListingEditScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    /* alignItems: "center",
    justifyContent: "center", */
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
