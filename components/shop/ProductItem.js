import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import color from '../../constants/color';

const ProductItem =  (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComp onPress={props.onViewDetail}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.controle}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.action}>
              {props.children}
            </View>
          </View>
        </TouchableComp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: color.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden", //will make sure any child(styles.image) inside the image container shouldn't overlap the parent (styles.imageContainer)
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: 'bangers',
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: 'bangers',
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  controle: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

export default ProductItem;
