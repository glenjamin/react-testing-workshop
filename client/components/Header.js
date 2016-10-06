import React from "react";

export default class Header extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired
  };

  state = {value: ""};

  onSubmit(event) {
    event.preventDefault();
    var title = this.state.value.trim();
    if (title) {
      this.setState({value: ''});
      this.props.addTodo(title);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form action="" onSubmit={(e) => this.onSubmit(e)}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.value}
            onChange={e => this.setState({value: e.target.value})}
          />
        </form>
      </header>
    );
  }
}

module.exports = Header;
