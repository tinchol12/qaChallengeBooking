class ResultsPage
{

    getDownPropertieLabel() {return cy.get('[class="e1f827110f d3a14d00da"]')};
    getTopPropertieLabel() {return cy.get('[id="onetrust-accept-btn-handler"]')};
    getStartDateLeftSideBar() {return cy.get('[data-testid="date-display-field-start"]')}
    getEndDateLeftSideBar() {return cy.get('[data-testid="date-display-field-end"]')};
    getResultsTable() {return cy.get('[data-testid="property-card"]')};

}

export default ResultsPage;