import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BurgerScreen from "./src/pages/BurgerBuilder";
import LoginScreen from "./src/pages/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BurgerScreen"
          component={BurgerScreen}
          options={{
            title: "Montagem do Hamburger",
            headerStyle: {
              backgroundColor: "#cf8f2f",
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
