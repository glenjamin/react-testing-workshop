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

    // actions
    addTodo: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired,
    editTodo: React.PropTypes.func.isRequired,
    removeTodo: React.PropTypes.func.isRequired,

    setAll: React.PropTypes.func.isRequired,
    clearCompleted: React.PropTypes.func.isRequired,

    selectFilter: React.PropTypes.func.isRequired,
  };
  render() {
    const {todos, filter, total, completed} = this.props;
    return (
      <section className="todoapp">
        <Header addTodo={this.props.addTodo} />
        <Main
          todos={todos}
          setAll={this.props.setAll}
          toggleTodo={this.props.toggleTodo}
          editTodo={this.props.editTodo}
          removeTodo={this.props.removeTodo}
        />
        <Footer
          filter={filter}
          completed={completed}
          total={total}
          selectFilter={this.props.selectFilter}
          clearCompleted={this.props.clearCompleted}
        />
      </section>
    );
  }
}
