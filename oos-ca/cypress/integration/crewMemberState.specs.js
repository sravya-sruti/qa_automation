import { crewMemberState } from "../componentLocator/crewMemberState";
import { filterCrewMembers } from "../componentLocator/filterCrewMembers";

context('Crew Aplication', () => {
    before(() => {
        cy.visit("http://localhost:3000/");
    });
  
    it('View a crew member in applied state', () => {
        filterCrewMembers.removeTextFromNameAndCity();
        filterCrewMembers.filterByName("lloyd")
        filterCrewMembers.clickOnSubmitButton();
        filterCrewMembers.filteredMemberIsDisplayed("lloyd gonzalez")
        crewMemberState.checkUserInAppliedState("lloyd gonzalez");
   });

    it('Crew Member in applied state proceeds to interviewing state', () => {
        crewMemberState.checkUserInAppliedState("lloyd gonzalez");
        crewMemberState.clickOnUpButton();
        crewMemberState.checkUserInterviewingState("lloyd gonzalez");
    });

    it('Crew Member in interviewing state gets hired proceeds to hired state', () => {
        crewMemberState.checkUserInterviewingState("lloyd gonzalez");
        crewMemberState.clickOnUpButton();
        crewMemberState.checkUserInHiredState("lloyd gonzalez");
    });

    it('Crew Member in hired state moves back to to interviewing state', () => {
        crewMemberState.checkUserInHiredState("lloyd gonzalez");
        crewMemberState.clickOnDownButton();
        crewMemberState.checkUserInterviewingState("lloyd gonzalez");
    });

    it('Crew Member in interviewing state moves back to to applied state', () => {
        crewMemberState.checkUserInterviewingState("lloyd gonzalez");
        crewMemberState.clickOnDownButton();
        crewMemberState.checkUserInAppliedState("lloyd gonzalez")
    });
});