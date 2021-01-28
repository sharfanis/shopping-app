import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverViewScreen = (props) => {
  // State.products.availableProdcuts here state is the state retruend and then from prodcusts we want available produicts.
  const allProducts = useSelector((state) => state.products.availableProducts);

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
        onAddCart={() => {}}
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

ProductOverViewScreen.navigationOptions = {
  headerTitle: "All Products",
};

const styles = StyleSheet.create({});

export default ProductOverViewScreen;
