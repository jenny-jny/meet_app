# meet_app
Latest update: 09.29.2021

## Project Description
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## User Stories
* As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
* As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
* As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
* As a user, I would like to be able to use the app when offline so that Ican see the events I viewed the last time I was online.
* As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
* As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## Key Features, Test Scenarios, and Gherkin
* Filter events by city.


  * SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
    * Given user hasn’t searched for any city
    * When the user opens the app
    * Then the user should see a list of all upcoming events
  * SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
    * Given the main page is open
    * When user starts typing in the city textbox
    * Then the user should see a list of cities (suggestions) that match what they’ve typed
  * SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
    * Given the user was typing “Berlin” in the city textbox 
    * And the list of suggested cities is showing
    * When the user selects a city (e.g., “Berlin, Germany”) from the list
    * Then their city should be changed to that city (i.e., “Berlin, Germany”)
    * And the list of suggestions should disappear 
    * And the user should receive a list of upcoming events in that city

* Show/hide event details.


  * Scenario 1: An event element is collapsed by default
    * Given the user was viewing the event element for the first time
    * When the user scrolls down to a particular event
    * Then the user will only see some details about the event
  * Scenario 2: User can expand an event to see its details
    * Given the user had not clicked the show details button
    * And the details about the event were not showing
    * When the user clicks the show details button
    * Then the user will see more details about the event
  * Scenario 3: User can collapse an event to hide its details
    * Given the user had clicked the show details button
    * And the details about the event were showing
    * When the user clicks the hide details button
    * Then the user will see less details about the event

* Specify number of events.


  * Scenario 1: When user hasn’t specified a number, 10 is the default number
    * Given the user did not specify a number of events to show
    * When the user scrolls down to see the events
    * Then the user will see 10 events
  * Scenario 2: User can change the number of events they want to see
    * Given the user had not changed a number of events to show
    * When the user types in the number of events
    * Then the user will see the specified number of events

* Use the app when offline.


  * Scenario 1: Show cached data when there’s no internet connection
    * Given the user did not have access to the internet
    * When the user tries to open the app
    * Then the user will be able to use the app normally
  * Scenario 2: Show error when user changes the settings (city, time range)
    * Given the user changed the settings (city, time range)
    * When the user opens the app and uses the relevant features
    * Then the user will see a relevant error message 

* Add an app shortcut to the home screen.

* View a chart showing the number of upcoming events by city.


  * Scenario 1: Show a chart with the number of upcoming events in each city
    * Given the user specified a number of events
    * When the user scrolls down to see the data visualization of the events
    * Then the user will see a chart of upcoming events categorized by city

## Project Dependencies
Google Calendar API

## Technical Requirements
* JavaScript ES6
* React
* AWS Lambda
* npm
* TDD
* Unit testing
* Jest
* Enzyme
* Integration testing
* Acceptance testing
* End-to-end testing
* Jest
* Puppeteer
* Cucumber
* APM - Attatus
* W3C Validation
* recharts
* axios
* NProgress
* ESLint
* Prettier

## Project Showcase
https://jenny-jny.github.io/meet_app/
