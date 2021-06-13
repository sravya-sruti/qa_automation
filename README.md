## CREW APPLICATION Cypress Tests

A guide to run the Crew Application Cypress tests

## Cypress Installation

Command to install Cypress using npm using  `npm install cypress --save-dev`
or
Command to install Cypress using yarn `yarn add cypress --dev`


## Getting started

Clone the repo and run `yarn` to install the dependencies. 
`git clone`


## Project Details

1) Added data_cy's in the source code and used them in the tests.
2) For reusability all the elements are maintainee under cypress->componentLocator folder.
3) The actual tests are maintained under cypress->integration folder.
4) Docker file and docker-compose file are added at root folder of the repo.


## Intergration Tests
   
 ### Running tests locally
 
 Make sure you change the URL in specs "http://localhost:3000/"
 1) In command prompt from the project folder type `yarn cypress open` and run the specs.

 
 ### Running tests using docker

Make sure you change the URL in specs "http://crew-app:5000/"
 1) Go to repo root folder "oos-ca" 
 2) Run the following command `docker run crew-app`
 3) Make sure the docker image crew-app is in docker images list `docker images ls`
 4) Run the command `docker-compose up integration_tests`
 5) You can see the test output in the console
 Note: Added images and integration tests output videos as proof of execution of the tests in docker.


 ## Bugs found

1) When user clicks on clear button the text boxes (Name and City) are not cleared.
2) Crew member in moved state should not be moved to interviewing state.
Note: Naming convention of filter is confusing as user thinks is submitting crew member to applied state
