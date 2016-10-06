import React from "react";

import TodoItem from "./TodoItem";

export default class Main extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    setAll: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired,
    editTodo: React.PropTypes.func.isRequired,
    removeTodo: React.PropTypes.func.isRequired,
  };
  render() {
    var {
      todos,
      setAll, toggleTodo, editTodo, removeTodo
    } = this.props;
    if (todos.length === 0) {
      return null;
    }
    var all = todos.every(todo => todo.completed);
    return (
      <section className="main">
        <input
          className="toggle-all" type="checkbox"
          checked={all} onChange={() => setAll(!all)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) =>
            <TodoItem
              key={todo.id}
              todo={todo}
              edit={(title) => editTodo(todo.id, title)}
              remove={() => removeTodo(todo.id)}
              toggle={() => toggleTodo(todo.id)}
            />
          )}
        </ul>
      </section>
    );
  }
}
