import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

import Colors from "../config/colors";
import defaultStyles from "../config/style";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
