import React from "react";

import devboard from "devboard";

const definecard = devboard.ns("2. <TodoItem />");

import DemoBox from "./DemoBox";
import TodoItem from "../components/TodoItem";

definecard(
  `
  This component represents an item in the todo list
  `
);

definecard("Uncompleted",
  demoTodo({title: "Buy Milk", completed: false})
);
definecard("Completed",
  demoTodo({title: "Buy Cereal", completed: true})
);
definecard("Editing Uncompleted",
  demoTodo({title: "Buy Cheese", completed: false}, {
    forceEditing: true
  })
);
definecard("Editing Completed",
  demoTodo({title: "Enjoy Colombia", completed: true}, {
    forceEditing: true
  })
);

function demoTodo(todo, props={}) {
  return (
    <DemoBox>
      <ul className="todo-list">
        <TodoItem todo={todo} {...props} />
      </ul>
    </DemoBox>
  );
}
