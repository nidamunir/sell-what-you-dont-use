import React from "react";
// lib
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});
