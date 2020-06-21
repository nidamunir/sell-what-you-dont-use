// lib
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// src
import colors from "../config/colors";

export const AppButton = ({ title, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 70,
    width: "100%",
    borderRadius: 25,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
