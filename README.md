# qaChallageBooking

##  Test case

Create an automated test project that takes the following steps
1. go to the booking main page (https://www.booking.com)
2. Where it says ‘Where are you going’, enter ‘Porto’
3. Check-in: 1st of the next month
4. Check-out: 7th of the next month
5. Click on Search
6. Print total number of properties found on the console
7. Verify the Check-in date on the left is the 1st of next month
8. Verify the Check-out date on the left is the 7th of next month
9. Print the names of the properties found on this first page

In order to acomplish the challenge, the steps i followed were:

    1- Created a new repository in github and cloned it in my local machine.
    2- Installed cypress and created a new project. (npm install cypress --save-dev).
        In this case, i'm using the last version of Cypress released till today.
    3- Created a new folder called "integrations" and inside it, created a new file called "testbooking.spec.js" where are located the test that have been requested.
    4- Created the page object model for the landing page and the search page (bookingPage.js and searchPage.js).
    5- Created the test case with the data provided. 
        - The test case is located in the file "testbooking.spec.js".
        - The site as soon it opens, request for accept or not the cookies. I have to validate if the request is displayed and if it is, it will accept it, if not, it will continue with the test.
        - I also configured the test run with retries in case of failure, because the site is a little bit slow sometimes and it could fail.        
    6- Executed the test case and checked the results (npx cypress open)
    7- Create a new branch and push the changes to the repository.
    8- Create a pull request to the master branch.
    9- Merge the pull request to the master branch.

How to run the test?
    
        1- Clone the repository.
        2- Install cypress (npm install cypress --save-dev).
        3- Execute the test (npx cypress open).
        4- Select the test case (testbooking.spec.js).
        5- Check the results.

##  Test results

![image](https://user-images.githubusercontent.com/50757354/203113266-b96fa7d9-27df-4532-823a-9673bcc3b40a.png)

![image](https://user-images.githubusercontent.com/50757354/203113591-74666479-23ea-4b92-b12b-138cf2f1fa27.png)

![image](https://user-images.githubusercontent.com/50757354/203113754-27548a70-50ab-45e9-9d67-15a57f937d61.png)

![image](https://user-images.githubusercontent.com/50757354/203114108-b1444e01-7dee-4971-8f1c-005801f38d93.png)



