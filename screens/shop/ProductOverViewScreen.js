import React, { useCallback } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Platform } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
//HeaderButton Imports
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";

const ProductOverViewScreen = (props) => {
  // State.products.availableProdcuts here state is the state retruend and then from prodcusts we want available produicts.
  const allProducts = useSelector((state) => state.products.availableProducts);

  // We'll use dispatch to dispatch an action.
  const dispatch = useDispatch();
  // Also we can't use useDispatch directly it has be inside a function component and then have to be used.
  // TO prevent infinite loop we'll use useCallBack and will use dispatch and the mealid as the dependency.
  const addToCarthandler = (prod) => {
    dispatch(addToCart(prod));
  };

  const renderProducts = (product) => {
    return (
      // <TouchableOpacity onPress={() => navigateToProductDetailScreen(product)}> // this is handled inside ProductItem.
      <ProductItem
        image={product.item.imageUrl}
        title={product.item.title}
        price={product.item.price}
        onViewDetail={() => {
          navigateToProductDetailScreen(product);
        }}
        onAddCart={() => addToCarthandler(product.item)}
      />
      // </TouchableOpacity>
    );
  };

  const navigateToProductDetailScreen = (product) => {
    // console.log(product.item.price)
    props.navigation.navigate({
      routeName: "ProductDetail",
      params: {
        id: product.item.id, // Sending the data to the next screen
        title: product.item.title,
      },
    });
  };

  //   numColumns={2}
  return (
    <FlatList
      data={allProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderProducts}
    />
  );
};

ProductOverViewScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "All Products",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "Cart",
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default ProductOverViewScreen;
