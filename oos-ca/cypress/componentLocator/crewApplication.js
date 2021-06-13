// Crew Application elements
const app_logo = '[data-cy="app_logo"]';
const app_title = '[data-cy="app_title"]';

// Crew member elements
const crewmember_info = '[data-cy="crewmember_info"]';
const crewmember_photo = '[data-cy="crewmember_photo"]';

export const crewApplication = {
  appLogoIsPresent: () => {
    cy.get(app_logo).should('be.visible');
  },  

  appTitleIsPresent: () => {
    cy.get(app_title).should('be.visible');
  },  

  crewMemberInfoIsPresent: () => {
    cy.get(crewmember_info).should('be.visible');
  },

  crewMemberPhotoIsPresent: () => {
    cy.get(crewmember_photo).should('be.visible');
  }
};