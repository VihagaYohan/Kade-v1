import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/colors";
import AppText from "./AppText";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color={Colors.mediumGrey} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems:'center',
    backgroundColor: Colors.whiteColor,
  },
  image: { width: 70, height: 70, borderRadius: 35 },
  detailsContainer: {
    flex:1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: Colors.mediumGrey,
  },
});
