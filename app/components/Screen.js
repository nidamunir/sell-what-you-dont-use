import React from "react";
// lib
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});
