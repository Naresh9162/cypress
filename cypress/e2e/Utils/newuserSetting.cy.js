import newuserSettingsPage from "../ui/config/modules/public/newuserregistration/NewUserSettingsPage.cy";
import loginPage from "../ui/loginPage.cy";
const newuserSettings = new newuserSettingsPage()
const login = new loginPage()
Cypress.Commands.add('enableNewUserSetting',(data)=>{
    cy.wait(10000)
    cy.contains('Modules').click()
    cy.contains('Public').click()
    cy.contains('New User Registration').click()
    cy.contains('New User Settings').click()
    cy.wait(10000)
    newuserSettings.titleEnableNewUserRegistration().click()
    newuserSettings.enableNewUserRegistration().click()
})

Cypress.Commands.add('clickNewUserDefaultProfile',(data)=>{
    cy.wait(10000)
    cy.contains('Modules').click()
    cy.contains('Public').click()
    cy.contains('New User Registration').click()
    cy.contains('New User Profiles').click()
    cy.contains('default').click()
})