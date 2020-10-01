import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

import Colors from "../config/colors";

export default function AppButton({ title, onPress, color="primaryColor" }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:Colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical:10
  },
  text: {
    color: Colors.whiteColor,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
