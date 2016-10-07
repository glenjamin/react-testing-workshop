import React from "react";

import AddTodo from "./AddTodo";

export default class Header extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    addTodo: () => {}
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <AddTodo addTodo={this.props.addTodo} />
      </header>
    );
  }
}
