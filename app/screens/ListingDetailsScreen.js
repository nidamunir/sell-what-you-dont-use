// lib
import React from "react";
import { StyleSheet, View, Image } from "react-native";

// src
import colors from "../config/colors";
import { AppText } from "../components/AppText";
import { ListItem } from "../components/ListItem";

export const ListingDetailsScreen = ({ title, subTitle, image }) => {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$200</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh"
            subTitle="5 listing"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: { fontSize: 24 },
  userContainer: {
    marginVertical: 40,
  },
});
