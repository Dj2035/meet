Feature: Show/Hide an event’s details

  Scenario: An event element is collapsed by default.
    Given the list of events has been loaded
    When user sees events and hasn’t clicked on any event
    Then the user should see event elements collapsed by default

  Scenario: User can expand an event to see its details.
    Given the list of events has been loaded
    When user clicks on “Show details” button for an event
    Then the event element will be expanded to show the event details

  Scenario: User can collapse an event to hide its details.
    Given the app is loaded
    And the event element is expanded to show event details
    When user clicks on “Hide details” button for that event
    Then the event element will collapse and hide the event details