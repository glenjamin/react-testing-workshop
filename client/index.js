/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";

import ConnectedApp from "./components/ConnectedApp";
import reducer from "./reducers";

import "./styles/base.css";
import "./styles/index.css";

let store = createStore(reducer);

// Enable hot module replacement for the application
if (module.hot) {
  module.hot.accept();
  module.hot.dispose((data) => { data.store = store; });
  if (module.hot.data && module.hot.data.store) {
    store = module.hot.data.store;
    store.replaceReducer(reducer);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("app")
);
