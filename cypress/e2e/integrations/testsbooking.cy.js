describe("Challange on booking", () => {

});

it("Search",{"retries": 2}, () => {
    
    
            /* 1. go to the booking main page (https://www.booking.com) */
            cy.visit("https://www.booking.com/");
            cy.wait(4000);

            /* on the first run, can pop-up the Cookies terms and conditions. I'm using a conditional to determinate if the cookies have been accepted or not and then continue */

            cy.get('[id="b2indexPage"]').then($body => {
                if ($body.find('[id="onetrust-accept-btn-handler"]').length > 0) {   
                //evaluates as true if button exists at all
                    cy.get('[id="onetrust-accept-btn-handler"]').then($vary => {
                      if ($vary.is(':visible')){
                        cy.get('[id="onetrust-accept-btn-handler"]').click();
                      } 
                    });
                } else {
                    assert.isOk('everything','Cookies already accepted');
                    cy.log('Cookies already accepted');
                
                        /* 2. Where it says ‘Where are you going’, enter ‘Porto’ */
                        cy.get('[name="ss"]').type("Porto");
                        cy.wait(2000);    
                        
                        /* 3. Check-in: 1st of the next month */
                        cy.get('[data-testid="date-display-field-start"]').click({force:true});    
                        cy.get('[data-date="2022-12-01"]').click();

                        /* 4. Check-out: 7 days after check-in */                     
                        cy.get('[data-date="2022-12-07"]').click();

                        /* 5. Click on Search */
                        cy.get('.ffa9856b86 > :nth-child(4) > .fc63351294').click();
                        cy.wait(2000);
                    
                        /* 6. Print total number of properties found on the console */
                        cy.get('[class="e1f827110f d3a14d00da"]').then(($op1) => {
                            cy.log($op1.text());});
                        cy.get('[class="d8f77e681c"]').then(($op2) => {
                            cy.log($op2.text());});
                        
                        cy.wait(2000);
                
                         /*
                            7. Verify the Check-in date on the left is the 1st of next month
                            8. Verify the Check-out date on the left is the 7th of next month
                        */
                    
                        cy.get('[data-testid="date-display-field-start"]').should('have.text', '1Thursday 1 December 2022');
                        cy.get('[data-testid="date-display-field-end"]').should('have.text', '7Wednesday 7 December 2022');
                     
                        /* 9. Print the names of the properties found on this first page */
                   
                }
            });   
   

});