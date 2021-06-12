// Elements used to filter crew members
const name = '[data-cy="name"]';
const city = '[data-cy="city"]';
const submit = '[data-cy="submit"]';
const clear = '[data-cy="clear"]';
const crewmember_name = '[data-cy="crewmember_name"]';

export const filterCrewMembers = {
    removeTextFromNameAndCity: () => {
        cy.get(name).clear();
        cy.get(city).clear();
    },  

    filterByName: (text) => {
        cy.get(name).type(text);
    }, 
    
    filterByCity: (text) => {
        cy.get(city).type(text);
    }, 

    clickOnSubmitButton: () => {
        cy.get(submit).click();
    },

    filteredMemberIsDisplayed: (expectedText) => {
        cy.get(crewmember_name).contains(expectedText);
    },

    filteredMemberDoesnotExist: () => {
        cy.get(crewmember_name).should('not.exist');
    },

    clickOnClearButton: () => {
        cy.get(clear).click();
    },

    crewMembersAreDisplayed: () => {
        cy.get(crewmember_name).should('be.visible');
    }
};