// Elements for different states of crew members
const applied = '[data-cy="applied"]';
const interviewing = '[data-cy="interviewing"]';
const hired = '[data-cy="hired"]';

// Elements to change the state of crew members
const up_button = '[data-cy="up_button"]';
const down_button = '[data-cy="down_button"]';

export const crewMemberState = {
    checkUserInAppliedState: (text) => {
        cy.get(applied).children().contains(text);
    }, 

    checkUserInterviewingState: (text) => {
        cy.get(interviewing).children().contains(text);
    }, 
    
    checkUserInHiredState: (text) => {
        cy.get(hired).children().contains(text);
    }, 

    clickOnUpButton: () => {
        cy.get(up_button).click(); 
    },

    clickOnDownButton: () => {
        cy.get(down_button).click();
    },
};