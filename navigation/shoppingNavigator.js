import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import ProductOverViewScreen from "../screens/shop/ProductOverViewScreen";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/color";
import { Platform } from "react-native";

const ShoppingNavigator = createStackNavigator(
  {
    ProductOverView: {
      screen: ProductOverViewScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS ==='android' ? "white" : Colors.primary,
    },
  }
);

const styles = StyleSheet.create({});

export default createAppContainer(ShoppingNavigator);
