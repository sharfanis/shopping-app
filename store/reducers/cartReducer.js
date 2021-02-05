import { ADD_TO_CART } from "../actions/cartAction";
import { DELETE_FROM_CART } from "../actions/cartAction";
import CartItem from "../../models/cart-item";
import { ADD_ORDER } from "../actions/orderAction";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start of case 1
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    // End of case 1

    // Start of case 2
    case DELETE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      let updatedCartItems;
      if (selectedCartItem.quantity === 1) {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      } else {
        // need to reduce the quantity and not erase it.
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );

        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
    // End of case 2

    // Start of Case 3
    case ADD_ORDER:
      return initialState;
    // End of case 3
  }

  return state;
};

export default cartReducer;
