import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import colors from "../config/colors";

export const AppTextInput = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
  },
  icon: {
    marginRight: 10,
  },
});
