import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import authReducer from "./store/reducers/authReducer";
import productsReducer from "./store/reducers/products";
import errorReducer from "./store/reducers/errorReducer";
import shopReducer from "./store/reducers/shop";
import modalReducer from "./store/reducers/modalReducer";
import cartReducer from "./store/reducers/cart";
import adminReducer from "./store/reducers/admin";

import store from "./store";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  shop: shopReducer,
  error: errorReducer,
  modal: modalReducer,
  cart: cartReducer,
  admin: adminReducer,
});

/*const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);*/

axios.defaults.baseURL = "http://localhost:5000";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
