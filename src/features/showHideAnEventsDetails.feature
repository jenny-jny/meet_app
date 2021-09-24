Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given the user was viewing the event element for the first time
When the user scrolls down to a particular event
Then the user will only see some details about the event

Scenario: User can expand an event to see its details
Given the user had not clicked the show details button
And the details about the event were not showing
When the user clicks the show details button
Then the user will see more details about the event

Scenario: User can collapse an event to hide its details
Given the user had clicked the show details button
And the details about the event were showing
When the user clicks the hide details button
Then the user will see less details about the event