import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from '../../src/components/NumberInput';

describe('NumberInput', () => {
  it('should render', () => {
    const props = {
      name: "test-component",
      onChange: jest.fn(),
    };
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
