import React from "react";
// lib
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: Constants.statusBarHeight,
});
