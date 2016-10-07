import React from "react";

const noop = () => {};

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    edit: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired,
    toggle: React.PropTypes.func.isRequired,
    forceEditing: React.PropTypes.bool,
  };
  static defaultProps = {
    edit: noop,
    remove: noop,
    toggle: noop,
  };

  state = {value: this.props.todo.title, editing: false};

  save(event) {
    event.preventDefault();
    var title = this.state.value.trim();
    if (title) {
      this.props.edit(title);
      this.setState({ editing: false });
    } else {
      this.props.remove();
    }
  }

  render() {
    var { todo: {completed, title}, toggle, remove } = this.props;
    var { editing, value } = this.state;
    if (this.props.forceEditing) {
      editing = true;
    }
    var classNames = [
      completed ? "completed" : "",
      editing ? "editing" : ""
    ];
    return (
      <li className={classNames.join(' ')}>
        <div className="view">
          <input
            className="toggle" type="checkbox"
            checked={completed} onChange={toggle}
          />
          <label onDoubleClick={() => this.setState({editing: true})}>
            {title}
          </label>
          <button className="destroy" onClick={remove} />
        </div>
        {editing &&
          <form action="" onSubmit={(e) => this.save(e)}>
            <input className="edit" autoFocus
              value={value}
              onBlur={(e) => this.save(e)}
              onChange={(e) => this.setState({value: e.target.value})}
            />
          </form>}
      </li>
    );
  }
}
