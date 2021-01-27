import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverViewScreen = (props) => {
  // State.products.availableProdcuts here state is the state retruend and then from prodcusts we want available produicts.
  const allProducts = useSelector((state) => state.products.availableProducts);

  const renderProducts = (product) => {
    return (
      <View>
        <ProductItem
          image={product.item.imageUrl}
          title={product.item.title}
          price={product.item.price}
          onViewDetail={()=>{}}
          onAddCart={()=>{}}
        />
      </View>
    );
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

const styles = StyleSheet.create({
});

export default ProductOverViewScreen;
