// lib
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// src
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { AppButton } from "./app/components/AppButton";
import { AppCard } from "./app/components/AppCard";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";
import { MessagesScreen } from "./app/screens/MessagesScreen";
import { Screen } from "./app/components/Screen";
import { Icon } from "./app/components/Icon";
import { ListingsScreen } from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
