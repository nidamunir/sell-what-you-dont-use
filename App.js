// lib
import React, { useState } from "react";
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
import { AppTextInput } from "./app/components/AppTextInput";
import { AppPicker } from "./app/components/AppPicker";

const items = [
  {
    value: 1,
    label: "Clothes",
  },
  {
    value: 2,
    label: "Furniture",
  },
];

export default function App() {
  const [category, setCategory] = useState(items[0]);

  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={items}
        selectedItem={category}
        onSelectItem={(category) => setCategory(category)}
      />
      <AppTextInput icon="email" placeholder="Username" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
