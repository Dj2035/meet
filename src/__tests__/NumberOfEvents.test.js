import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
  });

  test('render default number in input to be 32', () => {
    expect(NumberOfEventsWrapper.find('.events-number').prop('value')).toBe(32);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".events-number").prop("value")).toBe(
      numberOfEvents
    );
  });
});