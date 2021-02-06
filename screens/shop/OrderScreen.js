import React from "react";
import { Text, View, FlatList, StyleSheet, Platform } from "react-native";
import { useSelector } from "react-redux";
//HeaderButton Imports
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  const displayItems = (itemData) => {
    return (
      <OrderItem amount={itemData.item.totalAmount} date={itemData.item.redeableDate} />
    );
  };
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={displayItems}
    />
  );
};

OrderScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerTitle: "Your Orders",
  };
};
const styles = StyleSheet.create({});

export default OrderScreen;
