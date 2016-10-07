/* eslint-env mocha */
import {assert} from "chai";

import * as actions from "../../client/actions";
import reducer, * as selectors from "../../client/reducers";

function applyActions(...actionsToApply) {
  const initial = reducer(undefined, {});
  return applyActionsFrom(initial, ...actionsToApply);
}
function applyActionsFrom(state, ...actionsToApply) {
  return actionsToApply.reduce(reducer, state);
}

describe("main reducer", () => {

  describe("filtering", () => {
    const base = applyActions(
      actions.addTodo("Item A"),
      actions.addTodo("Item B"),
      actions.addTodo("Item C"),
      actions.addTodo("Item D"),
      actions.toggleTodo(2),
      actions.toggleTodo(4),
    );

    describe("show all", () => {
      const state = applyActionsFrom(base, actions.selectFilter("all"));
      it("should have filter as all", () => {
        assert.equal(selectors.getFilter(state), "all");
      });
      it("should count totals", () => {
        assert.deepEqual(selectors.getCounts(state), {total: 4, completed: 2});
      });
      it("should include all todos", () => {
        const todos = selectors.getTodos(state);
        assert.lengthOf(todos, 4);
        assert.deepEqual(todos.map(t => t.id), [1, 2, 3, 4]);
      })
    });

    describe("show active", () => {
      const state = applyActionsFrom(base, actions.selectFilter("active"));
      it("should have filter as active", () => {
        assert.equal(selectors.getFilter(state), "active");
      });
      it("should still count overall totals", () => {
        assert.deepEqual(selectors.getCounts(state), {total: 4, completed: 2});
      });
      it("should include only uncompleted todos", () => {
        const todos = selectors.getTodos(state);
        assert.lengthOf(todos, 2);
        assert.deepEqual(todos.map(t => t.id), [1, 3]);
      })
    });

    describe("show completed", () => {
      const state = applyActionsFrom(base, actions.selectFilter("completed"));
      it("should have filter as completed", () => {
        assert.equal(selectors.getFilter(state), "completed");
      });
      it("should still count overall totals", () => {
        assert.deepEqual(selectors.getCounts(state), {total: 4, completed: 2});
      });
      it("should include only uncompleted todos", () => {
        const todos = selectors.getTodos(state);
        assert.lengthOf(todos, 2);
        assert.deepEqual(todos.map(t => t.id), [2, 4]);
      })
    });
  });

});
