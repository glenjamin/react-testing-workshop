import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default class App extends React.Component {
  static propTypes = {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        completed: React.PropTypes.bool,
      })
    ).isRequired,
    filter: React.PropTypes.oneOf([
      "all", "active", "completed"
    ]).isRequired,
    total: React.PropTypes.number.isRequired,
    completed: React.PropTypes.number.isRequired,
  };
  render() {
    const {todos, filter, total, completed} = this.props;
    return (
      <section className="todoapp">
        <Header addTodo={() => {}} />
        <Main
          todos={todos}
          setAll={() => {}}
          toggleTodo={() => {}}
          editTodo={() => {}}
          removeTodo={() => {}}
        />
        <Footer
          filter={filter}
          completed={completed}
          total={total}
          selectFilter={() => {}}
          clearCompleted={() => {}}
        />
      </section>
    );
  }
}
