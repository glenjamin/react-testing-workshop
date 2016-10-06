/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(
  <App
    todos={[
      {id: 1, title: "Milk", completed: false}
    ]}
    filter={"all"}
    total={1}
    completed={0}
  />,
  document.getElementById("app")
);
