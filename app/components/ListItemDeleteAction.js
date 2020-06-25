// lib
import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// src
import colors from "../config/colors";

export const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        ></MaterialCommunityIcons>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
