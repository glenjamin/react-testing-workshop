/* eslint-env mocha */
import {assert} from "chai";
import sinon from "sinon";

import React from "react";
import {shallow} from 'enzyme';

import Footer from "../../client/components/Footer";

describe("<Footer />", () => {
  it("renders nothing with no todos", () => {
    const tree = shallow(<Footer total={0} />);
    assert.equal(tree.type(), null);
  });

  // perhaps this should be a standalone component that just takes one number?
  describe("items remaining", () => {
    it("should handle all completed", () => {
      const tree = shallow(<Footer total={10} completed={10} />);
      assert.include(tree.text(), "0 items left");
    });
    it("should handle 1 remaining", () => {
      const tree = shallow(<Footer total={10} completed={9} />);
      assert.include(tree.text(), "1 item left");
    });
    it("should handle many remaining", () => {
      const tree = shallow(<Footer total={10} completed={3} />);
      assert.include(tree.text(), "7 items left");
    });
  });

  describe("clear completed", () => {
    it("should be visible when some todos are completed", () => {
      const tree = shallow(<Footer total={5} completed={5} />);
      const clear = tree.find(".qa-clear-completed");
      assert.isFalse(clear.isEmpty());
      assert.include(clear.text(), 5);
    });
    it("should be hidden when no todos are completed", () => {
      const tree = shallow(<Footer total={5} completed={0} />);
      const clear = tree.find(".qa-clear-completed");
      assert.ok(clear.isEmpty());
    });
    it("should trigger clearCompleted() when clicked", () => {
      const clearCompleted = sinon.spy();
      const tree = shallow(<Footer
        total={5} completed={4}
        clearCompleted={clearCompleted}
      />);
      tree.find(".qa-clear-completed").simulate("click");
      assert.equal(clearCompleted.callCount, 1);
    });
  });

  describe("filter selection", () => {
    it("should highlight 'All' when selected", () => {
      const tree = shallow(<Footer total={5} filter="all" />);
      const selected = tree.find(".qa-filters").find(".selected");
      assert.equal(selected.text(), "All");
    });
    it("should select 'All' when clicked", () => {
      const selectFilter = sinon.spy();
      const tree = shallow(
        <Footer total={5} filter="all" selectFilter={selectFilter} />
      );
      tree.find({children: "All"}).simulate("click", mouseEvent());
      assert.equal(selectFilter.withArgs("all").callCount, 1);
    });

    it("should have more scenarios covered");
  });
});

// If I was using this a lot, I'd make it more realistic
function mouseEvent() {
  return {
    preventDefault: () => {}
  };
}
