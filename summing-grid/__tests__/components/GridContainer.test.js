import React from 'react';
import { shallow } from 'enzyme';
import GridContainer from '../../src/components/GridContainer';

describe('GridContainer', () => {
  it('should render', () => {
    const wrapper = shallow(<GridContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle number changes', () => {
    const wrapper = shallow(<GridContainer />);
    const event = {
      target: {
        name: "numberOne",
        value: "500",
      }
    };
    wrapper.instance().handleNumberChange(event);
    expect(wrapper.state().numberOne).toEqual("500");
  });
});
