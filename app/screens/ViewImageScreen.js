// lib
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

// src
import colors from "../config/colors";

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 40,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    top: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
