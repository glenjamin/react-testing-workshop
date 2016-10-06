import {append} from "./utils";

const initial = [
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
  }
  return state;
}
