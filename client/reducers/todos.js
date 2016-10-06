import {append, update, updateArrayById} from "./utils";

// Dummy data only in the browser
const initial = typeof window === "undefined" ? [] : [
  {
    id: 1,
    title: "Buy Milk",
    completed: true
  },
  {
    id: 2,
    title: "Drink Milk",
    completed: false
  },
  {
    id: 3,
    title: "Prepare Workshop",
    completed: true
  },
  {
    id: 4,
    title: "Run Successful Workshop",
    completed: false
  }
];

function nextId(state) {
  return Math.max(0, ...state.map((i) => i.id)) + 1;
}

export default function reducer(state = initial, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return append(state, {
        id: nextId(state),
        title: action.title,
        completed: false
      })
    }
    case "TOGGLE_TODO": {
      return updateArrayById(state, action.id,
        (todo) => update(todo, {completed: !todo.completed})
      );
    }
    case "EDIT_TODO": {
      return updateArrayById(state, action.id,
        (todo) => update(todo, {title: action.title})
      );
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.id);
    }
    case "SET_ALL": {
      return state.map((todo) => update(todo, {completed: action.completed}));
    }
    case "CLEAR_COMPLETED": {
      // eslint-disable-next-line
      alert("Not implemented - your turn");
    }
  }
  return state;
}
