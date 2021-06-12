import {crewApplication} from '../componentLocator/crewApplication'

context('Crew Aplication', () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });
  
  //Tests to verify App has required fileds
  it('App Logo is present ', () => {
    crewApplication.appLogoIsPresent();
  });

  it('App title is present', () => {
    crewApplication.appTitleIsPresent();
  });

  //Tests to verify Crew member has the required fields
  it('Crew member info is present', () => {
    crewApplication.crewMemberInfoIsPresent();
  });

  it('Crew member photo is present', () => {
    crewApplication.crewMemberPhotoIsPresent();
  });
});