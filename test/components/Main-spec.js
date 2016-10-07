/* eslint-env mocha */
import {assert} from "chai";
import sinon from "sinon";

import React from "react";
import sd from "skin-deep";

import Main from "../../client/components/Main";

describe("<Main />", () => {
  it("renders nothing with no todos", () => {
    const tree = sd.shallowRender(<Main todos={[]} />);
    assert.equal(tree.getRenderOutput(), null);
  });

  // Notably absent - a test that checks whether the todos are all rendered
  // would this be a valuable test?

  describe("toggle-all", () => {
    context("all todos checked", () => {
      let tree, setAll;
      beforeEach(() => {
        setAll = sinon.spy();
        tree = sd.shallowRender(<Main
          todos={[
            {id: 1, title: "item a", completed: true},
            {id: 2, title: "item b", completed: true},
          ]}
          setAll={setAll}
        />);
      });
      it("has toggle-all checked", () => {
        assert.equal(tree.subTree(".qa-toggle-all").props.checked, true);
      });
      it("triggers setAll(false) when toggle-all changed", () => {
        tree.subTree(".qa-toggle-all").props.onChange();
        assert.equal(setAll.withArgs(false).callCount, 1);
      });
    });

    context("not all todos checked", () => {
      let tree, setAll;
      beforeEach(() => {
        setAll = sinon.spy();
        tree = sd.shallowRender(<Main
          todos={[
            {id: 1, title: "item a", completed: true},
            {id: 2, title: "item b", completed: false},
          ]}
          setAll={setAll}
        />);
      });
      it("has toggle-all unchecked", () => {
        assert.equal(tree.subTree(".qa-toggle-all").props.checked, false);
      });
      it("triggers setAll(true) when toggle-all changed", () => {
        tree.subTree(".qa-toggle-all").props.onChange();
        assert.equal(setAll.withArgs(true).callCount, 1);
      });
    });
  });
});
