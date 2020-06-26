// lib
import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

// src
import { AppText } from "./AppText";
import colors from "../config/colors";

export const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderLeftActions,
  renderRightActions,
}) => {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  subTitle: {
    color: colors.medium,
  },
});
