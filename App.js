import React, { useState } from "react";
//Redux special Imports
import { createStore, combineReducers } from "redux";
import productReducer from "./store/reducers/productReducer";
import cartReducer from "./store/reducers/cartReducer";
import orderReducer from "./store/reducers/orderReducer";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import { LogBox } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ShoppingNavigator from "./navigation/shoppingNavigator";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
});

// Add compose with dev tools only fro DEV not for PROD !!!!!
const appStore = createStore(rootReducer, composeWithDevTools());
//const appStore = createStore(rootReducer);
// Telling react to use optmized screen component. its a good practice.
enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    imbue: require("./assets/fonts/Imbue.ttf"),
    "imbue-bold": require("./assets/fonts/Imbue-Bold.ttf"),
    bangers: require("./assets/fonts/Bangers-Regular.ttf"),
  });
};

export default function App() {
  // Ignoring All warnings except errors.
  LogBox.ignoreAllLogs(true);

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log(err)}
      />
    );
  }

  return (
    <Provider store={appStore}>
      <ShoppingNavigator />
    </Provider>
  );
}
