import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import defaultStyles from "../config/styles";

export const AppTextInput = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
});
