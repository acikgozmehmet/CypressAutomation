const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    env : {
      qa: 'https://rahulshettyacademy.com/seleniumPractise',
      dev: 'https://example.cypress.io',
      practice: 'https://rahulshettyacademy.com/AutomationPractice/',
      angularpractice: 'https://rahulshettyacademy.com/angularpractice/'
    } 
  },
});
