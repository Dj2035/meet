import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('user sees events and hasn’t clicked on any event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the user should see event elements collapsed by default', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('user clicks on “Show details” button for an event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      AppWrapper.find('.event .event-showDetails-btn').at(0).simulate('click');
    });

    then('the event element will be expanded to show the event details', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the event element is expanded to show event details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      AppWrapper.find('.event .event-showDetails-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });

    when('user clicks on “Hide details” button for that event', () => {
      AppWrapper.find('.event .event-hideDetails-btn').at(0).simulate('click');
    });

    then('the event element will collapse and hide the event details', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });
});