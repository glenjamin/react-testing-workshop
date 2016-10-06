export function addTodo(title) {
  return {type: "ADD_TODO", title};
}

export function toggleTodo(id) {
  return {type: "TOGGLE_TODO", id};
}

export function editTodo(id, title) {
  return {type: "EDIT_TODO", id, title};
}

export function removeTodo(id) {
  return {type: "REMOVE_TODO", id};
}

export function selectFilter(filter) {
  return {type: "SET_FILTER", filter};
}

export function setAll(completed) {
  return {type: "SET_ALL", completed};
}

export function clearCompleted() {
  return {type: "CLEAR_COMPLETED"};
}
