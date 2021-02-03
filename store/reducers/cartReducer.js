import { ADD_TO_CART } from "../actions/cartAction";
import CartItem from "../../models/cart-item";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let newItemOrUpdatedItem;
      // first we check if the item exists in items cart .
      if (state.items[addedProduct.id]) {
        newItemOrUpdatedItem = new CartItem(
          state.item[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.item[addedProduct.id].sum + prodPrice
        );
      } else {
        // First time adding the value.
        newItemOrUpdatedItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      // this will add the item to the list of items.
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: newItemOrUpdatedItem },
        totalAmount: state.totalAmount + prodPrice,
      };

    default:
      return state;
  }

};

export default cartReducer;
