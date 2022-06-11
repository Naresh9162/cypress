
import homePage from "../ui/HomePage.cy"
import configEditorPage from "../ui/configEditorPage.cy"

const ssprhome = new homePage()
const configEditor = new configEditorPage()

Cypress.Commands.add('clickChangepassword',(data)=>{
    ssprhome.changepassword().click()
})

Cypress.Commands.add('clickSetupSQNS',(data)=>{
    ssprhome.setupSQNS().click()
})

Cypress.Commands.add('clickMyAccount',(data)=>{
    ssprhome.myAccount().click()
})

Cypress.Commands.add('clickAdministration',(data)=>{
    ssprhome.adminFunctions().click()
})

Cypress.Commands.add('clickLogout',(data)=>{
   // ssprhome.logout().click()
   //cy.get('//body/div[@id="wrapper"]/div[@id="header"]/div[@id="header-center"]/div[@id="header-center-right"]/div[@id="header-menu-wrapper"]/a[@id="LogoutButton"]/span[1]').click()
})

Cypress.Commands.add('clickConfigEditor',(data)=>{
  
    cy.visit('/sspr/private/config/editor')
    configEditor.enterConfigPass().type(data.password)
    configEditor.rememberConfigPass().click()
    configEditor.signinButton().click()
    
})

Cypress.Commands.add('clickConfigManager',(data)=>{
    ssprhome.usernameHeaderCaret().click()
    ssprhome.configManager().click()
})

Cypress.Commands.add('clickAdminstrator',(data)=>{
    ssprhome.usernameHeaderCaret().click()
    ssprhome.administration().click()
})

Cypress.Commands.add('clickViewLog',(data)=>{
    ssprhome.usernameHeaderCaret().click()
    ssprhome.viewLog().click()
})