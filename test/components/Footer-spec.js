/* eslint-env mocha */
import {assert} from "chai";
import sinon from "sinon";

import React from "react";
import sd from "skin-deep";

import Footer from "../../client/components/Footer";

describe("<Footer />", () => {
  it("renders nothing with no todos", () => {
    const tree = sd.shallowRender(<Footer total={0} />);
    assert.equal(tree.getRenderOutput(), null);
  });

  // perhaps this should be a standalone component that just takes one number?
  describe("items remaining", () => {
    it("should handle all completed", () => {
      const tree = sd.shallowRender(<Footer total={10} completed={10} />);
      assert.include(tree.text(), "0 items left");
    });
    it("should handle 1 remaining", () => {
      const tree = sd.shallowRender(<Footer total={10} completed={9} />);
      assert.include(tree.text(), "1 item left");
    });
    it("should handle many remaining", () => {
      const tree = sd.shallowRender(<Footer total={10} completed={3} />);
      assert.include(tree.text(), "7 items left");
    });
  });

  describe("clear completed", () => {
    it("should be visible when some todos are completed", () => {
      const tree = sd.shallowRender(<Footer total={5} completed={5} />);
      const clear = tree.subTree(".qa-clear-completed");
      assert.ok(clear);
      assert.include(clear.text(), 5);
    });
    it("should be hidden when no todos are completed", () => {
      const tree = sd.shallowRender(<Footer total={5} completed={0} />);
      const clear = tree.subTree(".qa-clear-completed");
      assert.isFalse(clear);
    });
    it("should trigger clearCompleted() when clicked", () => {
      const clearCompleted = sinon.spy();
      const tree = sd.shallowRender(<Footer
        total={5} completed={4}
        clearCompleted={clearCompleted}
      />);
      tree.subTree(".qa-clear-completed").props.onClick();
      assert.equal(clearCompleted.callCount, 1);
    });
  });
});
