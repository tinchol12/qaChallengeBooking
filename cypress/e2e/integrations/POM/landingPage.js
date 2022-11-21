class LandingPage
{

    getBody() {return cy.get('[id="b2indexPage"]');}
    getCookieButton() {return cy.get('[id="onetrust-accept-btn-handler"]');}
    getWhereField() {return  cy.get('[name="ss"]');}
    getPortoSelectionDropdown() {return cy.get('[data-label="Porto, Norte Region, Portugal"]')};
    setStartDate() {return cy.get('[data-date="2022-12-01"]')};
    setEndDate() {return cy.get('[data-date="2022-12-07"]')};
    getSearchButton() {return cy.get('.sb-searchbox__button')};

}

export default LandingPage;