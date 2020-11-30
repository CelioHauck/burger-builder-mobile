import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BurgerScreen from "./src/pages/BurgerBuilder";
import OrderListScreen from "./src/pages/OrderListScreen.js";
import LoginScreen from "./src/pages/LoginScreen";
import AccountScreen from "./src/pages/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

export default function App() {
  const Tab = createBottomTabNavigator();
  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={BurgerScreen} />
        <Tab.Screen name="Listagem" component={OrderListScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BurgerScreen"
          component={MyTabs}
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
