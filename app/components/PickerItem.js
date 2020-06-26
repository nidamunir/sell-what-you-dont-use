import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { AppText } from "./AppText";

export const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.label}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 20,
  },
});
