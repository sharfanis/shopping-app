import Order from "../../models/order";
import { ADD_ORDER } from "../../store/actions/orderAction";
const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const id = Math.floor(Math.random() * 100);
      const newOrder = new Order(
        id,
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );

      return { ...state, orders: state.orders.concat(newOrder) };
  }
  return state;
};

export default orderReducer;
