import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import color from "../../constants/color";

const OrderItem = (props) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button color={color.primary} title="Show Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: color.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
  },
  totalAmount: {
      fontFamily: 'open-sans-bold',
      fontSize: 16
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: '#888'
  }
});

export default OrderItem;
