# meet_app
Latest update: 02.03.2022

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
* Filter events by city. <br/><br/>
  * Scenario 1: Show upcoming events from all cities when user hasn't searched for a city
    * Given no cities had been searched
    * When the user opens the app
    * Then the user should see a list of all upcoming events
  * Scenario 2: A list of suggestions shows when user searches for a city
    * Given the main page is open
    * When the user starts typing in the city textbox
    * Then the user should see a list of cities (suggestions) that match what they’ve typed
  * Scenario 3: User can select a city from the suggested list.
    * Given “Berlin” is being typed in the city textbox 
    * And the list of suggested cities is showing
    * When the user selects a city (e.g., “Berlin, Germany”) from the list
    * Then their city should be changed to that city (i.e., “Berlin, Germany”)
    * And the list of suggestions should disappear 
    * And the user should receive a list of upcoming events in that city
---
* Show/hide event details. <br/><br/>
  * Scenario 1: An event element is collapsed by default
    * Given the event element was being viewed for the first time
    * When the user scrolls down to a particular event
    * Then the user will only see some details about the event
  * Scenario 2: User can expand an event to see its details
    * Given the show details button had not been clicked 
    * And the details about the event were not showing
    * When the user clicks the show details button
    * Then the user will see more details about the event
  * Scenario 3: User can collapse an event to hide its details
    * Given the show details button had been clicked
    * And the details about the event were showing
    * When the user clicks the hide details button
    * Then the user will see less details about the event
---
* Specify number of events. <br/><br/>
  * Scenario 1: 10 is the default number of events when user has not specified a number
    * Given the number of events to show had not been specified
    * When the user scrolls down to see the events
    * Then the user will see 10 events
  * Scenario 2: User can change the number of events they want to see
    * Given the number of events to show had not been changed
    * When the user types in the number of events
    * Then the user will see the specified number of events
---
* Use the app when offline. <br/><br/>
  * Scenario 1: Show cached data when there is no internet connection
    * Given there was no access to the internet
    * When the user tries to open the app
    * Then the user will be able to use the app normally with cached data
  * Scenario 2: Show error when user changes the settings (city, time range)
    * Given the settings (city, time range) had been changed
    * When the user opens the app and uses the relevant features
    * Then the user will see a relevant error message 
---
* Add an app shortcut to the home screen.
---
* View a chart showing the number of upcoming events by city. <br/><br/>
  * Scenario 1: Show a chart with the number of upcoming events in each city
    * Given the number of events had been specified
    * When the user scrolls down to see the data visualization of the events
    * Then the user will see a chart of the number of upcoming events categorized by city

## Project Dependencies
Google Calendar API

## Technical Requirements
* npm
* JavaScript ES6
* React
* React axios
* async/await
* Progressive Web Application (PWA)
* Lighthouse's PWA checklist
* service worker
* AWS Lambda (serverless functions)
* Google Calendar API
* OAuth2 authentication flow
* Behavior Driven Development (BDD)
* Gherkin
* Test Driven Development (TDD)
* unit testing
* integration testing
* acceptance testing
* end-to-end testing
* Jest testing framework (unit testing, integration testing)
* Enzyme
* Cucumber testing framework (acceptance testing)
* Puppeteer
* Object Oriented Programming (OOP)
* Attatus (online APM tool)
* data visualization
* recharts
* NProgress
* W3C Validation
* ESLint
* Prettier

## Project Showcase
https://jenny-jny.github.io/meet_app/
