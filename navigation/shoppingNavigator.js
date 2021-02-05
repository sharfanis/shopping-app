import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import ProductOverViewScreen from "../screens/shop/ProductOverViewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/color";
import { Platform } from "react-native";
import OrderScreen from "../screens/shop/OrderScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import color from "../constants/color";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.black,
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsNavigator = createStackNavigator(
  {
    ProductOverView: {
      screen: ProductOverViewScreen,
    },
    ProductDetail: {
      screen: ProductDetailScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  {
    // This option only works when your navigator is used or is a part of another navigaotr.
    //like this one is part of Shop Navigator.
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: { screen: OrderScreen },
  },
  {
    // This option only works when your navigator is used or is a part of another navigaotr.
    // like this one is part of Shop Navigator.
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
