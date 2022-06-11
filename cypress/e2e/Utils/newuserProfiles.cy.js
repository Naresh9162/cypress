import newuserProfilesPage from "../ui/config/modules/public/newuserregistration/NewUserProfilesPage.cy"

const newuserProfile = new newuserProfilesPage()

Cypress.Commands.add('newuserRedirectURL',(data)=>{
    cy.wait(10000)
    newuserProfile.creationContextTitle().click()
    newuserProfile.newuserRedirectUrl().type(data.redirectUrl)
    newuserProfile.okButton().click()
})

Cypress.Commands.add('newuserCreationContext',(data)=>{
    cy.wait(10000)
    newuserProfile.userCreationContext().click() 
    newuserProfile.ldapBrowseTitle().click()
    cy.contains('Edit Text').click()
    cy.get('[id=addValueDialog_input]').click().focused().clear().type(data.creationContext)
    newuserProfile.okButton().click()
    
})

Cypress.Commands.add('disablePromptPassword',()=>{
    cy.wait(10000)
    newuserProfile.creationContextTitle().click()
    newuserProfile.promptPassword().click()
})


