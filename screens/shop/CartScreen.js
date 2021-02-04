import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import color from "../../constants/color";
import ProductItem from "../../components/shop/ProductItem";
import CartItem from "../../components/shop/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/actions/cartAction";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const renderProducts = (product) => {
    return (
      <CartItem
        title={product.item.productTitle}
        quantity={product.item.quantity}
        amount={product.item.sum}
        onRemove={() => removeItemFromCartHandler(product.item.productId)}
      />
    );
  };

  // We'll use dispatch to dispatch an action.
  const dispatch = useDispatch();
  // Also we can't use useDispatch directly it has be inside a function component and then have to be used.
  // TO prevent infinite loop we'll use useCallBack and will use dispatch and the mealid as the dependency.
  const removeItemFromCartHandler = (pid) => {
    dispatch(deleteFromCart(pid));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total :
          <Text style={styles.amount}>
            {" "}
            ${cartTotalAmount.toFixed(2).replace("-0", "0")}
          </Text>
        </Text>
        {/* <Button 
          color={color.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
        /> */}
        <TouchableOpacity disabled={cartItems.length === 0}>
          <Text
            style={{
              color: cartItems.length === 0 ? 'grey' : color.black,
              fontSize: 19,
              fontFamily: "open-sans-bold",
            }}
          >
            ORDER NOW
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.cartText}>CART ITEMS</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={renderProducts}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: color.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  orderStyle: {
    fontFamily: "bangers",
  },
  cartList: {
    shadowColor: color.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontSize: 18,
  },
  cartText: {
    fontSize: 18,
    marginBottom: 20,
  },
  amount: {
    color: color.primary,
    fontFamily: "open-sans-bold",
  },
});

export default CartScreen;
