import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  });

  test('render default number in input to be 32', () => {
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32);
  });

  test('change the number of events in input field when input changes', () => {
    NumberOfEventsWrapper.setState({
      numOfEvents: 32
    });
    const eventObject = { target: { value: 8 } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(8);
  });
});