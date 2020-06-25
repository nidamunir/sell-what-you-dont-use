// lib
import React from "react";
import { StyleSheet, View } from "react-native";

// src
import colors from "../config/colors";

export const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.light,
    width: "100%",
  },
});
