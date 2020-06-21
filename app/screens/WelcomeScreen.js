// lib
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

// src
import colors from "../config/colors";
import { AppButton } from "../components/AppButton";

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.tagLine}>Sell what you don't use</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color={"secondary"} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    marginTop: 70,
    width: 70,
    height: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
  },
});
