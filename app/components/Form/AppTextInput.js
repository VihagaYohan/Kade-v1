import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../config/colors";
import defaultStyles from "../../config/style";

export default function AppTextInput({ icon,width="100%", ...otherProps }) {
  return (
    <View style={[styles.container, {width:width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.mediumGrey}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
