// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../e2e/Utils/base.cy.js'
import '../e2e/Utils/login.cy.js'
import '../e2e/Utils/homePage.cy.js'
import '../e2e/Utils/newuserSetting.cy.js'
import '../e2e/Utils/newuserProfiles.cy.js'
import '../e2e/Utils/configEditor.cy.js'
import '../e2e/Utils/NURUser.cy.js'
import addContext from 'mochawesome/addContext'
// Alternatively you can use CommonJS syntax:
// require('./commands')


//Following code attaches the failed test screenshots residing inside the /cypress/results/reports/mochareports/screenshots in the mocha final report.
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      let item = runnable
      const nameParts = [runnable.title]
  
      // Iterate through all parents and grab the titles
      while (item.parent) {
        nameParts.unshift(item.parent.title)
        item = item.parent
      }
  
      const fullTestName = nameParts
              .filter(Boolean)
              .join(' -- ')           // this is how cypress joins the test title fragments
  
      const imageUrl = `screenshots/${
        Cypress.spec.name
      }/${fullTestName} (failed).png`
  
      addContext({ test }, imageUrl)
    }
  })