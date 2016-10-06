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
    it("should be empty", () => {
      assert.typeOf(state, "array");
      assert.lengthOf(state, 0);
    });
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
      const state = applyActionsFrom(
        [
          {id: 1, title: "Item A", completed: false},
          {id: 3, title: "Item B", completed: true},
          {id: 7, title: "Item C", completed: false},
        ],
        actions.addTodo("pick a new id")
      );
      assert.lengthOf(state, 4);
      assert.deepEqual(state[state.length - 1], {
        id: 8,
        title: "pick a new id",
        completed: false
      });
    })
  });

  describe("toggleTodo", () => {
    const initial = [
      {id: 1, title: "Item A", completed: false},
      {id: 3, title: "Item B", completed: true},
      {id: 7, title: "Item C", completed: false},
    ];
    it("should flip the relevant completed state to true", () => {
      const state = applyActionsFrom(initial, actions.toggleTodo(7));
      assert.equal(state[2].completed, true);
    });
    it("should flip the relevant completed state to false", () => {
      const state = applyActionsFrom(initial, actions.toggleTodo(3));
      assert.equal(state[2].completed, false);
    });
  });

  describe("editTodo", () => {
    const initial = [
      {id: 1, title: "Item A", completed: false},
      {id: 3, title: "Item B", completed: true},
      {id: 7, title: "Item C", completed: false},
    ];
    it("updates the title of the relevant todo", () => {
      const state = applyActionsFrom(initial, actions.editTodo(3, "Renamed"));
      assert.equal(state[1].title, "Renamed");
    });
  });

  describe("removeTodo", () => {
    const initial = [
      {id: 1, title: "Item A", completed: false},
      {id: 3, title: "Item B", completed: true},
      {id: 7, title: "Item C", completed: false},
    ];
    it("removes the relevant todo", () => {
      const state = applyActionsFrom(initial, actions.removeTodo(1));
      assert.lengthOf(state, 2);
      assert.equal(state[0].id, 3);
      assert.equal(state[1].id, 7);
    });
  });

  describe("setAll", () => {
    const initial = [
      {id: 1, title: "Item A", completed: false},
      {id: 3, title: "Item B", completed: true},
      {id: 7, title: "Item C", completed: false},
    ];
    it("can set all to completed", () => {
      const state = applyActionsFrom(initial, actions.setAll(true));
      assert.deepEqual(state.map(t => t.completed), [true, true, true]);
    });
    it("can set all to un-completed", () => {
      const state = applyActionsFrom(initial, actions.setAll(false));
      assert.deepEqual(state.map(t => t.completed), [false, false, false]);
    });
  });

  describe("clearCompleted", () => {
    it("should have tests!");
  });
});
