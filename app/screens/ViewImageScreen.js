// lib
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
// src
import colors from "../config/colors";

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={40}
        color={"white"}
      ></MaterialCommunityIcons>
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={40}
        color={"white"}
      ></MaterialCommunityIcons>
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
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 20,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    top: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
