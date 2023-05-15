const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 2000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples', '**/cypress/e2e/example'],
    baseUrl: 'https://tutorialsninja.com/demo/',
    
  },
});
