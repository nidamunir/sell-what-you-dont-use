// lib
import React from "react";
import { StyleSheet, View } from "react-native";

// src
import { Screen } from "../components/Screen";
import { ListItem } from "../components/ListItem";
import colors from "..//config/colors";
import { Icon } from "../components/Icon";
import { FlatList } from "react-native-gesture-handler";
import { ListItemSeparator } from "../components/ListItemSeparator";

const menuItems = [
  {
    icon: {
      name: "format-list-bulleted",
      color: colors.primary,
    },
    title: "My Listings",
  },
  {
    icon: {
      name: "email",
      color: colors.secondary,
    },
    title: "My Messages",
  },
];

export const MyAccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Nida Munir"
          subTitle="nidamunir47@outlook.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(message) => message.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.color} />
              }
            />
          )}
        />
      </View>
      <ListItem
        title={"Logout"}
        IconComponent={
          <Icon name={"logout"} backgroundColor={colors.warning} />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
