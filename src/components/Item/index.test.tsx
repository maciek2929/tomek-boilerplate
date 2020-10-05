import React from "react";
import { shallow } from "enzyme";
import Item from "./index";

describe("Item", () => {
  it("renders", () => {
    const props = {
      addItem: () => { },
      name: "Test item name"
    };

    const item = shallow(<Item addItem={props.addItem} name={"asdw"} />);
    expect(item).toMatchSnapshot();
  });

  it("snapshot", () => {
    const props = {
      addItem: () => { },
      name: "Test item name"
    };

    const wrapper = shallow(<Item addItem={props.addItem} name={props.name} />);
    expect(wrapper.text()).toEqual("Name: Test item name")
  });

  it('handles click', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Item addItem={mockCallBack} name={"Product"} />));
    button.find('li').simulate('click', { preventDefault: () => { } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});
