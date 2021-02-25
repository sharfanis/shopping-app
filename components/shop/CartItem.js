import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../../constants/color";
const CartItem = (props) => {
  return (
    <View style={styles.cartitem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
        {props.deletable && <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartitem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: "#888",
    fontSize: 16,
    margin: 7,
    //fontFamily: 'open-sans-bold'
  },
  title: { fontSize: 16 ,  fontFamily: 'bangers' },
  amount: { fontSize: 16 ,  margin: 9 ,  fontFamily: 'open-sans-bold'},
  deleteButton: {},
});

export default CartItem;
