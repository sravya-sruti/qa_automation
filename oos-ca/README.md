# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000


## CREW APPLICATION Cypress Tests

This is small guide to facilitate understanding of the Crew Application Cypress tests


## Cypress Installation

Command to install Cypress using npm using  $npm install cypress --save-dev 
or
Command to install Cypress using yarn $yarn add cypress --dev


## Getting started

Clone the repo and run `yarn` to install the dependencies. 
$git clone


## Open Cypress

In command prompt from the project folder type $yarn cypress open


## Project Details

1) Added data_cy's in the source code and used them in the tests.
2) For reusability all the elements are maintainee under cypress->componentLocator folder
3) The actual tests are maintained under cypress->integration folder