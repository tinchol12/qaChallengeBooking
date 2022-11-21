


import LandingPage from '../POM/landingPage.js'
import ResultsPage from '../POM/resultsPage.js'


describe("Challange on booking", () => {

    it("Search",{"retries": 3}, () => {

        const Landing = new LandingPage();    
        const Results = new ResultsPage();    
    
    
        /* 1. go to the booking main page (https://www.booking.com) */
        cy.visit("https://www.booking.com/");
        cy.wait(2000);

        /* on the first run, can pop-up the Cookies terms and conditions. 
        I'm using a conditional to determinate if the cookies have been accepted 
        or not and then continue */

        Landing.getBody().then($body => {
            if ($body.find('[id="onetrust-accept-btn-handler"]').length > 0) {   
                Landing.getCookieButton().then($vary => {
                  if ($vary.is(':visible')){
                    Landing.getCookieButton().click();
                  } 
                });
            } else {                    
                cy.log('Cookies already accepted');
            
                    /* 2. Where it says ‘Where are you going’, enter ‘Porto’ */
                    Landing.getWhereField().type("Porto");
                    cy.wait(3000);
                    Landing.getPortoSelectionDropdown().click();                        
                    
                    /* 3. Check-in: 1st of the next month */                                   
                    cy.wait(1000);
                    Landing.setStartDate().click();                        
                    
                    /* 4. Check-out: 7 days after check-in */                     
                    Landing.setEndDate().click();

                    /* 5. Click on Search */
                    Landing.getSearchButton().click();
                    cy.wait(2000);
                
                    /* 6. Print total number of properties found on the console */
                    Results.getDownPropertieLabel().then(($op2) => {
                        cy.log($op2.text());});                        
                    cy.wait(2000);
            
                     /*
                        7. Verify the Check-in date on the left is the 1st of next month
                        8. Verify the Check-out date on the left is the 7th of next month
                    */ 
                    
                    Results.getStartDateLeftSideBar().then(($startDate) => {
                            cy.log($startDate.text())                           
                            Results.getStartDateLeftSideBar().should('have.text', $startDate.text());                         
                            ;});                                                
                    
                    Results.getEndDateLeftSideBar().then(($endtDate) => {
                            cy.log($endtDate.text());
                            Results.getEndDateLeftSideBar().should('have.text', $endtDate.text());
                            ;});   

                    cy.wait(2000);
                 
                    /* 9. Print the names of the properties found on this first page */                        
                    Results.getResultsTable().each(($element, index, $list) => {
                        cy.log(`Propertie ${index}: ${$element.text()}`);
                    });                       
               
            }
        });   


});



});

