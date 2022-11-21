class LandingPage
{

    //create a function that return the date of the next month

    
    setStartDate() {

        var year1;
        var month1;
        var day1;
        var startDate;

        const date = new Date();
        year1 = date.getFullYear();
        month1 = parseInt(date.getMonth());
        month1 = parseInt(month1) + 1;
        day1 = "01";       
        startDate = year1 + "-" + month1 + "-" + day1; 
        console.log(startDate);
        return cy.get('[data-date="' + startDate + '"]')

    }

    setEndDate() {

        var year2;
        var month2;
        var day2;
        var endDate;

        const date = new Date();
        year2 = date.getFullYear();
        month2 = parseInt(date.getMonth());
        month2 = parseInt(month2) + 1;
        day2 = "07" ;       
        endDate = year2 + "-" + month2 + "-" + day2;
        console.log(endDate);
        return cy.get('[data-date="' + endDate + '"]')
    }
    

    getBody() {return cy.get('[id="b2indexPage"]');}
    getCookieButton() {return cy.get('[id="onetrust-accept-btn-handler"]');}
    getWhereField() {return  cy.get('[name="ss"]');}
    getPortoSelectionDropdown() {return cy.get('[data-label="Porto, Norte Region, Portugal"]')};
    //getPortoSelectionDropdown() {return cy.get('[data-i="0"]')};
   
    getSearchButton() {return cy.get('.sb-searchbox__button')};

}

export default LandingPage;