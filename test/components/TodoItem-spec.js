/* eslint-env mocha */
import {assert} from "chai";
import sinon from "sinon";

import React from "react";
import {shallow} from 'enzyme';

import TodoItem from "../../client/components/TodoItem";

describe("<TodoItem />", () => {
  it("should show title in label", () => {
    const todo = {title: "Buy Milk", completed: false};
    const tree = shallow(<TodoItem todo={todo}/>);
    assert.equal(tree.find("label").text(), "Buy Milk");
  });
  it("should not show as crossed out when not completed", () => {
    const todo = {title: "Buy Milk", completed: false};
    const tree = shallow(<TodoItem todo={todo}/>);
    assert.isFalse(tree.is("li.completed"));
    assert.isFalse(tree.find("input[type='checkbox']").prop("checked"));
  });
  it("should show as crossed out when completed", () => {
    const todo = {title: "Buy Milk", completed: true};
    const tree = shallow(<TodoItem todo={todo}/>);
    assert.isTrue(tree.is("li.completed"));
    assert.isTrue(tree.find("input[type='checkbox']").prop("checked"));
  });
  it("should toggle todo when unchecking box", () => {
    const todo = {title: "Buy Milk", completed: true};
    const toggle = sinon.spy();
    const tree = shallow(<TodoItem todo={todo} toggle={toggle} />);
    tree.find("input[type='checkbox']").simulate("change");

    assert.equal(toggle.callCount, 1);
  });
  it("should toggle todo when checking box", () => {
    const todo = {title: "Buy Milk", completed: false};
    const toggle = sinon.spy();
    const tree = shallow(<TodoItem todo={todo} toggle={toggle} />);
    tree.find("input[type='checkbox']").simulate("change");

    assert.equal(toggle.callCount, 1);
  });
  it("should remove todo when destroy is clicked", () => {
    const todo = {title: "Buy Milk", completed: false};
    const remove = sinon.spy();
    const tree = shallow(<TodoItem todo={todo} remove={remove} />);
    tree.find(".destroy").simulate("click");

    assert.equal(remove.callCount, 1);
  });

  it("should not be in editing mode initially", () => {
    const todo = {title: "Buy Milk", completed: false};
    const tree = shallow(<TodoItem todo={todo} />);

    assert.isFalse(tree.is("li.editing"));
    assert.isTrue(tree.find("input.edit").isEmpty());
  });
  it("should enter editing mode on label double-click", () => {
    const todo = {title: "Buy Milk", completed: false};
    const tree = shallow(<TodoItem todo={todo} />);

    tree.find("label").simulate("doubleClick");

    assert.isTrue(tree.is("li.editing"), "editing class");
    assert.isFalse(tree.find("input.edit").isEmpty(), "input box");
  });

  context("in editing mode", () => {
    let tree, edit;
    beforeEach(() => {
      const todo = {title: "Buy Milk", completed: false};
      edit = sinon.spy();
      tree = shallow(<TodoItem todo={todo} edit={edit} />);
      tree.find("label").simulate("doubleClick");
    });

    it("should call edit with changed title when submitted", () => {
      const event = textChangeEvent("Buy Semi-skimmed Milk");
      tree.find("input.edit").simulate("change", event);
      tree.find("form").simulate("submit", makeEvent());

      assert.equal(edit.withArgs("Buy Semi-skimmed Milk").callCount, 1);
    });
    it("should call edit with changed title when focus changed", () => {
      const event = textChangeEvent("Buy Semi-skimmed Milk");
      tree.find("input.edit").simulate("change", event);
      tree.find("input.edit").simulate("blur", makeEvent());

      assert.equal(edit.withArgs("Buy Semi-skimmed Milk").callCount, 1);
    });
  });
});

/**
 * A basic fake text input change event
 */
function textChangeEvent(text) {
  const event = makeEvent();
  event.target = {value: text};
  return event;
}

function makeEvent() {
  return {
    preventDefault: () => {}
  };
}
