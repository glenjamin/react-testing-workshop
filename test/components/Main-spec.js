/* eslint-env mocha */
import {assert} from "chai";
import sinon from "sinon";

import React from "react";
import {shallow} from 'enzyme';

import Main from "../../client/components/Main";

describe("<Main />", () => {
  it("renders nothing with no todos", () => {
    const tree = shallow(<Main todos={[]} />);
    assert.equal(tree.type(), null);
  });

  // Notably absent - a test that checks whether the todos are all rendered
  // would this be a valuable test?

  describe("toggle-all", () => {
    context("all todos checked", () => {
      let tree, setAll;
      beforeEach(() => {
        setAll = sinon.spy();
        tree = shallow(<Main
          todos={[
            {id: 1, title: "item a", completed: true},
            {id: 2, title: "item b", completed: true},
          ]}
          setAll={setAll}
        />);
      });
      it("has toggle-all checked", () => {
        assert.equal(tree.find(".qa-toggle-all").prop("checked"), true);
      });
      it("triggers setAll(false) when toggle-all changed", () => {
        tree.find(".qa-toggle-all").simulate("change");
        assert.equal(setAll.withArgs(false).callCount, 1);
      });
    });

    context("not all todos checked", () => {
      let tree, setAll;
      beforeEach(() => {
        setAll = sinon.spy();
        tree = shallow(<Main
          todos={[
            {id: 1, title: "item a", completed: true},
            {id: 2, title: "item b", completed: false},
          ]}
          setAll={setAll}
        />);
      });
      it("has toggle-all unchecked", () => {
        assert.equal(tree.find(".qa-toggle-all").prop("checked"), false);
      });
      it("triggers setAll(true) when toggle-all changed", () => {
        tree.find(".qa-toggle-all").simulate("change");
        assert.equal(setAll.withArgs(true).callCount, 1);
      });
    });
  });
});
