// lib
import React from "react";
import { StyleSheet, View, Image } from "react-native";

// src
import { AppText } from "./AppText";
import colors from "../config/colors";

export const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: { color: colors.secondary, fontWeight: "bold" },
  title: { color: colors.black, marginBottom: 10 },
});
