// lib
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// src
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { AppButton } from "./app/components/AppButton";
import { AppCard } from "./app/components/AppCard";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
