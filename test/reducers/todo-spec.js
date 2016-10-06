/* eslint-env mocha */
import {assert} from "chai";

import * as actions from "../../client/actions";
import todosReducer from "../../client/reducers/todos";

function applyActions(...actionsToApply) {
  const initial = todosReducer(undefined, {});
  return applyActionsFrom(initial, ...actionsToApply);
}
function applyActionsFrom(state, ...actionsToApply) {
  return actionsToApply.reduce(todosReducer, state);
}

describe("todos reducer", () => {
  describe("initial", () => {
    const state = applyActions();
    it("should have pre-filled data", () => {
      assert.typeOf(state, "array");
      assert.lengthOf(state, 4);
    });
    it("should have max id of 4", () => {
      // This is relevant as other tests below rely on it
      assert.equal(Math.max(...state.map(i => i.id)), 4);
    })
  });
  describe("addTodo", () => {
    it("should add a new todo", () => {
      const state = applyActionsFrom([], actions.addTodo("Buy some milk"));
      assert.lengthOf(state, 1);
      assert.deepEqual(state[0], {
        id: 1,
        title: "Buy some milk",
        completed: false
      });
    });
    it("should pick the next available id", () => {
      const state = applyActions(actions.addTodo("pick a new id"));
      assert.lengthOf(state, 5);
      assert.deepEqual(state[state.length - 1], {
        id: 5,
        title: "pick a new id",
        completed: false
      });
    })
  });
});
