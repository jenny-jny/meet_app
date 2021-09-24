Feature: Specify number of events.

Scenario: When user hasn’t specified a number, 10 is the default number
Given the user did not specify a number of events to show
When the user scrolls down to see the events
Then the user will see 10 events

Scenario: User can change the number of events they want to see
Given the user had not changed a number of events to show
When the user types in the number of events
Then the user will see the specified number of events