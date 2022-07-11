import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
