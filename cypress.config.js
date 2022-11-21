const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  video: false,
  screenshotOnRunFailure: true,  
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
