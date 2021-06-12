import { filterCrewMembers } from '../componentLocator/filterCrewMembers'

context('Filter Crew Members', () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  // Tests to verify filter functionality is working fine
  it('Filter with existing crew member name', () => {
    filterCrewMembers.removeTextFromNameAndCity();
    filterCrewMembers.filterByName("emma");
    filterCrewMembers.clickOnSubmitButton();
    filterCrewMembers.filteredMemberIsDisplayed("emma");
  });

  it('Filter with existing crew member city', () => {
    filterCrewMembers.removeTextFromNameAndCity();
    filterCrewMembers.filterByCity("liverpool");
    filterCrewMembers.clickOnSubmitButton();
    filterCrewMembers.filteredMemberIsDisplayed("liverpool");
  });

  it('Filter with non existing crew member name and city', () => {
    filterCrewMembers.removeTextFromNameAndCity();
    filterCrewMembers.filterByName("emma");
    filterCrewMembers.filterByCity("liverpool");
    filterCrewMembers.clickOnSubmitButton();;
    filterCrewMembers.filteredMemberDoesnotExist();
  });

  it('Clear filter should display all the members', () => {
    filterCrewMembers.clickOnClearButton();
    filterCrewMembers.crewMembersAreDisplayed();
  });

});