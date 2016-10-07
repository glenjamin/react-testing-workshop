import React from "react";

import devboard from "devboard";

const definecard = devboard.ns("1. <AddTodo />");

import DemoBox from "./DemoBox";
import AddTodo from "../components/AddTodo";

definecard(
  `
  This component contains the main input box for adding
  new todo items
  `
);

definecard("When empty",
  <DemoBox>
    <AddTodo />
  </DemoBox>
);

definecard("With content filled in",
  <DemoBox>
    <AddTodo ref={(ref) => {
      if (!ref) return;
      ref.setState({value: "Add a new todo"})
    }}/>
  </DemoBox>
);
