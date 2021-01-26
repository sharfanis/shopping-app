import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ProductOverViewScreen = (props) => {
  // State.products.availableProdcuts here state is the state retruend and then from prodcusts we want available produicts.
  const allProducts = useSelector((state) => state.products.availableProducts);

  const renderProducts = (product) => {
    return (
      <View style={styles.textStyleProduct}>
        <Text>{product.item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={allProducts}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderProducts}
    />
  );
};

ProductOverViewScreen.navigationOptions = {
  headerTitle: "All Products",
};

 const styles = StyleSheet.create({
   textStyleProduct: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    }
 });

export default ProductOverViewScreen;
