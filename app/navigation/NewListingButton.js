import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/style";

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={defaultStyle.colors.whiteColor}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.primaryColor,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderWidth: 10,
    borderColor: defaultStyle.colors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
