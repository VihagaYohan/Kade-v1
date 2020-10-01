import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ItemSeprator from '../components/ListItemSeparator'
import Icon from "../components/Icon";
import Colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primaryColor,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondaryColor,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(m) => m.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ItemSeprator}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor={Colors.yellow}/>}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: Colors.lightGrey },
  container: {
    marginVertical: 20,
  },
});
