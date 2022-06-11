Cypress.Commands.add('waitForSpinners',()=>{
    cy.get('.loader__container', {timeout : 10000}).should('have.length',0)
})

