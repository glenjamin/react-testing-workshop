import React from "react";

const filters = [
  {name: "all", label: "All"},
  {name: "active", label: "Active"},
  {name: "completed", label: "Completed"},
];

const noop = () => {};

export default class Footer extends React.Component {
  static propTypes = {
    filter: React.PropTypes.string.isRequired,
    total: React.PropTypes.number.isRequired,
    completed: React.PropTypes.number.isRequired,
    selectFilter: React.PropTypes.func.isRequired,
    clearCompleted: React.PropTypes.func.isRequired,
  };
  static defaultProps = {
    filter: "all",
    total: 0,
    completed: 0,
    selectFilter: noop,
    clearCompleted: noop,
  };

  render() {
    var {filter, total, completed, selectFilter, clearCompleted} = this.props;
    if (total === 0) {
      return null;
    }
    var left = total - completed;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{left}</strong>
          {" "}
          item{left === 1 ? "" : "s"} left
        </span>
        <ul className="filters qa-filters">
          {filters.map(({name, label}) => (
            <li key={name}>
              <a
                className={filter === name && "selected"}
                href="#"
                onClick={(e) => {e.preventDefault(); selectFilter(name);}}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {completed > 0 &&
          <button
            className="clear-completed qa-clear-completed"
            onClick={() => clearCompleted()}
          >
            Clear completed ({completed})
          </button>}
      </footer>
    );
  }
}
