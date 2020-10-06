import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BurgerBuilder from './src/pages/BurgerBuilder';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BurgerScreen" component={BurgerBuilder} options={{
          title: 'Montagem do Hamburger',
          headerStyle: {
            backgroundColor: '#3f68d1',
            borderBottomColor: '#fff',
            borderBottomWidth: 1

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

