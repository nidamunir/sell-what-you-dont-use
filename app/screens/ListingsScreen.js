// lib
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";

// src
import { AppCard } from "../components/AppCard";
import { ListItemSeparator } from "../components/ListItemSeparator";
import colors from "../config/colors";
import { Screen } from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Excellent Condition",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];

export const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light, padding: 10 },
});
