import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user hasn’t specified a number of events to be displayed', () => {

    });

    then('32 should be the default number of shown events', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('user enters a number of events to be displayed', () => {
      const numberOfEvents = { target: { value: 1 } };
      AppWrapper.find('.events-number').simulate('change', numberOfEvents);
    });

    then('the number entered in the textbox should reflect the number of events the user sees', () => {
      expect(AppWrapper.find('.events-number').prop('value')).toBe(1);
    });
  });

});