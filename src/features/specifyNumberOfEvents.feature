Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given the list of events has been loaded
    When the user hasn’t specified a number of events to be displayed
    Then 32 should be the default number of shown events

  Scenario: User can change the number of events they want to see.
    Given the list of events has been loaded
    When user enters a number of events to be displayed
    Then the number entered in the textbox should reflect the number of events the user sees