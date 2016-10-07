import React from "react";

export default class AddTodo extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    addTodo: () => {}
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
      <form action="" onSubmit={(e) => this.onSubmit(e)}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}
        />
      </form>
    );
  }
}
