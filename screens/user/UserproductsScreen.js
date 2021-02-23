import React from "react";
import { View, StyleSheet, FlatList, Platform, Button } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import color from "../../constants/color";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/productAction";

const UserProductScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  // We'll use dispatch to dispatch an action.
  const dispatch = useDispatch();
  // Also we can't use useDispatch directly it has be inside a function component and then have to be used.
  // TO prevent infinite loop we'll use useCallBack and will use dispatch and the mealid as the dependency.
  const deleteProductItem = (pid) => {
    dispatch(deleteProduct(pid));
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
      >
        <Button color={color.primary} title="Edit Details" onPress={() => {}} />
        <Button
          color={color.primary}
          title="Delete"
          onPress={() => {
            deleteProductItem(product.item.id);
          }}
        />
      </ProductItem>
      // </TouchableOpacity>
    );
  };

  const navigateToProductDetailScreen = (product) => {
    props.navigation.navigate({
      routeName: "ProductDetail",
      params: {
        id: product.item.id, // Sending the data to the next screen
        title: product.item.title,
      },
    });
  };
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderProducts}
    />
  );
};

UserProductScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Products",
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

export default UserProductScreen;
