import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// components
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from './app/components/Card'

// screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    <ViewImageScreen/>
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
