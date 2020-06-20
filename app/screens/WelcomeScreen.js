// lib
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

// src
import colors from "../config/colors";

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.tagLine}>Sell what you don't use</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    marginTop: 70,
    width: 70,
    height: 70,
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 70,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.secondary,
    height: 70,
    width: "100%",
  },
  tagLine: {
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
  },
});
