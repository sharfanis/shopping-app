import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductDetailScreen = (props) => {
  const prodId = props.navigation.getParam("id");
  //const prodTitle = props.navigation.getParam("title");
  const allProducts = useSelector((state) => state.products.availableProducts);
  const myProduct = allProducts.find((prod) => prod.id === prodId);

  // We can use this logic but there is slight delay due to calculation why not just pass the value of title in a param .
  // useEffect(() => {
  //     // goes to navigation options for setting the header.
  //   props.navigation.setParams({ ptitle: prodTitle });
  // }, [prodTitle]);

  return (
    <View>
      <Text>{myProduct.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navigationData) => {
    //Extracting what is set above as a Param. 
  const headerTitleForProduct = navigationData.navigation.getParam("title");
  return {
    headerTitle: headerTitleForProduct,
  };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
