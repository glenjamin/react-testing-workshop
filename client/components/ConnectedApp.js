import {connect} from "react-redux";

import App from "./App";

import * as selectors from "../reducers";
import * as actions from "../actions";

export default connect(
  function mapStateToProps(state) {
    const {total, completed} = selectors.getCounts(state);
    return {
      todos: selectors.getTodos(state),
      filter: selectors.getFilter(state),
      total, completed
    };
  },
  {
    addTodo: actions.addTodo,
    toggleTodo: actions.toggleTodo,
    editTodo: actions.editTodo,
    removeTodo: actions.removeTodo,

    setAll: actions.setAll,
    clearCompleted: actions.clearCompleted,

    selectFilter: actions.selectFilter,
  }
)(App);
