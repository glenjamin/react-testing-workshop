import {update} from "./utils";

import todosReducer from "./todos";

const filters = {
  all: () => true,
  active: ({completed}) => !completed,
  completed: ({completed}) => completed
};

// Wrap the TODOs reducer with filtering
export default function reducer(state, action) {
  if (!state) {
    state = {
      todos: todosReducer(undefined, action),
      filter: "all"
    };
  }
  switch (action.type) {
    case "SET_FILTER": {
      if (!filters[action.filter]) {
        // in real life, we might store an error here
        return state;
      }
      return update(state, {filter: action.filter});
    }
  }
  return update(state, {todos: todosReducer(state.todos, action)});
}


// Selectors which expose the application state for components
// in a real life app we might use reselect to speed things up

export function getTodos(state) {
  return state.todos.filter(filters[state.filter]);
}

export function getFilter(state) {
  return state.filter;
}

export function getCounts(state) {
  let total = 0, completed = 0;
  state.todos.forEach((todo) => {
    total += 1;
    completed += todo.completed ? 1 : 0
  });
  return {total, completed};
}
