import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCTS } from '../actions/productAction';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCTS:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (item) => item.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (x) => x.id !== action.pid
        ),
      };
      break;
  }
  return state;
};

export default productReducer;
