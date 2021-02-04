import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  ColorPropType,
} from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import color from "../../constants/color";

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
      <ScrollView>
        <Image style={styles.imageProp} source={{ uri: myProduct.imageUrl }} />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonStyle}
            color={color.primary}
            title="Add to Cart"
            onPress={() => {}}
          />
        </View>
        <Text style={styles.price}>${myProduct.price.toFixed(2)}</Text>
        <Text style={styles.desc}>{myProduct.description}</Text>
      </ScrollView>
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

const styles = StyleSheet.create({
  imageProp: {
    width: "100%",
    height: 250,
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontFamily: 'bangers',
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  desc: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20
  },
});

export default ProductDetailScreen;
